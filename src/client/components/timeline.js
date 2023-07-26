import LIST_JSON from "../json/timeline.json";
import "../scss/components/timeline.scss";

// console.log(LIST_JSON);

const YEAR = [...new Set(LIST_JSON.map((item) => item.year))];

let map = new Map([
  [
    2023,
    {
      7: [
        [23, "사건1"],
        [21, "사건2"],
      ],
      6: [
        [14, "사건3"],
        [6, "사건4"],
      ],
    },
  ],
  [
    2022,
    {
      4: [
        [24, "사건5"],
        [2, "사건6"],
      ],
    },
  ],
]);

/*
map.forEach((_value, _year, _map) => {
  console.log(_year);
  console.log(_value);

  let map2 = new Map([

  ]);
  console.log(map2);

  console.log(Object.entries(_map.get(_year)));
  _map.forEach((a, b, c) => {
    console.log(a);
  });
  Object.entries(value).forEach((month) => {
    month[1].forEach((day) => {
      console.log(`${year}년 ${month[0]}월 ${day[0]}일 ${day[1]}`);
    });
  });
});
*/

/*
map.forEach((value, key, map) => {
  console.log(Object.entries(value).keys());
  [...Object.entries(key)].forEach((value2, key2) => {
    console.log(`${key2}: ${[...Object.entries(value2)]}`);
  });
  console.log(`${key}: ${[Object.entries(value)]}`);
});
*/

/*
const CREATE = {
  CURRYING: (_fn) => (_elem) => (_class) => _fn(_elem, _class),
  ELEM: (_el, _cls) => {
    return CREATE.CURRYING((_elem, _class) => {
      _elem.classList.add(_class);
      return _elem;
    })(document.createElement(_el))(_cls);
  },
};

const TIMELINE = document.querySelector(".timeline");
const LIST = TIMELINE.querySelector(".list");

const YEAR = new Set(LIST_JSON.map((item) => item.year));
for (const year of YEAR) {
  const YEAR_TIT = document.createElement("h2");
  YEAR_TIT.innerHTML = year;

  const TIT_ALT = CREATE.ELEM("em", "alt-txt");
  TIT_ALT.innerText = "년";
  YEAR_TIT.appendChild(TIT_ALT);

  const YEAR_EL = CREATE.ELEM("div", "year");
  YEAR_EL.appendChild(YEAR_TIT);
  LIST.appendChild(YEAR_EL);
}
*/

/*
const TIMELINE = document.querySelector(".timeline");
const KIST = TIMELINE.querySelector(".list");
const YEAR = document.createElement("div");
YEAR.classList.add("year");
const MONTH = document.createElement("div");
MONTH.classList.add("month");
const DAY = document.createElement("ul");
DAY.classList.add("day");
const DAY_LI = document.createElement("li");
const DAY_BOX = document.createElement("a");
DAY_BOX.classList.add("box");
const DAY_BOX_TXT = document.createElement("p");
const DAY_LINE = document.createElement("p");
DAY_LINE.classList.add("line");

const YEAR_TIT = document.createElement("h2");
const MONTH_TIT = document.createElement("h3");
const DAY_TIT = document.createElement("h4");

const TIT_ALT = document.createElement("em");
TIT_ALT.classList.add("alt-txt");
*/
