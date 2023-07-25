/** ===================================================
 * FUNCTIONS
 */

/** ===================================================
 * DOCUMENT READY
 */
// DOCUMENT READY COMMON
const comnInit = () => {
  console.log("111");
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
