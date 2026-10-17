# Sinothando Mthombeni — S//SYSTEMS Portfolio

A responsive, single-page portfolio for Sinothando Mthombeni. The site presents systems, software and data work in a lightweight technical-workspace interface.

**Live site:** [sinothando-mthombeni.github.io/myportfolio](https://sinothando-mthombeni.github.io/myportfolio/)

## Highlights

- Premium editorial/product design focused on selected work
- Dedicated case studies for Heritage Site Information System, NGO Donor & Programme Management and NIDS analysis work
- Project visualisations, concise technical decisions and outcome signals
- Experience snapshot and concise capability narrative
- Downloadable CV and direct email, GitHub and LinkedIn actions
- Keyboard navigation, skip link and reduced-motion support
- SEO metadata for canonical, Open Graph and Twitter previews

## Technology

- Static HTML, CSS and vanilla JavaScript
- Google Fonts: DM Sans, JetBrains Mono and Space Grotesk
- No build step or framework dependency

The repository is compatible with GitHub Pages because all files are served directly from the repository root.

## Local preview

Open `index.html` in a browser. No package installation or development server is required.

For a dependency-free local server with correct MIME types and same-origin browser behaviour, use Node.js 18 or newer:

```bash
npm run dev
```

Then open `http://localhost:4173`. To use another port, set the `PORT` environment variable before running the command.

## Validation

The repository includes dependency-free structural checks for the static page. With Node.js 18 or newer installed, run:

```bash
npm run test
```

The check verifies required assets, document landmarks and metadata, unique IDs, in-page links, `aria-controls` targets, safe external-link attributes and inline JavaScript syntax. The same check runs in GitHub Actions on pushes and pull requests to `main`.

## Files

```text
index.html                    Complete portfolio: markup, styles and behaviour
papi.jpg                      Profile portrait used in the hero
Sinothando_General_CV.pdf     Downloadable CV
README.md                     Project documentation
```

## Publishing with GitHub Pages

1. Push the changes to the `main` branch.
2. In GitHub, open **Settings → Pages**.
3. Select the `main` branch and the `/ (root)` folder as the deployment source.
4. Save the settings. GitHub Pages publishes the site at the live URL above.

## Remaining content inputs

- Confirm repository or demo URLs for the Salesforce and NIDS projects before adding them.
- Add project screenshots only when they accurately represent the final projects.
- See [HANDOFF.md](HANDOFF.md) for a concise continuation brief.
- See [ENGINEERING_REQUIREMENTS.md](ENGINEERING_REQUIREMENTS.md) for architecture, testing, accessibility and responsive-design standards.

---

Built with HTML, CSS and JavaScript.
