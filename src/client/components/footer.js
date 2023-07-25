import "../scss/components/footer.scss";

export default () => {
  const FOOTER_COPYRIGHT = "Since 2023.7.25 &copy; undefiend.com";

  const HEADER_EL = document.querySelector("footer");
  HEADER_EL.innerHTML = FOOTER_COPYRIGHT;
};
