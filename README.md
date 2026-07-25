# ASEAN AHEAD Training Guide — Website

Static site for the ASEAN AHEAD AI Career Readiness training guide in the
Philippines. It is the single reference for participants joining a training,
Champions running one, and partners hosting one.

## Pages

| Page | Audience | Contents |
|---|---|---|
| `index.html` | Everyone | Landing: audience entry cards, course overview, core principles, ways to join |
| `join.html` | Participants | Filterable schedule of upcoming events, plus the self-paced track |
| `participants.html` | Participants | Perks, step-by-step journey, the three completion requirements |
| `champions.html` | Champions | Role, delivery modes, standard two-part agenda, lifecycle, facilitator checklist, data handling |
| `delivery-modes/synchronous.html` | Champions | Running a live session: staffing, pre-session preconditions, Part 1 exit point, close-out |
| `delivery-modes/asynchronous.html` | Champions | Self-paced follow-up playbook: Day 0–28 sequence, triage lanes, weekly routine |
| `partners.html` | Partners & hosts | Partner types, PhP 3,000 / 50 completions support, minimum requirements, process |
| `resources.html` | All roles | Templates, platform links, branding, contacts (many still TBD) |
| `faq.html` | Everyone | Combined FAQ, filterable by audience |

Supporting files: `styles.css` (one shared stylesheet), `events.js` (event
schedule data), `assets/` (logos and images).

## Preview

Open `index.html` directly in a browser, or serve locally:

```
python3 -m http.server -d . 8000
```

No build step and no dependencies — everything runs from these files as-is.

## Editing the event schedule

`join.html` reads its schedule from `events.js`. Edit only the CSV between the
backticks; the surrounding JavaScript is a one-line wrapper that lets the data
load when the page is opened straight from disk.

Columns: `date,time,title,modality,venue,city,host,register_url,notes`

- `date` — `YYYY-MM-DD`, required
- `modality` — `Webinar`, `In-person`, `Hybrid`, or `Self-paced`
- `register_url` — leave empty and the event shows "Registration TBA"
- Wrap any field containing a comma in double quotes

Rows with an invalid date, an unknown modality, or a missing title are rejected
whole and reported on the page, so a malformed entry can never render as a
half-broken event. The Self-paced row is the programme-wide open call: give it
the programme end date and it displays as "Open" until that date passes.

## Conventions

- **Section anchors.** Every `<p class="section-label">` carries an id slugged
  from its own text, so any section is linkable — `champions.html#run-of-show`,
  `delivery-modes/asynchronous.html#follow-up-sequence`. Renaming a label
  changes its URL, so grep for the old slug before renaming.
- **Deep links into the schedule.** `join.html#Webinar`, `#In-person`,
  `#Hybrid`, and `#Self-paced` preselect that modality filter. The values must
  match the filter buttons exactly; anything else falls back to the default view.
- **Interactive pages.** Only `join.html` and `faq.html` use JavaScript, both
  inline and dependency-free. Every other page is static HTML.
- **Fonts.** Poppins (display) and Inter (body) load from Google Fonts, with
  system fallbacks. Everything else is local and light-bandwidth by design.
- **TBD markers.** Items marked **TBD** are genuinely undecided — contacts,
  disbursement process, verification SLA, templates, and the branding kit.
  Placeholder links (`href="#"`) mark forms that do not exist yet; each carries
  a `TODO` comment naming what belongs there.
