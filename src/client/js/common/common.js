import HEADER from "../../components/header.js";
import FOOTER from "../../components/footer.js";

/** ===================================================
 * FUNCTIONS
 */

/** ===================================================
 * DOCUMENT READY
 */
// DOCUMENT READY COMMON
const comnInit = () => {
  HEADER();
  FOOTER();
};
const readyComn = () => {
  if (document.readyState === "complete") comnInit();
};
document.onreadystatechange = readyComn;

/** ===================================================
 * WINDOW RESIZE
 */
window.addEventListener("resize", () => {
  // resize
});
