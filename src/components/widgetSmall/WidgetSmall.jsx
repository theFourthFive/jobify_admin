import React from "react";
import "./widgetSmall.css";

import { Visibility } from "@mui/icons-material";

// prettier-ignore
export default function WidgetSmall() {
  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle">New Users</span>
      <ul className="widgetSmallList">

        <li className="widgetSmallListItem">
          <img
            src="https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
            className="widgetSmallImage"
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">John Doe</span>
            <span className="widgetSmallUserTitle">Software engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmallListItem">
          <img
            src="https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
            className="widgetSmallImage"
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">John Doe</span>
            <span className="widgetSmallUserTitle">Software engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmallListItem">
          <img
            src="https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
            className="widgetSmallImage"
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">John Doe</span>
            <span className="widgetSmallUserTitle">Software engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmallListItem">
          <img
            src="https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
            className="widgetSmallImage"
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">John Doe</span>
            <span className="widgetSmallUserTitle">Software engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmallListItem">
          <img
            src="https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
            className="widgetSmallImage"
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">John Doe</span>
            <span className="widgetSmallUserTitle">Software engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>

      </ul>
    </div>
  );
}
