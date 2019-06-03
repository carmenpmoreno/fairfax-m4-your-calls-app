//Graph api call by default (1month)
let actualDate = '';
let actualMonthRange = '';

// First: know the actual date
const currentTime = () => {
  let date = new Date();
  let day = date.getDay();
  let month = date.getMonth();
  let year = date.getYear();

  actualDate = `${day}/${month}/${year}`;
  actualMonthRange = `${day}/${month - 1}/${year}`;
};

currentTime();
console.log(actualDate, actualMonthRange);

//Goal
// actualDate = '03/06/2019';
// actualMonthRange = '03/05/2019';

const URL = `https://adalab.interacso.com/api/graph/pie?from=${actualMonthRange}&to=${actualDate}`;

const fetchChartPie = () => {
  return fetch(URL)
    .then(response => response.json())
    .then(data => console.log(data));
};

fetchChartPie();

//Expected data
// {
//   "neutral": 38,
//   "bad": 28,
//   "good": 31,
//   "undefined": 10,
//   "": 2
// }

export { fetchChartPie };
