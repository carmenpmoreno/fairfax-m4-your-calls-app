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

export { currentTime };