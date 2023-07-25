import "../scss/components/footer.scss";

export default () => {
  const FOOTER_COPYRIGHT = `Since 2023.7.25 ⓒ undefiend.com`;

  const HEADER_EL = document.querySelector("footer");
  HEADER_EL.innerText = FOOTER_COPYRIGHT;
};
