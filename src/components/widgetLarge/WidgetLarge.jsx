import React, { useState, useEffect } from "react";
import "./widgetLarge.css";

import axios from "axios";
import moment from "moment";
import workerFormater from "../../pages/workerList/utils/workerFormater";
import companyFormater from "../../pages/companyList/utils/companyFormater";
import eventFormater from "../../pages/eventList/utils/eventFormater";

export default function WidgetLarge() {
  const [workers, setWorkers] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // because I got a warning in the console, to not use : useEffect(async ()=>{})
    (async () => {
      try {
        var { data } = await axios.get("http://localhost:3001/admins/workers");
        setWorkers(() =>
          data
            .map((worker) => workerFormater(worker))
            .filter((worker, i) => i < 5)
        );

        var { data } = await axios.get(
          "http://localhost:3001/admins/companies"
        );
        setCompanies(() => data.map((company) => companyFormater(company)));

        var { data } = await axios.get("http://localhost:3001/admins/events");
        setEvents(() => data.map((event) => eventFormater(event)));
      } catch (error) {
        // console.log(error);
      }
    })(); // this is a function that call itself
  }, []);

  const Button = ({ type }) => {
    return <button className={`widgetLargeButton ${type}`}>{type}</button>;
  };

  const newEvents = events
    .map((event) => {
      return (
        <tr className="widgetLargeTableRow">
          <td className="widgetLargeCompany">
            <img src={event.avatar} alt="" className="widgetLargeImage" />
            <span className="widgetLargeCompany">{event.eventName}</span>
          </td>
          <th className="widgetLargeCity">{event.location}</th>
          <th className="widgetLargeDate">{event.duration} days</th>
          <th className="widgetLargeAmount">{event.dailyPay} TND / day</th>
          <th className="widgetLargeAmount">
            {moment(event.createdAt).fromNow()}
          </th>
        </tr>
      );
    })
    .filter((event, i) => i < 5);

  return (
    <div className="widgetLarge">
      <h3 className="widgetLargeTitle">Latest Events</h3>
      <table className="widgetLargeTable">
        <tr className="widgetLargeTableRow">
          <th className="widgetLargeTableHeaderLeft">Company</th>
          <th className="widgetLargeTableHeader">City</th>
          <th className="widgetLargeTableHeader">Duration</th>
          <th className="widgetLargeTableHeader">Amout</th>
          <th className="widgetLargeTableHeader">Created At</th>
        </tr>

        {newEvents}
      </table>
    </div>
  );
}
