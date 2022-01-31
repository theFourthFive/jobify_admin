import moment from "moment";

export default (workers, companies, events) => {
  let minDate = "";
  for (let attribute in workers) {
    if (minDate !== "") {
      if (minDate > attribute) minDate = attribute;
    } else {
      minDate = attribute;
    }
  }

  for (let attribute in companies) {
    if (minDate > attribute) {
      minDate = attribute;
    }
  }

  for (let attribute in events) {
    if (minDate > attribute) {
      minDate = attribute;
    }
  }

  const result = minDate.split("-").map((element) => parseInt(element, 10));

  // result[1] = 1;

  if (result[1] === 1) {
    result[0]--;
    let numberOfWeeks_PreviousYear = moment(`${result[0]}-12-31`).week();
    if (numberOfWeeks_PreviousYear === 1) {
      const year_month = `${result[0]}-12-`;
      let i = 31;
      while (numberOfWeeks_PreviousYear === 1) {
        i--;
        numberOfWeeks_PreviousYear = moment(year_month + i).week();
      }
    }
    result[1] = numberOfWeeks_PreviousYear;
  } else {
    result[1]--;
  }

  return result[0] + "-" + result[1].toString().padStart(2, "0");
};
