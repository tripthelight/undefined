import HEADER from "../../components/header.js";

/** ===================================================
 * FUNCTIONS
 */

/** ===================================================
 * DOCUMENT READY
 */
// DOCUMENT READY COMMON
const comnInit = () => {
  HEADER();
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
