import moment from "moment";

export default (workers, companies, events) => {
  let maxDate = "";
  for (let attribute in workers) {
    if (maxDate !== "") {
      if (maxDate < attribute) maxDate = attribute;
    } else {
      maxDate = attribute;
    }
  }

  for (let attribute in companies) {
    if (maxDate < attribute) {
      maxDate = attribute;
    }
  }

  for (let attribute in events) {
    if (maxDate < attribute) {
      maxDate = attribute;
    }
  }

  const result = maxDate.split("-").map((element) => parseInt(element, 10));

  let lastWeekOfActualYear = moment(`${result[0]}-12-31`).week();
  let i = 0;
  while (lastWeekOfActualYear === 1) {
    i--;
    lastWeekOfActualYear = moment(result[0] + "-12-" + i).week();
  }

  if (result[1] === lastWeekOfActualYear) {
    result[0]++;
    result[1] = 1;
  } else {
    result[1]++;
  }

  return result[0] + "-" + result[1].toString().padStart(2, "0");
};
