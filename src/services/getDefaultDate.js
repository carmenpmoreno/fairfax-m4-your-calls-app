    
//Prepare dates for deafult API call (1 month range)
let actualDate = '';
let previousMonthDate = '';

const currentTime = () => {
  let date = new Date("2016/01/01");
  actualDate = date.toLocaleDateString()
  console.log(date.toLocaleDateString());

  date.setMonth(date.getMonth() - 1);
  console.log(date.toLocaleDateString());};

currentTime();

export { currentTime };

