import React, { useState, useEffect } from "react";
import "./home.css";

import { userData } from "../../dummyData";
import axios from "axios";
import moment from "moment";

import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import minDate from "./utils/minDate";
import maxDate from "./utils/maxDate";
import initDailyStatisticsData from "./utils/initDailyStatisticsData";
import initWeeklyStatisticsData from "./utils/initWeeklyStatisticsData";
import initMonthlyStatisticsData from "./utils/initMonthlyStatisticsData";
import setStatisticsData from "./utils/setStatisticsData";

// prettier-ignore
export default function Home() {
  const [statsWeek, setStatsWeek] = useState([])
  const [statsTitle, setStatsTitle] = useState("Number of Registration per week")
  localStorage.setItem('menu', 'home')

  useEffect(() => {
    // because I got a warning in the console, to not use : useEffect(async ()=>{})
    (async () => {
      let statisticsWeekResult = []
      try {

        // ------------------ Getting all Workers information ------------------

        var { data } = await axios.get("http://localhost:3001/admins/workers");
        // setWorkers(()=> data.map((worker) => workerFormater(worker)))
        const statsWorkers = data.reduce((stats, worker, i) => {
          const year = moment(worker.createdAt).year()
          const week = moment(worker.createdAt).week().toString().padStart(2,"0")
          const key = `${year}-${week}`
          if(!stats[key]){
            stats[key] = 1
          } else {
            stats[key]++
          }
          return stats
        }, {}) // accumulator will receive an empty object
        console.log("stats Worker: ", statsWorkers)

        // ----------------- Getting all Companies information -----------------

        var { data } = await axios.get("http://localhost:3001/admins/companies")
        const statsCompanies = data.reduce((stats, company, i) => {
          const year = moment(company.createdAt).year()
          const week = moment(company.createdAt).week().toString().padStart(2,"0")
          const key = `${year}-${week}`
          if(!stats[key]){
            stats[key] = 1
          } else {
            stats[key]++
          }
          return stats
        }, {}) // accumulator will receive an empty object
        console.log("Stat Company: ", statsCompanies)

        // ------------------ Getting all Events information -------------------

        var { data } = await axios.get("http://localhost:3001/admins/events")
        const statsEvents = data.reduce((stats, event) => {
          const year = moment(event.createdAt).year()
          const week = moment(event.createdAt).week().toString().padStart(2, "0")
          const key = `${year}-${week}`
          if(!stats[key]){
            stats[key] = 1
          } else {
            stats[key]++
          }
          return stats
        }, {}) // accumulator will receive an empty object
        console.log("Stats Events: ", statsEvents)

        // initialize / create the stats array
        const min = minDate(statsWorkers, statsCompanies, statsEvents)
        const max = maxDate(statsWorkers, statsCompanies, statsEvents)
        statisticsWeekResult = initWeeklyStatisticsData(min, max)
        statisticsWeekResult.shift()
        statisticsWeekResult.pop()
        statisticsWeekResult = setStatisticsData(statisticsWeekResult, statsWorkers, "workers")
        statisticsWeekResult = setStatisticsData(statisticsWeekResult, statsCompanies, "companies")
        statisticsWeekResult = setStatisticsData(statisticsWeekResult, statsEvents, "events")
        // console.log(statisticsData);
        console.log("statisticsData: ", statisticsWeekResult);
        setStatsWeek(()=> statisticsWeekResult)

      } catch (error) {
        // console.log(error);
      }
    })(); // this is a function that call itself
  }, [])

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={statsWeek}
        title={statsTitle}
        dataKey="week"
        grid
      />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}
