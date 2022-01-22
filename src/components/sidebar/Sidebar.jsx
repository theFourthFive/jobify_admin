import React, { useState, useEffect } from "react";
import "./sidebar.css";

import { Link } from "react-router-dom";
import { Business, LineStyle, Person, Event } from "@mui/icons-material";

export default function Sidebar() {
  const [homePage, setHomePage] = useState(true);
  const [workersPage, setWorkersPage] = useState(false);
  const [companiesPage, setCompaniesPage] = useState(false);
  const [events, setEventsPage] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            {/* Home */}
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>

            {/* Workers */}
            <Link to="/workers" className="link">
              <li className="sidebarListItem">
                <Person className="sidebarIcon" />
                Workers
              </li>
            </Link>

            {/* Companies  */}
            <Link to="/companies" className="link">
              <li className="sidebarListItem">
                <Business className="sidebarIcon" />
                Companies
              </li>
            </Link>

            {/* Events  */}
            <Link to="/events" className="link">
              <li className="sidebarListItem">
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
