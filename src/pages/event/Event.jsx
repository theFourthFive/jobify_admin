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
import "./event.css";

import { Link } from "react-router-dom";

export default function Worker() {
  return (
    <div className="company">
      <div className="companyTitleContainer">
        <h1 className="companyTitle">Edit Worker</h1>
        <Link to="/companys/new">
          <button className="companyAddButton">Create</button>
        </Link>
      </div>
      <div className="companyContainer">
        <div className="companyInfo">
          <div className="companyInfoTop">
            <img src="" alt="" className="companyInfoImage" />
            <div className="companyInfoTopTitle">
              <span className="companyInfoWorkerFullname">John Doe</span>
              <span className="companyInfoWorkerTitle">Software Engineer</span>
            </div>
          </div>

          <div className="companyInfoBottom">
            <span className="companyInfoTitle">Account Details</span>

            <div className="companyInfoBottomDetail">
              <AccountCircle className="companyInfoIcon" />
              <span className="companyInfoTitleDetails">Banned</span>
            </div>

            {/* <div className="companyInfoBottomDetail">
              <PermIdentity className="companyInfoIcon" />
              <span className="companyInfoTitleDetails">johndoe99</span>
            </div> */}

            <div className="companyInfoBottomDetail">
              <StarRate className="companyInfoIcon" />
              <span className="companyInfoTitleDetails">4.2</span>
            </div>

            <div className="companyInfoBottomDetail">
              <PersonAddAlt className="companyInfoIcon" />
              <span className="companyInfoTitleDetails">Joined at</span>
            </div>

            <span className="companyInfoTitle">Contact Details</span>

            <div className="companyInfoBottomDetail">
              <PhoneAndroid className="companyInfoIcon" />
              <span className="companyInfoTitleDetails">(+216) 51 234 678</span>
            </div>

            <div className="companyInfoBottomDetail">
              <MailOutline className="companyInfoIcon" />
              <span className="companyInfoTitleDetails">
                john.doe@google.com
              </span>
            </div>

            <div className="companyInfoBottomDetail">
              <Explore className="companyInfoIcon" />
              <span className="companyInfoTitleDetails">Tunis</span>
            </div>
          </div>
        </div>
        <div className="companyUpdate">
          <span className="companyUpdateTitle">Edit</span>
          <form className="companyUpdateForm">
            <div className="companyUpdateLeft">
              {/*  */}

              <div className="companyUpdateItem">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  className="companyUpdateInput"
                />
              </div>

              <div className="companyUpdateItem">
                <label htmlFor="firstName">Last Name</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Doe"
                  className="companyUpdateInput"
                />
              </div>

              <div className="companyUpdateItem">
                <label htmlFor="firstName">Title</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Software Engineer"
                  className="companyUpdateInput"
                />
              </div>

              <div className="companyUpdateItem">
                <label htmlFor="firstName">Phone Number</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="(+216) 51 234 678"
                  className="companyUpdateInput"
                />
              </div>

              <div className="companyUpdateItem">
                <label htmlFor="firstName">Email</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="john.doe@google.com"
                  className="companyUpdateInput"
                />
              </div>

              <div className="companyUpdateItem">
                <label htmlFor="firstName">Address</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Tunis"
                  className="companyUpdateInput"
                />
              </div>
            </div>

            <div className="companyUpdateRight">
              <div className="companyUpdateUpload">
                <img src="" alt="" className="companyUpdateImage" />
                <label htmlFor="file">
                  <Publish className="companyUpdateIcon" />
                </label>
                <input id="file" type="file" style={{ display: "none" }} />
              </div>
              <button className="companyUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
