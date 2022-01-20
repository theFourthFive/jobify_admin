import {
  AccountCircle,
  AlternateEmail,
  CalendarToday,
  Explore,
  LocationSearching,
  MailOutline,
  PermIdentity,
  Person,
  PersonAddAlt,
  PhoneAndroid,
  Publish,
  StarRate,
  Title,
} from "@mui/icons-material";
import React from "react";
import "./worker.css";

export default function Worker() {
  return (
    <div className="worker">
      <div className="workerTitleContainer">
        <h1 className="workerTitle">Edit Worker</h1>
        <button className="workerAddButton">Create</button>
      </div>
      <div className="workerContainer">
        <div className="workerInfo">
          <div className="workerInfoTop">
            <img src="" alt="" className="workerInfoImage" />
            <div className="userInfoTopTitle">
              <span className="workerInfoWorkerFullname">John Doe</span>
              <span className="workerInfoWorkerTitle">Software Engineer</span>
            </div>
          </div>

          <div className="workerInfoBottom">
            <span className="workerInfoTitle">Account Details</span>

            <div className="workerInfoBottomDetail">
              <AccountCircle className="workerInfoIcon" />
              <span className="workerInfoTitleDetails">Banned</span>
            </div>

            {/* <div className="workerInfoBottomDetail">
              <PermIdentity className="workerInfoIcon" />
              <span className="workerInfoTitleDetails">johndoe99</span>
            </div> */}

            <div className="workerInfoBottomDetail">
              <StarRate className="workerInfoIcon" />
              <span className="workerInfoTitleDetails">4.2</span>
            </div>

            <div className="workerInfoBottomDetail">
              <PersonAddAlt className="workerInfoIcon" />
              <span className="workerInfoTitleDetails">Joined at</span>
            </div>

            <span className="workerInfoTitle">Contact Details</span>

            <div className="workerInfoBottomDetail">
              <PhoneAndroid className="workerInfoIcon" />
              <span className="workerInfoTitleDetails">(+216) 54686858</span>
            </div>

            <div className="workerInfoBottomDetail">
              <MailOutline className="workerInfoIcon" />
              <span className="workerInfoTitleDetails">
                john.doe@google.com
              </span>
            </div>

            <div className="workerInfoBottomDetail">
              <Explore className="workerInfoIcon" />
              <span className="workerInfoTitleDetails">Tunis</span>
            </div>
          </div>
        </div>
        <div className="workerUpdate">
          <span className="workerUpdateTitle">Edit</span>
          <form className="workerUpdateForm">
            {/*  */}
            <div className="workerUpdateLeft">
              <div className="workerUpdateItem">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  className="workerUpdateInput"
                />
              </div>
            </div>

            <div className="workerUpdateLeft">
              <div className="workerUpdateItem">
                <label htmlFor="firstName">Last Name</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Doe"
                  className="workerUpdateInput"
                />
              </div>
            </div>

            <div className="workerUpdateLeft">
              <div className="workerUpdateItem">
                <label htmlFor="firstName">Title</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Software Engineer"
                  className="workerUpdateInput"
                />
              </div>
            </div>

            <div className="workerUpdateLeft">
              <div className="workerUpdateItem">
                <label htmlFor="firstName">Phone Number</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="(+216) 54686858"
                  className="workerUpdateInput"
                />
              </div>
            </div>

            <div className="workerUpdateLeft">
              <div className="workerUpdateItem">
                <label htmlFor="firstName">Email</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="john.doe@google.com"
                  className="workerUpdateInput"
                />
              </div>
            </div>

            <div className="workerUpdateLeft">
              <div className="workerUpdateItem">
                <label htmlFor="firstName">Address</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Tunis"
                  className="workerUpdateInput"
                />
              </div>
            </div>

            <div className="workerUpdateRight">
              <div className="workerUpdateUpload">
                <img src="" alt="" className="workerUpdateImage" />
                <label htmlFor="file">
                  <Publish />
                </label>
                <input id="file" type="file" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
