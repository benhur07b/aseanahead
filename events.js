/*
 * ASEAN AHEAD — event schedule data.
 *
 * Edit ONLY the CSV between the backticks. One event per line.
 * Columns: date,time,title,modality,venue,city,host,register_url,notes
 *   - date: YYYY-MM-DD (required)
 *   - modality: Webinar | In-person | Hybrid | Self-paced
 *     (Self-paced = the programme-wide open call; set its date to the programme
 *      end date — it shows as "Open" and stays listed until that date passes)
 *   - register_url: leave empty if registration is not open yet
 *   - wrap a field in double quotes if it contains a comma
 */
window.EVENTS_CSV = `date,time,title,modality,venue,city,host,register_url,notes
2026-12-31,Anytime,Self-Paced Track — AI Career Readiness,Self-paced,ADA platform,Online,SmartCT, https://ada.aseanfoundation.org/course-detail/ai-career-readiness, Start and finish whenever you're ready. Expect regular check-ins from our champions.
`;
