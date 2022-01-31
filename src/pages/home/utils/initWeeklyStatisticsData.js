import moment from "moment";

export default (min, max) => {
  const StatisticsData = [];
  if (min > max) {
    [min, max] = [max, min];
  }
  const startDate = min.split("-").map((element) => parseInt(element, 10));
  const endDate = max.split("-").map((element) => parseInt(element, 10));
  console.log("Start Date:", startDate);
  console.log("End Date:", endDate);
  const firstYear = startDate[0];
  const lastYear = endDate[0];
  // const lastYear = endDate[0] + 1; // just for test purpose (data for more than 1 year)

  for (let year = firstYear; year <= lastYear; year++) {
    let lastWeekOfActualYear;
    // if the actual year is not the last year
    if (year !== lastYear) {
      lastWeekOfActualYear = moment(year + "-12-31").week();
      if (lastWeekOfActualYear === 1) {
        let i = 31;
        while (lastWeekOfActualYear === 1) {
          i--;
          lastWeekOfActualYear = moment(year + "-12-" + i).week();
        }
      }
    } else {
      lastWeekOfActualYear = endDate[1];
    }

    let firstWeekOfActualYear;
    if (year === firstYear) {
      firstWeekOfActualYear = startDate[1];
    } else {
      firstWeekOfActualYear = 1;
    }

    let actualWeek = firstWeekOfActualYear;
    while (actualWeek <= lastWeekOfActualYear) {
      StatisticsData.push({
        weekId: `${year}-${actualWeek.toString().padStart(2, "0")}`,
        workers: 0,
        companies: 0,
        events: 0,
      });
      actualWeek++;
    }
  }

  return StatisticsData;
};
