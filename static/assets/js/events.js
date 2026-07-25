/*
 * ASEAN AHEAD — event schedule data.
 *
 * EVENTS_SOURCE picks where the events page reads its schedule:
 *   'sheet' — the published Google Sheet CSV at EVENTS_SHEET_URL (live);
 *             if the sheet can't be fetched or contains no valid rows, the
 *             page falls back to the CSV below and says so on the page.
 *   'local' — the CSV between the backticks below (this file only).
 * Keep the CSV below current even while on 'sheet': it is the fallback, and
 * the columns of both sources are identical.
 *
 * Edit ONLY the CSV between the backticks. One event per line.
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

window.EVENTS_SOURCE = 'sheet';
window.EVENTS_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTb9QKPZR9UqYA1cAI-MVZsvQAE4ybnLR4KvfVHtLtRDE3-ZFJa0Rl0mTJk_nb32cRP2hlxEdq4gStj/pub?gid=0&single=true&output=csv';

window.EVENTS_CSV = `id,date,time,title,modality,venue,city,host,register_url,notes
46387_Self-paced_Online_SmartCT,2026-12-31,Anytime,Self-Paced Track — AI Career Readiness,Self-paced,ADA platform,Online,SmartCT,https://ada.aseanfoundation.org/course-detail/ai-career-readiness,Start and finish whenever you're ready. Expect regular check-ins from our champions.
46235_Webinar_Online_SmartCT,2026-08-01,9:00 AM - 11:00 AM,AI Ready Mentoring Session 6 - Intro to ASEAN AHEAD,Webinar,Zoom,Online,SmartCT,https://forms.gle/fTezLnskPRtw7JeBA,Exclusive for AI Ready ASEAN Master Trainers and Institutional Partners`;
