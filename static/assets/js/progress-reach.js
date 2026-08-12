/*
 * ASEAN AHEAD — course-taker (reach) data.
 *
 * REACH_SOURCE picks where the homepage course-takers panel reads its numbers:
 *   'sheet' — the published Google Sheet CSV at REACH_SHEET_URL (live);
 *             if the sheet can't be fetched or contains no valid rows, the
 *             panel falls back to the CSV below and says so on the page.
 *   'local' — the CSV between the backticks below (this file only).
 * Keep the CSV below current even while on 'sheet': it is the fallback, and
 * the columns of both sources are identical.
 *
 * Edit ONLY the CSV between the backticks. One beneficiary category per line.
 * Columns are matched by header name, so their order doesn't matter and extra
 * columns (e.g. a bookkeeping id) are ignored. The page needs:
 *   category,female,male,others
 *   - category: the beneficiary segment as reported to the ASEAN Foundation
 *   - female, male, others: course takers per gender—everyone who has started
 *     the course, completed or not. The three options mirror the pre- and
 *     post-course assessment forms, where "others" covers non-binary and
 *     "rather not say" responses.
 * There is no target column: reach has no per-category or overall target.
 * Rows are shown in the order written here. Wrap a field in double quotes if
 * it contains a comma. Bar colours are assigned automatically, in order.
 *
 */

window.REACH_SOURCE = 'sheet';
window.REACH_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQyzECunprHBFcHi_Xsd64BwXchQlMTJT0IAbZXcMHPPtLgIY5Vh6eHzrg_r9gLohc1-9qqvnmoGNOc/pub?gid=1472833579&single=true&output=csv';

// UTC time the CSV below last changed—maintained by aseanahead-data's
// site-sync.py alongside the CSV itself; don't edit one without the other.
window.REACH_UPDATED = '2026-08-12T11:19:26Z';

window.REACH_CSV = `category,female,male,others
University Students,359,378,17
TVET Students,3,6,0
NEET Youth,85,78,3
Other Youth,72,94,6
`;
