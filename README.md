# brettChapman.github.io

Personal landing page for Brett Chapman, PhD: bioinformatician and data scientist in Perth, Western Australia.
Built with [Jekyll](https://jekyllrb.com) and hosted on GitHub Pages at **https://brettchapman.github.io**.

## Pages

| Tab | File | What it shows |
|---|---|---|
| About | `index.html` | Photo, intro, metrics, skills, selected publications |
| Portfolio | `portfolio.html` | Sub-tabs for Projects, Analyses and Publications |
| Consultancy | `consultancy.html` | Services, who I work with, process. Can be switched off |
| Notes | `notes.html` | Optional blog (off by default) |
| CV | `cv.md` | Web CV (no phone number) |
| Contact | `contact.html` | Profile links, plus a form if Formspree is set up |

## Everyday edits

- **Your details, links, metrics:** `_config.yml`
- **Switch consultancy on/off:** in `_config.yml`, set `consultancy: enabled: true` or `false`. When off, the tab and home-page button disappear and `/consultancy/` shows a short "not taking new work" note with a `noindex` tag.
- **Availability banner:** `availability:` in `_config.yml` (set to `""` to hide).
- **Projects and analyses:** `_data/portfolio.yml`. To add a new sub-tab, add a section there and list it in `portfolio.html`.
- **Publications:** `_data/publications.yml`. Mark `first_author: true` and `selected: true` (shown on the home page).
- **Citation metrics:** `metrics:` in `_config.yml`.
- **Photo:** by default the site uses your GitHub avatar. To use a different photo, add it as `assets/img/brett.jpg` and set `author: avatar: /assets/img/brett.jpg`.
- **Contact form:** create a free form at [formspree.io](https://formspree.io) and paste its ID into `formspree_id:`.
- **Notes/blog:** set `blog: enabled: true`, then add posts to `_posts/` named `YYYY-MM-DD-title.md` (see `_drafts/example-note.md`).
