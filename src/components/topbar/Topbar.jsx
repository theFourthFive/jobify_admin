import React from "react";
import "./topbar.css";

// icon from:
// https://mui.com/components/material-icons/?query=notification
import { NotificationsNone, Language, Settings } from "@mui/icons-material/";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        {/* TOP LEFT */}
        <div className="topLeft">
          <span className="logo">Jobify Admin</span>
        </div>

        {/* TOP RIGHT */}
        <div className="topRight">
          {/* ICON #1 */}
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">10</span>
          </div>

          {/* ICON #2 */}
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>

          {/* ICON #3 */}
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">+99</span>
          </div>
        </div>
      </div>
    </div>
  );
}
