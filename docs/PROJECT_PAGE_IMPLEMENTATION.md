# Project Page Implementation Documentation

## Overview

This document describes how the **project detail page** and **interactive demo** for the Healthy Lifestyle GA project were implemented. The goal was to: (1) show a professional project description on a separate page, and (2) allow visitors to "test" the recommendation concept directly in the browser without running Python.

---

## 1. Architecture

### 1.1 Data flow

```
projectsData (data.js)     →  Cards on index.html  →  "View Project" → project.html?project=slug
projectDetails (projectDetails.js)  →  project.html  →  Renders content + demo
```

- **`js/data.js`** — List of projects for the main page (title, short description, tags, `slug`, `links.page`, `links.code`).
- **`js/projectDetails.js`** — Full content for each project (title, subtitle, sections, demo config). Keyed by **slug** (e.g. `healthylifestylega`).
- **`project.html`** — Single template. Reads `?project=slug`, loads the matching entry from `projectDetails`, and renders HTML + binds the demo.

### 1.2 Why one HTML page and one details file?

- **One `project.html`** — All projects use the same layout. The slug in the URL decides which project to show. Adding a new project = new entry in `projectDetails`, no new HTML file.
- **Separate `projectDetails.js`** — Long text and demo config stay out of `data.js`. Main page only loads `data.js`; project page loads both `projectDetails.js` and uses the slug to pick the right project.

---

## 2. Data structures

### 2.1 Main page: `projectsData` (in `data.js`)

Each project has:

| Field        | Purpose |
|-------------|--------|
| `slug`      | Unique id for the project (e.g. `healthylifestylega`). Used in URL and to look up `projectDetails`. |
| `title`     | Short title for the card. |
| `description` | One or two sentences for the card. |
| `tags`      | Array of tech/keywords (e.g. `['Python', 'Genetic Algorithm', 'AI', 'pandas']`). |
| `links.page`| URL of the detail page: `project.html?project=<slug>`. Use `'#'` if no page yet. |
| `links.code`| GitHub (or other) repo URL. Use `'#'` if no link. |
| `image`     | Emoji or icon for the card. |

Example:

```javascript
{
  slug: 'healthylifestylega',
  title: 'Healthy Lifestyle GA',
  description: 'AI-based recommendation system...',
  tags: ['Python', 'Genetic Algorithm', 'AI', 'pandas'],
  links: {
    page: 'project.html?project=healthylifestylega',
    code: 'https://github.com/Zarbali/HealthyLifestyleGA'
  },
  image: '🥗'
}
```

### 2.2 Detail page: `projectDetails` (in `projectDetails.js`)

Key = **slug**. Value = object with:

| Field          | Purpose |
|----------------|--------|
| `title`        | Full title on the project page. |
| `subtitle`     | Short lead paragraph under the title. |
| `techStack`    | Array of strings for tech tags. |
| `githubUrl`    | Link to repository. |
| `howToRun`     | Command to run (e.g. `python main.py`). |
| `exampleOutput`| Sample terminal output (string). |
| `hasDemo`      | `true` if this project has an interactive demo block. |
| `demoConfig`   | Config for the demo (see below). |
| `sections`     | Array of `{ title, content, bullets? }` for the main text. |

**Sections** — Each section has:

- `title` — Section heading (e.g. "Overview", "Why Python").
- `content` — Main paragraph(s).
- `bullets` — Optional array of strings; rendered as a `<ul>` list.

**Demo config** (`hasDemo: true`):

- `goals` — Array of `{ value, label }` for the "Goal" dropdown (e.g. weight_loss, muscle_gain, maintenance).
- `preferences` — Array of `{ value, label }` for the "Preference" dropdown (e.g. vegan, vegetarian, omnivore).
- `results` — Object: key = `goal_preference` (e.g. `weight_loss_vegetarian`), value = `{ diet, workout, net }` (strings shown in the result box).

The demo does **not** run the real Python GA; it only looks up a predefined result for the selected goal + preference and displays it after a short delay to simulate "calculation".

---

## 3. Main page: project cards and links

### 3.1 Rendering cards (`js/render.js`)

- For each project, the renderer builds a card with:
  - **View Project →** — Link to `project.links.page` (detail page). Rendered only if `page !== '#'`.
  - **GitHub →** — Link to `project.links.code`. Rendered only if `code !== '#'`.
- So the same structure supports both "detail page" and "code link" independently.

### 3.2 Why `links.page` and `links.code`?

- `page` — Dedicated project page with full description and demo.
- `code` — External repo (e.g. GitHub).  
Keeping them separate allows a project to have only a page, only a repo, or both.

---

## 4. Project page: `project.html`

### 4.1 Loading the right project

1. Read query: `const slug = new URLSearchParams(window.location.search).get('project');`
2. If `!slug` or `!projectDetails[slug]`, show "Project not found" and stop.
3. Otherwise set `project = projectDetails[slug]` and render.

### 4.2 Building the HTML (in script)

All content is generated in JavaScript to keep one template and avoid duplicate HTML for each project. Order of blocks:

1. **Back link** — "← Back to Projects" (hardcoded in HTML).
2. **Title** — `project.title`.
3. **Lead** — `project.subtitle` (one paragraph).
4. **Tech tags** — From `project.techStack`; each in a `project-detail__tag` span.
5. **Actions** — "View on GitHub" (primary button), "Back to Projects" (secondary).
6. **Demo block** (if `project.hasDemo` and `project.demoConfig`):
   - Heading: "Try the recommendation engine".
   - Short description.
   - Form: two `<select>` (goal, preference) + submit button "Get recommendation".
   - Result div (initially empty; filled after submit).
7. **Sections** — For each `project.sections`: `<h3>` + `<p>` (from `content`) + optional `<ul>` (from `bullets`).
8. **How to run** — Heading + `<pre>`-like block with `project.howToRun`.
9. **Example output** — Heading + `<pre>`-like block with `project.exampleOutput`.

### 4.3 Escaping

- Every user- or config-derived string is passed through an `escapeHtml(text)` helper before being inserted into `innerHTML`, to avoid XSS (e.g. if a project title or section content contained `<script>` or `onerror=`).

### 4.4 Demo behavior (JavaScript)

- Form submit: `event.preventDefault()`.
- Read selected `goal` and `preference` from the two selects.
- Build key: `goal + '_' + preference` (e.g. `weight_loss_vegetarian`).
- Set result div to "Calculating..." and add a class to make it visible.
- After ~600 ms timeout, look up `project.demoConfig.results[key]`:
  - If found: show "Recommended diet: ...", "Recommended workout: ...", "Net calories: ...".
  - If not found: show a short "No recommendation" message.
- Result is static per combination; no server or Python call. The delay only simulates processing.

---

## 5. Styling (CSS)

### 5.1 File and naming

- All project-page styles are in **`css/components.css`** at the end, with classes prefixed by **`project-detail__`** and **`project-detail__demo`**.

### 5.2 Main layout

- **`.project-detail`** — Vertical padding (including space for fixed nav).
- **`.project-detail .container`** — Max-width 800px, centered.
- **`.project-detail__back`** — Link back to projects list.
- **`.project-detail__title`** — Large gradient title.
- **`.project-detail__lead`** — Subtitle; slightly smaller, secondary color, limited width for readability.
- **`.project-detail__tech`** — Flex wrapper for tags.
- **`.project-detail__tag`** — Pill-shaped tech tag (background, border, radius).

### 5.3 Sections and content

- **`.project-detail__section`** — Margin between sections.
- **`.project-detail__section-title`** — Section heading.
- **`.project-detail__section-p`** — Paragraph text (color, line-height).
- **`.project-detail__bullets`** — List; padding-left, spacing between items.
- **`.project-detail__code-block`** — Monospace, dark background, border, padding (for "How to run" and "Example output").

### 5.4 Demo block

- **`.project-detail__demo`** — Card-like container (glass style, border, padding).
- **`.project-detail__demo-title`** / **`.project-detail__demo-desc`** — Title and short text above the form.
- **`.project-detail__demo-form`** — Flex, wrap, gap; aligns label/select rows and button.
- **`.project-detail__demo-row`** — One label + one select per row.
- **`.project-detail__label`** — Label for selects.
- **`.project-detail__select`** — Styled dropdown (background, border, focus state).
- **`.project-detail__demo-result`** — Area where the recommendation text appears; min-height so layout doesn’t jump; opacity transition for show/hide.
- **`.project-detail__demo-result--visible`** — Class added when result is shown (opacity 1).
- **`.project-detail__demo-loading`** — Style for "Calculating..." (e.g. italic, primary color).

Design matches the rest of the site (dark theme, glass, gradients, variables from `variables.css`).

---

## 6. Adding a new project

1. **`js/data.js`** — Append to `projectsData`:
   - `slug` (unique),
   - `title`, `description`, `tags`, `links.page`, `links.code`, `image`.
2. **`js/projectDetails.js`** — Add to `projectDetails`:
   - Key = same `slug`.
   - Value = `title`, `subtitle`, `techStack`, `githubUrl`, `howToRun`, `exampleOutput`, `sections`, and optionally `hasDemo` + `demoConfig`.
3. **Links** — Set `links.page` to `project.html?project=<new-slug>`. No changes needed in `project.html` or `render.js`; they already use `slug` and `projectDetails[slug]`.

---

## 7. Summary

| Component            | Role |
|---------------------|------|
| `data.js`           | List of projects for cards; `slug` and `links.page` / `links.code`. |
| `projectDetails.js` | Full content per project (text + demo config), keyed by slug. |
| `project.html`      | One page: reads `?project=`, renders content, runs demo script. |
| `render.js`         | Builds cards with "View Project" and "GitHub" from `projectsData`. |
| `components.css`    | All project-detail and demo styles. |

The "test" on the page is a **simulation**: same inputs (goal + preference) as the real app, predefined outputs per combination, no backend or Python execution. This gives a professional project description and a way to try the concept without running code locally.
