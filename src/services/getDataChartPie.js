//Prepare dates for deafult API call (1 month range)
let actualDate = '';
let previousMonthDate = '';

const currentTime = () => {
  let date = new Date();

  let day = date.getDate();
  //We need to add +1 as getMonth() returns a number between 0-11, and we want January to start in 1, and so on
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  actualDate = `${day}/${month}/${year}`;
  previousMonthDate = `${day}/${month - 1}/${year}`;
  return([actualDate, previousMonthDate])
};

currentTime();
// console.log('actualDate', actualDate);
// console.log('previousMonthDate', previousMonthDate);


const fetchChartPie = (startDate, endDate) => {
  const URL = `https://adalab.interacso.com/api/graph/pie?from=${startDate}&to=${endDate}`;
  return fetch(URL)
    .then(response => response.json())
};

//Expected data to be logged
// {
//   "neutral": 38,
//   "bad": 28,
//   "good": 31,
//   "undefined": 10,
//   "": 2
// }

export { fetchChartPie, currentTime };
