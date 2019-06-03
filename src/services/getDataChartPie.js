//Graph api call by default (1month)
const ENDPOINT = 'https://adalab.interacso.com/api/graph/pie';


//First: know the actual date
currentTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let defaultDate = `${hours}:${minutes}:${seconds}`;

}
curentTime();
console.log(date);


// //Second: calculate last month range

// fetch('https://private-afa254-adalabapi.apiary-mock.com/pie?from=18/01/2019&to=01/02/2019&client=ikea')
// .then(response=> response.json())
