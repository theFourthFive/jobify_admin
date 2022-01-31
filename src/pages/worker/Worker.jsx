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
import "./worker.css";
import workerFormater from "../../pages/workerList/utils/workerFormater";
import axios from "axios";
import moment from "moment";

import { Link } from "react-router-dom";

// prettier-ignore
export default function Worker() {
  const { workerId } = useParams();
  const [worker, setWorker] = useState([])
  localStorage.setItem('menu', 'workers')

  useEffect(() => {
    // because I got a warning in the console, to not use : useEffect(async ()=>{})
    (async () => {
      try {

        const { data } = await axios.get(`http://localhost:3001/admins/workers/${workerId}`);

        setWorker(()=> workerFormater(data))

      } catch (error) {
        // console.log(error);
      }
    })(); // this is a function that call itself
  }, [])


  let formatedPhoneNumber = ""
  // it's stupid doing this but ... I don't have so much time to do it perfectly
  if(worker.phoneNumber){
    formatedPhoneNumber = worker.phoneNumber.toString().slice(0,2) + " " + worker.phoneNumber.toString().slice(2,5) + " " + worker.phoneNumber.toString().slice(5)
  }
  console.log(worker);

  return (
    <div className="worker">
      <div className="workerTitleContainer">
        {/* <h1 className="workerTitle">Edit Worker</h1> */}
        <h1 className="workerTitle">Worker Info</h1>
        {/* <Link to="/workers/new">
          <button className="workerAddButton">Create</button>
        </Link> */}
      </div>
      <div className="workerContainer">
        <div className="workerInfo">
          <div className="workerInfoTop">
            <img src={worker.avatar} alt="" className="workerInfoImage" />
            <div className="workerInfoTopTitle">
              <span className="workerInfoWorkerFullname">{worker.fullName}</span>
              {/* <span className="workerInfoWorkerTitle">Software Engineer</span> */}
            </div>
          </div>

          <div className="workerInfoBottom">
            <span className="workerInfoTitle">Account Details</span>

            <div className="workerInfoBottomDetail">
              <AccountCircle className="workerInfoIcon" />
              <span className="workerInfoTitleDetails">{worker.status}</span>
            </div>

            {/* <div className="workerInfoBottomDetail">
              <PermIdentity className="workerInfoIcon" />
              <span className="workerInfoTitleDetails">johndoe99</span>
            </div> */}

            <div className="workerInfoBottomDetail">
              <StarRate className="workerInfoIcon" />
              <span className="workerInfoTitleDetails">{worker.rating ? workerFormater : 0}</span>
            </div>

            <div className="workerInfoBottomDetail">
              <PersonAddAlt className="workerInfoIcon" />
              <span className="workerInfoTitleDetails">Joined {moment(worker.createdAt).fromNow() }</span>
            </div>

            <span className="workerInfoTitle">Contact Details</span>

            <div className="workerInfoBottomDetail">
              <PhoneAndroid className="workerInfoIcon" />
              <span className="workerInfoTitleDetails">(+216) {formatedPhoneNumber}</span>
            </div>

            <div className="workerInfoBottomDetail">
              <MailOutline className="workerInfoIcon" />
              <span className="workerInfoTitleDetails">
                {worker.email}
              </span>
            </div>

            {/* <div className="workerInfoBottomDetail">
              <Explore className="workerInfoIcon" />
              <span className="workerInfoTitleDetails">Tunis</span>
            </div> */}
          </div>
        </div>
        {/* <div className="workerUpdate">
          <span className="workerUpdateTitle">Edit</span>
          <form className="workerUpdateForm">
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

              <div className="workerUpdateItem">
                <label htmlFor="firstName">Last Name</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Doe"
                  className="workerUpdateInput"
                />
              </div>

              <div className="workerUpdateItem">
                <label htmlFor="firstName">Title</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Software Engineer"
                  className="workerUpdateInput"
                />
              </div>

              <div className="workerUpdateItem">
                <label htmlFor="firstName">Phone Number</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="(+216) 51 234 678"
                  className="workerUpdateInput"
                />
              </div>

              <div className="workerUpdateItem">
                <label htmlFor="firstName">Email</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="john.doe@google.com"
                  className="workerUpdateInput"
                />
              </div>

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
                  <Publish className="workerUpdateIcon" />
                </label>
                <input id="file" type="file" style={{ display: "none" }} />
              </div>
              <button className="workerUpdateButton">Update</button>
            </div>
          </form>
        </div> */}
      </div>
    </div>
  );
}
