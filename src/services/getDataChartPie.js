//Graph api call by default (1month)
let actualDate = '';
let previousMonthDate = '';

// First: know the actual date
const currentTime = () => {
  let date = new Date();

  let day = date.getDate();
  //We need to add +1 as getMonth() method returns a number between 0-11, and we want January to be 1 and so on
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  actualDate = `${day}/${month}/${year}`;
  previousMonthDate = `${day}/${month - 1}/${year}`;
};

currentTime();
console.log('actualDate', actualDate);
console.log('previousMonthDate', previousMonthDate);

const URL = `https://adalab.interacso.com/api/graph/pie?from=${previousMonthDate}&to=${actualDate}`;

const fetchChartPie = () => {
  return fetch(URL)
    .then(response => response.json())
    .then(data => console.log(data));
};

//Expected data
// {
//   "neutral": 38,
//   "bad": 28,
//   "good": 31,
//   "undefined": 10,
//   "": 2
// }

export { fetchChartPie };
