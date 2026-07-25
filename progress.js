/*
 * ASEAN AHEAD — beneficiary progress data.
 *
 * Edit ONLY the CSV between the backticks. One beneficiary category per line.
 * Columns: category,target,female,male,others
 *   - category: the beneficiary segment as reported to the ASEAN Foundation
 *   - target: the committed number of beneficiaries for that segment
 *   - female, male, others: verified completions per gender. The three options
 *     mirror the pre- and post-course assessment forms, where "others" covers
 *     non-binary and "rather not say" responses.
 * Rows are shown in the order written here. Wrap a field in double quotes if
 * it contains a comma. Bar colours are assigned automatically, in order.
 *
 * Segment targets are the minimums from project-plan/PROJECT-INFO.md
 * (total 4,500). Numbers may move between segments as long as the total is
 * met, but any shortfall must be justified in the report to the Foundation.
 */
window.PROGRESS_CSV = `category,target,female,male,others
University Students,2475,26,20,1
TVET Students,675,0,1,0
NEET Youth,675,4,2,0
Other Youth,675,2,3,2
`;
