import "../scss/components/header.scss";

export default () => {
  const HEADER_LOGO = `
    <h1><a href="#" title="홈으로 이동">UNDEFINED</a></h1>
  `;
  const HEADER_UL = `
    <ul>
      <li><a href="#" title="페이지 이동">MENU 1</a></li>
      <li><a href="#" title="페이지 이동">MENU 2</a></li>
      <li><a href="#" title="페이지 이동">MENU 3</a></li>
    </ul>
  `;

  const HEADER_EL = document.querySelector("header");
  HEADER_EL.innerHTML = HEADER_LOGO + HEADER_UL;
};
