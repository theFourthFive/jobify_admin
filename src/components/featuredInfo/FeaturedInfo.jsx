import React, { useState, useEffect } from "react";
import "./featuredInfo.css";

import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import axios from "axios";

import workerFormater from "../../pages/workerList/utils/workerFormater";
import companyFormater from "../../pages/companyList/utils/companyFormater";
import eventFormater from "../../pages/eventList/utils/eventFormater";

// prettier-ignore
export default function FeaturedInfo() {
  const [workers, setWorkers] = useState([])
  const [companies, setCompanies] = useState([])
  const [events, setEvents] = useState([])
  useEffect(() => {
    // because I got a warning in the console, to not use : useEffect(async ()=>{})
    (async () => {
      try {

        var { data } = await axios.get("http://localhost:3001/admins/workers");
        setWorkers(()=> data.map((worker) => workerFormater(worker)))

        var { data } = await axios.get("http://localhost:3001/admins/companies");
        setCompanies(()=> data.map((company) => companyFormater(company)))

        var { data } = await axios.get("http://localhost:3001/admins/events");
        setEvents(()=> data.map((event) => eventFormater(event)))

      } catch (error) {
        // console.log(error);
      }
    })(); // this is a function that call itself
  }, [])

  return (
    <div className="featured">

      {/* Backup code: */}
      {/* <div className="featuredItem">
        <span className="featuredItemTitle">Income</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2 415 TND</span>
          <span className="featuredMoneyRate">
            -11.4<ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div> */}

      <div className="featuredItem">
        <span className="featuredItemTitle">Registered Workers</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{workers.length} Workers</span>
        </div>
      </div>

      <div className="featuredItem">
        <span className="featuredItemTitle">Registered Companies</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{companies.length} Companies</span>
        </div>
      </div>

      <div className="featuredItem">
        <span className="featuredItemTitle">Total Events</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{events.length} Events</span>
        </div>
      </div>

      {/* Backup code: */}
      {/* <div className="featuredItem">
        <span className="featuredItemTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">4 415 TND</span>
          <span className="featuredMoneyRate">
            -1.4<ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div> */}



      {/* Backup code: */}
      {/* <div className="featuredItem">
        <span className="featuredItemTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2 225 TND</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featureSubtitle">Compared to last month</span>
      </div> */}

    </div>
  );
}
