import React, { useState, useEffect } from "react";
import "./sidebar.css";

import { Link } from "react-router-dom";
import { Business, LineStyle, Person, Event } from "@mui/icons-material";

export default function Sidebar() {
  const [activeHome, setActiveHome] = useState(
    localStorage.getItem("menu") === "home" ? "active" : ""
  );
  const [activeWorkers, setActiveWorkers] = useState(
    localStorage.getItem("menu") === "workers" ? "active" : ""
  );
  const [activeCompanies, setActiveCompanies] = useState(
    localStorage.getItem("menu") === "companies" ? "active" : ""
  );
  const [activeEvents, setActiveEvents] = useState(
    localStorage.getItem("menu") === "events" ? "active" : ""
  );

  const updateSideBar = () => {
    const activeMenu = localStorage.getItem("menu");

    if (activeMenu === "home") {
      setActiveHome(() => "active");
      setActiveWorkers(() => "");
      setActiveCompanies(() => "");
      setActiveEvents(() => "");
    } else if (activeMenu === "workers") {
      setActiveHome(() => "");
      setActiveWorkers(() => "active");
      setActiveCompanies(() => "");
      setActiveEvents(() => "");
    } else if (activeMenu === "companies") {
      setActiveHome(() => "");
      setActiveWorkers(() => "");
      setActiveCompanies(() => "active");
      setActiveEvents(() => "");
    } else if (activeMenu === "events") {
      setActiveHome(() => "");
      setActiveWorkers(() => "");
      setActiveCompanies(() => "");
      setActiveEvents(() => "active");
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            {/* Home */}
            <Link to="/" className="link" onClick={updateSideBar}>
              <li className={`sidebarListItem ${activeHome}`}>
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>

            {/* Workers */}
            <Link to="/workers" className="link" onClick={updateSideBar}>
              <li className={`sidebarListItem ${activeWorkers}`}>
                <Person className="sidebarIcon" />
                Workers
              </li>
            </Link>

            {/* Companies */}
            <Link to="/companies" className="link" onClick={updateSideBar}>
              <li className={`sidebarListItem ${activeCompanies}`}>
                <Business className="sidebarIcon" />
                Companies
              </li>
            </Link>

            {/* Events */}
            <Link to="/events" className="link" onClick={updateSideBar}>
              <li className={`sidebarListItem ${activeEvents}`}>
                <Business className="sidebarIcon" />
                Events
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
