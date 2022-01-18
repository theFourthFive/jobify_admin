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
            <Language />
            <span className="topIconBadge">2</span>
          </div>

          {/* ICON #3 */}
          <div className="topbarIconContainer">
            <Settings />
            <span className="topIconBadge">+99</span>
          </div>

          {/* ICON #4 */}
          <img
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
