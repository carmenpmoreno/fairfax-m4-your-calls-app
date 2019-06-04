//Prepare dates for deafult API call (1 month range)
let actualDate = '';
let previousMonthDate = '';

const currentTime = () => {
  let date = new Date();

  let day = date.getDate();
  //We need to add +1 as getMonth() returns a number between 0-11, and we want January to start in 1, and so on
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const dayData = day<10? `0${day}`: day;
  const monthData = month<10? `0${month}` : month;
  const prevmonthData = month<10? `0${month-1}` : month;

  actualDate = `${day}/${month}/${year}`;
  previousMonthDate = `${day}/${month - 1}/${year}`;
  const filterValueStart = `${year}-${prevmonthData}-${dayData}`;
  const filterValueEnd = `${year}-${monthData}-${dayData}`;
  return([actualDate, previousMonthDate, filterValueStart, filterValueEnd])
};

currentTime();
console.log('actualDate', actualDate);
console.log('previousMonthDate', previousMonthDate);


function fetchChartPie(startDate, endDate) {
  const URL = `https://adalab.interacso.com/api/graph/pie?from=${startDate}&to=${endDate}`;
  console.log(URL);
  return fetch(URL)
    .then(response => response.json())
    .then(data => {
      const rateCurrencyNames = ["Genial", "Meh", "Mal"];
      const rateCurrencyValues = Object.values(data);
      const chartData = [["Call mood", "Quantity"]];
      for (let i = 0; i < rateCurrencyNames.length; i += 1) {
        chartData.push([rateCurrencyNames[i], rateCurrencyValues[i]]);
      }
      this.setState({
        pieDataLoadingStatus: "ready",
        pieChartData: chartData
      });
    }
  )
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
