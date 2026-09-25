# Tasbeeh Hasan — Portfolio Website

A fully interactive, single-page portfolio built from your CV: an orbit-style
timeline, a filterable/searchable "achievement constellation," a certificates
wall, an experience section, affiliations, and a contact section with
copy-to-clipboard buttons.

This version has no photos anywhere — no portrait, no certificate scans, no
gallery — just text. It's ready to open or upload as-is.

## How to view it

Just open `index.html` in any browser — no build step, no server required.

## Editing content

All the text lives in `js/data.js` as plain JavaScript arrays/objects
(timeline, skills, achievements, certificates, experience, affiliations).
Edit the text there and the page re-renders automatically — no HTML editing
needed. `index.html` holds the page structure, `css/style.css` holds all
styling.

## Structure

```
index.html
css/style.css
js/data.js       ← all your content
js/script.js     ← rendering + interactivity
```

Good luck with the submission!
