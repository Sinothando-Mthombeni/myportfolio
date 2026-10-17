import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pages = ['index.html', 'projects/heritage.html', 'projects/ngo-donor.html', 'projects/nids.html'];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function matches(pattern, value) {
  return [...value.matchAll(pattern)];
}

function validatePage(relativePath) {
  const pagePath = resolve(root, relativePath);
  assert(existsSync(pagePath), `Missing page: ${relativePath}`);
  const html = readFileSync(pagePath, 'utf8');
  const label = relativePath;

  assert(/^<!DOCTYPE html>/i.test(html), `${label} must declare an HTML doctype.`);
  assert(/<html\s+lang="en">/i.test(html), `${label} must declare its language.`);
  assert(/<title>[^<]+<\/title>/i.test(html), `${label} needs a title.`);
  assert(/<meta\s+name="viewport"\s+content="width=device-width, initial-scale=1\.0">/i.test(html), `${label} needs a viewport declaration.`);
  assert(/<main\b/i.test(html), `${label} needs a main landmark.`);
  assert(/<link\s+rel="stylesheet"/i.test(html), `${label} needs the shared stylesheet.`);

  const ids = matches(/\sid="([^"]+)"/g, html).map((match) => match[1]);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  assert(duplicateIds.length === 0, `${label} has duplicate IDs: ${[...new Set(duplicateIds)].join(', ')}`);

  for (const match of matches(/href="#([^"]+)"/g, html)) {
    assert(ids.includes(match[1]), `${label} has a missing anchor target: #${match[1]}`);
  }

  for (const match of matches(/aria-controls="([^"]+)"/g, html)) {
    assert(ids.includes(match[1]), `${label} has a missing aria-controls target: ${match[1]}`);
  }

  for (const anchor of matches(/<a\b[^>]*>/gi, html)) {
    const tag = anchor[0];
    if (/target="_blank"/i.test(tag)) {
      assert(/rel="[^"]*noopener/i.test(tag), `${label} has an unsafe external link: ${tag}`);
    }
  }

  return { html, ids };
}

const index = validatePage('index.html');
pages.slice(1).forEach(validatePage);

assert(/<meta\s+name="description"/i.test(index.html), 'The homepage needs a meta description.');
assert(/<link\s+rel="canonical"/i.test(index.html), 'The homepage needs a canonical URL.');
assert(/prefers-reduced-motion/i.test(readFileSync(resolve(root, 'styles/main.css'), 'utf8')), 'Reduced-motion support is required.');
assert(/@media\(max-width:620px\)/i.test(readFileSync(resolve(root, 'styles/main.css'), 'utf8')), 'A narrow mobile breakpoint is required.');
assert(/min-height:(?:44|46|48)px/i.test(readFileSync(resolve(root, 'styles/main.css'), 'utf8')), 'Interactive controls must provide a touch target of at least 44px.');

for (const asset of ['papi.jpg', 'Sinothando_General_CV.pdf', 'styles/main.css', 'scripts/main.js']) {
  assert(existsSync(resolve(root, asset)), `Required local asset is missing: ${asset}`);
}

for (const caseStudy of ['projects/heritage.html', 'projects/ngo-donor.html', 'projects/nids.html']) {
  assert(index.html.includes(`href="${caseStudy}"`), `Homepage must link to ${caseStudy}`);
}

const mainScript = readFileSync(resolve(root, 'scripts/main.js'), 'utf8');
new Function(mainScript);

console.log(`Portfolio validation passed: ${pages.length} pages, ${index.ids.length} homepage IDs and shared JavaScript checked.`);
