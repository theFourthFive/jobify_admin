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
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import companyFormater from "../../pages/companyList/utils/companyFormater";
import "./company.css";
import axios from "axios";
import moment from "moment";

import { Link } from "react-router-dom";

// prettier-ignore
export default function Worker() {
  const { companyId } = useParams();
  const [company, setCompany] = useState([])


  useEffect(() => {
    // because I got a warning in the console, to not use : useEffect(async ()=>{})
    (async () => {
      try {

        const { data } = await axios.get(`http://localhost:3001/admins/companies/${companyId}`);

        setCompany(()=> companyFormater(data))

      } catch (error) {
        // console.log(error);
      }
    })(); // this is a function that call itself
  }, [])
  
  let formatedPhoneNumber = "(+216) "
  // it's stupid doing this but ... I don't have so much time to do it perfectly
  if(company.phoneNumber){
    formatedPhoneNumber = "(+216) " + company.phoneNumber.toString().slice(0,2) + " " + company.phoneNumber.toString().slice(2,5) + " " + company.phoneNumber.toString().slice(5)
  }

  return (
    <div className="company">
      <div className="companyTitleContainer">
        {/* <h1 className="companyTitle">Edit Worker</h1> */}
        <h1 className="companyTitle">Company Info</h1>
        {/* <Link to="/companys/new">
          <button className="companyAddButton">Create</button>
        </Link> */}
      </div>
      <div className="companyContainer">
        <div className="companyInfo">
          <div className="companyInfoTop">
            <img src={company.avatar} alt="" className="companyInfoImage" />
            <div className="companyInfoTopTitle">
              <span className="companyInfoWorkerFullname">{company.label}</span>
              {/* <span className="companyInfoWorkerTitle">Software Engineer</span> */}
            </div>
          </div>

          <div className="companyInfoBottom">
            <span className="companyInfoTitle">Account Details</span>

            <div className="companyInfoBottomDetail">
              <AccountCircle className="companyInfoIcon" />
              <span className="companyInfoTitleDetails">{company.status}</span>
            </div>

            {/* <div className="companyInfoBottomDetail">
              <PermIdentity className="companyInfoIcon" />
              <span className="companyInfoTitleDetails">johndoe99</span>
            </div> */}

            <div className="companyInfoBottomDetail">
              <StarRate className="companyInfoIcon" />
              <span className="companyInfoTitleDetails">Business Field: {company.businessField}</span>
            </div>

            <div className="companyInfoBottomDetail">
              <PersonAddAlt className="companyInfoIcon" />
              <span className="companyInfoTitleDetails">Joined at {moment(company.createdAt).fromNow() }</span>
            </div>

            <span className="companyInfoTitle">Contact Details</span>

            <div className="companyInfoBottomDetail">
              <PhoneAndroid className="companyInfoIcon" />
              <span className="companyInfoTitleDetails">{formatedPhoneNumber}</span>
            </div>

            <div className="companyInfoBottomDetail">
              <MailOutline className="companyInfoIcon" />
              <span className="companyInfoTitleDetails">
                john.doe@google.com
              </span>
            </div>

            {/* <div className="companyInfoBottomDetail">
              <Explore className="companyInfoIcon" />
              <span className="companyInfoTitleDetails">Tunis</span>
            </div> */}
          </div>
        </div>
        {/* <div className="companyUpdate">
          <span className="companyUpdateTitle">Edit</span>
          <form className="companyUpdateForm">
            <div className="companyUpdateLeft">

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
        </div> */}
      </div>
    </div>
  );
}
