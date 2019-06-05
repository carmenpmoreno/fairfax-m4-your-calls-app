const currentTime = () => {
  let date = new Date();
  const endDate = date.toLocaleDateString()
  date.setMonth(date.getMonth() - 1);
  const startDate= date.toLocaleDateString();

  const arrayEndDate = endDate.split("/");
  const [actualDay, actualMonth, actualYear] = arrayEndDate.map(item=>add0(item));
  const newEndDate = `${actualYear}-${actualMonth}-${actualDay}`;

  const arrayStartDate = startDate.split("/");
  const [startDay, startMonth, startYear] = arrayStartDate.map(item=>add0(item));
  const newStartDate = `${startYear}-${startMonth}-${startDay}`;

  return([endDate, startDate, newStartDate, newEndDate])
};

function add0(number){
 return number<10? `0${number}`: number;
}

export { currentTime };