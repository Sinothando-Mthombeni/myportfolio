# Engineering requirements

## Architecture contract

- Keep the production site compatible with GitHub Pages: static HTML, CSS, JavaScript and assets served from the repository root.
- Use the existing vanilla implementation unless a proposed dependency solves a documented problem that cannot be addressed with platform APIs.
- Do not add a framework, build pipeline or remote runtime merely for styling. Tailwind is only appropriate after an intentional build-tool migration is approved.
- Use CSS custom properties for design tokens and keep interactive behaviour progressively enhanced: content and navigation must remain understandable if JavaScript fails.

## Local tooling

- Runtime: Node.js 18 or newer. No package installation is needed for the current project.
- `npm run dev` starts a local server at `http://127.0.0.1:4173` (or the `PORT` value).
- `npm run test` runs dependency-free structural validation.
- GitHub Actions must remain green before merging or publishing changes.

## Responsive UX requirements

- Design mobile-first whenever adding or changing a component. Check 320px, 375px, 768px, 1024px and 1440px widths before release.
- Preserve a single-column reading order below 760px unless a component demonstrably benefits from multiple columns.
- Interactive controls need a minimum 44px target in at least one dimension; mobile navigation links must remain individually reachable.
- Do not hide essential navigation, CV access or contact methods on mobile without an equivalent visible path.
- Avoid hover-only interactions. Every disclosure, control and project action must work with keyboard and touch.
- Use responsive images (`object-fit`, constrained dimensions and meaningful `alt` text) and avoid fixed widths that cause horizontal scrolling.

## Accessibility and performance requirements

- Keep semantic landmarks, ordered heading levels, visible focus indicators, a skip link and accurate ARIA relationships.
- Respect `prefers-reduced-motion`; animation must never be required to understand content.
- Pause or avoid continuous work when the document is hidden. Do not add large libraries, autoplay media or unoptimised assets without a measured need.
- Use `target="_blank"` only with `rel="noopener"`.

## Content integrity

- Portfolio facts must be verified by supplied source material. Do not invent certifications, dates, employer details, project metrics, links or live demos.
- Add project screenshots only when approved and representative of the released work.
- Keep external links explicit and test them before publishing.

## Change and release checklist

1. Update the relevant HTML, CSS, JavaScript and documentation.
2. Run `npm run test`.
3. Manually review desktop and mobile layouts in a real browser.
4. Check keyboard navigation, reduced-motion behaviour and visible focus.
5. Commit a focused change, push to `main`, and confirm the GitHub Pages deployment.
