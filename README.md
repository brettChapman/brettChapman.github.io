# brettChapman.github.io

Personal landing page for Brett Chapman, PhD: bioinformatician and data scientist in Perth, Western Australia.
Built with [Jekyll](https://jekyllrb.com) and hosted on GitHub Pages at **https://brettchapman.github.io**.

Layout inspired by [Jimmy Breen's page](https://github.com/jimmybgammyknee/jimmybgammyknee.github.io): About, CV and Contact pages, plus a Portfolio tab and an optional Consultancy tab.

## Pages

| Tab | File | What it shows |
|---|---|---|
| About | `index.html` | Photo, intro, metrics, skills, selected publications |
| Portfolio | `portfolio.html` | Sub-tabs for Projects, Dashboards, Analyses and Publications |
| Consultancy | `consultancy.html` | Services, who I work with, process. Can be switched off |
| Notes | `notes.html` | Optional blog (off by default) |
| CV | `cv.md` | Web CV (no phone number) |
| Contact | `contact.html` | Profile links, plus a form if Formspree is set up |

## Everyday edits

All of these are plain text files you can edit directly on GitHub:

- **Your details, links, metrics:** `_config.yml`
- **Switch consultancy on/off:** in `_config.yml`, set `consultancy: enabled: true` or `false`. When off, the tab and home-page button disappear and `/consultancy/` shows a short "not taking new work" note with a `noindex` tag.
- **Availability banner:** `availability:` in `_config.yml` (set to `""` to hide).
- **Projects, dashboards, analyses:** `_data/portfolio.yml`. Add a `links:` entry when a demo goes live and remove the `note:` line.
- **Publications:** `_data/publications.yml`. Mark `first_author: true` and `selected: true` (shown on the home page).
- **Citation metrics:** `metrics:` in `_config.yml`.
- **Photo:** by default the site uses your GitHub avatar. To use a different photo, add it as `assets/img/brett.jpg` and set `author: avatar: /assets/img/brett.jpg`.
- **Contact form:** create a free form at [formspree.io](https://formspree.io) and paste its ID into `formspree_id:`.
- **Notes/blog:** set `blog: enabled: true`, then add posts to `_posts/` named `YYYY-MM-DD-title.md` (see `_drafts/example-note.md`).

## Publishing on GitHub Pages

1. Create a **public** repository named exactly `brettChapman.github.io` on GitHub (no README, licence or .gitignore).
2. Push this folder:
   ```bash
   git remote add origin https://github.com/brettChapman/brettChapman.github.io.git
   git push -u origin main
   ```
3. In the repository, go to **Settings → Pages**, set **Source** to *Deploy from a branch*, branch `main`, folder `/ (root)`.
4. After a minute or two the site is live at https://brettchapman.github.io.

Your existing project pages (for example `/multivis_tutorials/` and `/Nimbus_Cluster/`) keep working under the same domain.

## Previewing locally (optional)

```bash
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```

## Structure

```
_config.yml          site settings and feature switches
_data/               portfolio.yml, publications.yml
_includes/           head, header, footer, social links, publication entry
_layouts/            default, page, post
assets/css/          style.scss (light and dark themes)
assets/js/site.js    mobile menu, portfolio tabs, publication filters
```
