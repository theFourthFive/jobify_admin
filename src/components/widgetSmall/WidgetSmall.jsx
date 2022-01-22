import React, { useState, useEffect } from "react";
import "./widgetSmall.css";

import { Visibility } from "@mui/icons-material";
import axios from "axios";
import workerFormater from "../../pages/workerList/utils/workerFormater";
import companyFormater from "../../pages/companyList/utils/companyFormater";
import eventFormater from "../../pages/eventList/utils/eventFormater";

// prettier-ignore
export default function WidgetSmall() {

  const [workers, setWorkers] = useState([])
  const [companies, setCompanies] = useState([])
  const [events, setEvents] = useState([])

  useEffect(() => {
    // because I got a warning in the console, to not use : useEffect(async ()=>{})
    (async () => {
      try {

        var { data } = await axios.get("http://localhost:3001/admins/workers");
        setWorkers(()=> data.map((worker) => workerFormater(worker)).filter((worker, i) => i < 5))

        var { data } = await axios.get("http://localhost:3001/admins/companies");
        setCompanies(()=> data.map((company) => companyFormater(company)))

        var { data } = await axios.get("http://localhost:3001/admins/events");
        setEvents(()=> data.map((event) => eventFormater(event)))

      } catch (error) {
        // console.log(error);
      }
    })(); // this is a function that call itself
  }, [])

  const newWorkers = workers.map((worker) => {
    return(
      <li className="widgetSmallListItem">
            <img
              src={worker.avatar}
              alt=""
              className="widgetSmallImage"
            />
            <div className="widgetSmallUser">
              <span className="widgetSmallUsername">{worker.fullName}</span>
              <span className="widgetSmallUserTitle">{worker.email}</span>
            </div>
            <button className="widgetSmallButton">
              <Visibility className="widgetSmallIcon" />
              Display
            </button>
          </li>
    )})


  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle">New Workers</span>
      <ul className="widgetSmallList">

        {newWorkers}

      </ul>
    </div>
  );
}
