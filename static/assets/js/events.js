/*
 * ASEAN AHEAD — event schedule data.
 *
 * EVENTS_SOURCE picks where the events page reads its schedule:
 *   'repo'  — the CSV at EVENTS_DATA_URL, published by the aseanahead-data
 *             repo, which syncs it from the source sheet every 15 minutes;
 *             if it can't be fetched or has no valid rows, the page keeps
 *             the CSV below and says so on the page.
 *   'local' — the CSV between the backticks below (this file only).
 * The page always paints the CSV below first and swaps in the repo data when
 * it arrives, so keep it current even while on 'repo': run aseanahead-data's
 * site-sync.py after a schedule change (it also maintains EVENTS_UPDATED;
 * edit either by hand only together with the other).
 *
 * The CSV holds one event per line.
 * Columns are matched by header name, so their order doesn't matter and extra
 * columns (e.g. a bookkeeping id) are ignored. The page needs:
 *   date,time,title,modality,venue,city,host,register_url,notes
 *   - date: YYYY-MM-DD (required)
 *   - modality: Webinar | In-person | Hybrid | Self-paced
 *     (Self-paced = the programme-wide open call; set its date to the programme
 *      end date — it shows as "Open" and stays listed until that date passes)
 *   - register_url: leave empty if registration is not open yet
 *   - wrap a field in double quotes if it contains a comma
 */

window.EVENTS_SOURCE = 'repo';
window.EVENTS_DATA_URL = 'https://raw.githubusercontent.com/benhur07b/aseanahead-data/main/events.csv';

// UTC time the CSV below last changed—maintained by aseanahead-data's
// site-sync.py alongside the CSV itself; don't edit one without the other.
window.EVENTS_UPDATED = '2026-08-12T17:27:20Z';

window.EVENTS_CSV = `date,time,title,modality,venue,city,host,register_url,notes
2026-12-31,Anytime,Self-Paced Track — AI Career Readiness,Self-paced,ADA Platform,Online,SmartCT,https://ada.aseanfoundation.org/course-detail/ai-career-readiness,Start and finish whenever you're ready. Expect regular check-ins from our champions.
2026-08-01,9:00 AM - 11:00 AM,AI Ready Mentoring Session 6 - Intro to ASEAN AHEAD,Webinar,Zoom,Online,SmartCT,https://forms.gle/fTezLnskPRtw7JeBA,Exclusive for AI Ready ASEAN Master Trainers and Institutional Partners
2026-08-18,1:00 PM - 4:00 PM,AI Career Readiness Training,Hybrid,Iligan City / Zoom,"CDIIS, Iligan City","Center for Digital Iligan, Innovation and Sustainability (CDIIS) | MSU-IIT | SmartCT",,By invitation
`;
