import React from "react";
import "./sidebar.css";

import { Business, LineStyle, Person } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            {/* Home */}
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>

            {/* Workers */}
            <li className="sidebarListItem">
              <Person className="sidebarIcon" />
              Workers
            </li>

            {/* Companies  */}
            <li className="sidebarListItem">
              <Business className="sidebarIcon" />
              Companies
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
