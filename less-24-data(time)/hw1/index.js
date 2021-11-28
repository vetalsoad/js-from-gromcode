// 1. перевожу даты в секунды
//     формат даты "2017.10.11 10:56:20"
// 2. от большего отнимаю меньшее число
// 3. перевожу секунды в дни




function getDiff(startDate, endDate) {
  const secondStartDate = Date.parse(startDate) / 1000;
  const secondEndDate = Date.parse(endDate)/ 1000;
  
  const second = Math.abs(secondEndDate - secondStartDate);  

  const days = Math.floor(second / (3600 * 24));
  const hours = Math.floor((second % (3600 * 24)) / 3600);
  const minutes = Math.floor((second % 3600) / 60);
  const seconds = Math.floor(second % 60);

  console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
}

 getDiff("2021.10.11 9:36:20", "2021.10.11 10:46:40");