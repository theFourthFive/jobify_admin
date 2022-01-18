import React from "react";
import "./topbar.css";

// icon from:
// https://mui.com/components/material-icons/?query=notification
import { NotificationsNone } from "@mui/icons-material/";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Jobify Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIcons">
            <NotificationsNone />
          </div>
        </div>
      </div>
    </div>
  );
}
