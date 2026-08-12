/*
 * ASEAN AHEAD — beneficiary progress data.
 *
 * PROGRESS_SOURCE picks where the homepage tracker reads its numbers:
 *   'sheet' — the published Google Sheet CSV at PROGRESS_SHEET_URL (live);
 *             if the sheet can't be fetched or contains no valid rows, the
 *             tracker falls back to the CSV below and says so on the page.
 *   'local' — the CSV between the backticks below (this file only).
 * Keep the CSV below current even while on 'sheet': it is the fallback, and
 * the columns of both sources are identical.
 *
 * Edit ONLY the CSV between the backticks. One beneficiary category per line.
 * Columns are matched by header name, so their order doesn't matter and extra
 * columns (e.g. a bookkeeping id) are ignored. The page needs:
 *   category,female,male,others
 *   - category: the beneficiary segment as reported to the ASEAN Foundation
 *   - female, male, others: verified completions per gender. The three options
 *     mirror the pre- and post-course assessment forms, where "others" covers
 *     non-binary and "rather not say" responses.
 * Rows are shown in the order written here. Wrap a field in double quotes if
 * it contains a comma. Bar colours are assigned automatically, in order.
 * There is no target column: the overall programme target is a page-level
 * constant in index.html, not part of the data.
 *
 */

window.PROGRESS_SOURCE = 'sheet';
window.PROGRESS_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQyzECunprHBFcHi_Xsd64BwXchQlMTJT0IAbZXcMHPPtLgIY5Vh6eHzrg_r9gLohc1-9qqvnmoGNOc/pub?gid=0&single=true&output=csv';

// UTC time the CSV below last changed—maintained by aseanahead-data's
// site-sync.py alongside the CSV itself; don't edit one without the other.
window.PROGRESS_UPDATED = '2026-08-12T11:40:52Z';

window.PROGRESS_CSV = `category,female,male,others
University Students,111,142,3
TVET Students,0,3,0
NEET Youth,17,24,0
Other Youth,16,27,9
`;
