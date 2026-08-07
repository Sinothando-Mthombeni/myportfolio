# Sinothando Mthombeni — Portfolio

A responsive, single-page portfolio site presenting my professional profile, technical skills, career experience, and projects — rebuilt as a distinctive "systems" identity rather than a generic template.

**Live site:** deploy via GitHub Pages (see below) — no build step required.

---

## Design

The visual identity is built around the intersection of the two things I actually do: keep infrastructure running, and build software on top of it.

- **Palette** — warm graphite background (`#17130F`) with a copper accent (`#CB7B3E`) and a sage-green signal color (`#8FA377`), replacing generic dark-navy/blue "tech" templates.
- **Type** — Space Grotesk for display headings, Inter for body copy, JetBrains Mono for terminal, tags, and data labels.
- **Signature element** — a live terminal card in the hero (`whoami`, `uptime --role`, `ls ./portfolio/flagship`) that narrates my role and flagship project in my own command line, instead of a generic hero banner.
- **Interaction** — a scroll progress bar, a soft cursor-follow glow, magnetic hover on buttons, scroll-triggered fade-ins, and animated skill bars. All motion respects `prefers-reduced-motion`.
- **Photo badge** — an ID-badge-style portrait frame at the top of the hero with corner brackets and a live status tag, instead of a plain circular avatar.

## Structure

| Section | Content |
|---|---|
| Hero | Photo badge, headline, live-terminal status card, CV download + GitHub links |
| About | Career narrative + a stat panel (tests, coverage, records processed) |
| Experience | Current role — IT Support Technician at MEGA (March 2026–present), expanded with the systems administration skills I'm building on the job |
| Flagship Project | Deep-dive on the Heritage Site Information System — architecture, metrics, live demo link |
| Other Projects | NGO Donor & Programme Management System (Salesforce), NIDS Socio-Economic Wellbeing Analysis (Python ETL) |
| Skills | Systems & Infrastructure / Development / Data, each with an honest proficiency bar (`growing` → `strong`) |
| Education | Degree, self-directed certification study, and on-the-job learning |
| Contact | Email, LinkedIn, GitHub |

## Files

```
index.html                      Full site — HTML, CSS, and JS in one file
profile.jpg                     Your portrait (add this — see below)
Sinothando_Mthombeni_CV.pdf     Downloadable CV (add this — see below)
README.md                       This file
```

## Setup — before deploying

1. **Add your photo.** Drop a square-ish portrait into the repo root named `profile.jpg` (or update the `src` in the `.badge-frame img` tag in `index.html` to match your filename). Until a photo is added, the badge automatically falls back to a monogram.
2. **Add your CV.** Place your current CV PDF in the repo root and make sure the filename matches the `href` on the "Download CV" button (`Sinothando_Mthombeni_CV.pdf`).
3. **Wire up the live demo.** Once the Heritage Site Information System is deployed on Render.com, set the `demoUrl` constant near the bottom of `index.html` to that URL — it automatically activates the "Live demo" button and the note in the flagship section.
4. **Update repo links.** Swap the placeholder GitHub links for the direct repository URLs of each project once confirmed.

## Deploying (GitHub Pages)

1. Push `index.html`, `profile.jpg`, and your CV PDF to the `main` branch.
2. In the repo, go to **Settings → Pages**.
3. Under **Source**, select the `main` branch and `/ (root)` folder.
4. Save — the site publishes to `https://sinothando-mthombeni.github.io/myportfolio/`.

## Technologies

- HTML5 + hand-written CSS (no framework, no build step)
- Vanilla JavaScript — scroll progress, intersection-observer fade-ins, cursor glow, magnetic buttons
- Google Fonts — Space Grotesk, Inter, JetBrains Mono

## Roadmap

- [ ] Add real portrait photo
- [ ] Confirm and link Heritage Site Information System live demo
- [ ] Link direct repository URLs for each project
- [ ] Add project screenshots to the flagship section
- [ ] Light-mode toggle

---

Built with care to reflect my journey, skills, and aspirations.

**Sinothando Mthombeni**
Email: sinopapi7@gmail.com
LinkedIn: [linkedin.com/in/sinothando-mthombeni-211166363](https://www.linkedin.com/in/sinothando-mthombeni-211166363/)
GitHub: [github.com/Sinothando-Mthombeni](https://github.com/Sinothando-Mthombeni)
