/*
 * ASEAN AHEAD — course-taker (reach) data.
 *
 * REACH_SOURCE picks where the homepage course-takers panel reads its numbers:
 *   'repo'  — the CSV at REACH_DATA_URL, published by the aseanahead-data
 *             repo, which syncs it from the source sheet every 15 minutes;
 *             if it can't be fetched or has no valid rows, the panel keeps
 *             the CSV below and says so on the page.
 *   'local' — the CSV between the backticks below (this file only).
 * The page always paints the CSV below first and swaps in the repo data when
 * it arrives, so keep it current even while on 'repo': run aseanahead-data's
 * site-sync.py after a data change (it also maintains REACH_UPDATED; edit
 * either by hand only together with the other).
 *
 * The CSV holds one beneficiary category per line.
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

window.REACH_SOURCE = 'repo';
window.REACH_DATA_URL = 'https://raw.githubusercontent.com/benhur07b/aseanahead-data/main/reach.csv';

// UTC time the CSV below last changed—maintained by aseanahead-data's
// site-sync.py alongside the CSV itself; don't edit one without the other.
window.REACH_UPDATED = '2026-08-12T12:12:36Z';

window.REACH_CSV = `category,female,male,others
University Students,362,380,17
TVET Students,3,6,0
NEET Youth,87,79,3
Other Youth,72,96,6
`;
