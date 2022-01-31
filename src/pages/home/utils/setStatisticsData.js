import moment from "moment";

export default (statisticsData, data, entity) => {
  // data could be statsWorkers / statsCompanies, or statsEvents
  for (let attribute in data) {
    let i = 0;
    while (i < statisticsData.length) {
      if (statisticsData[i].weekId === attribute) {
        statisticsData[i][entity] = data[attribute];
      }
      i++;
    }
  }

  return statisticsData;
};
