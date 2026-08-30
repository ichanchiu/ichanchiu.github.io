# I-Chan Chiu — Academic Website

Bilingual academic website for [ichanchiu.github.io](https://ichanchiu.github.io), built with Jekyll and hosted on GitHub Pages.

## Content updates

Most updates only require editing one structured data file:

- `_data/profile.yml` — identity, contact information, and profile links
- `_data/publications.yml` — published journal articles
- `_data/working_papers.yml` — working papers, status, authors, and research links
- `_data/research.yml` — research areas
- `_data/grants.yml` — funded research projects
- `_data/teaching.yml` — courses and teaching resources
- `_data/education.yml` and `_data/appointments.yml` — online CV

Each record stores English and Traditional Chinese fields together so both language versions stay synchronized.

## Pages

- `/` — English home
- `/zh/` — Traditional Chinese home
- `/research/`, `/publications/`, `/teaching/`, `/about/`
- `/zh/research/`, `/zh/publications/`, `/zh/teaching/`, `/zh/about/`

## Local preview

```sh
BUNDLE_PATH=vendor/bundle bundle install
BUNDLE_PATH=vendor/bundle bundle exec jekyll serve
```

Then open `http://127.0.0.1:4000/`.

## Publishing

GitHub Pages rebuilds and publishes the site when changes are pushed to the `main` branch.
