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
 *   category,target,female,male,others
 *   - category: the beneficiary segment as reported to the ASEAN Foundation
 *   - target: the committed number of beneficiaries for that segment
 *   - female, male, others: verified completions per gender. The three options
 *     mirror the pre- and post-course assessment forms, where "others" covers
 *     non-binary and "rather not say" responses.
 * Rows are shown in the order written here. Wrap a field in double quotes if
 * it contains a comma. Bar colours are assigned automatically, in order.
 *
 */

window.PROGRESS_SOURCE = 'sheet';
window.PROGRESS_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQyzECunprHBFcHi_Xsd64BwXchQlMTJT0IAbZXcMHPPtLgIY5Vh6eHzrg_r9gLohc1-9qqvnmoGNOc/pub?gid=0&single=true&output=csv';

window.PROGRESS_CSV = `category,target,female,male,others
University Students,2475,26,21,20
TVET Students,675,0,1,0
NEET Youth,675,6,2,0
Other Youth,675,2,3,2
`;
