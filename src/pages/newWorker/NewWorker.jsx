import React from "react";
import "./newWorker.css";

export default function NewWorker() {
  return (
    <div className="newWorker">
      <h1 className="newWorkerTitle">New Worker</h1>
      <form className="newWorkerForm">
        <div className="newWorkerItem">
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" type="text" placeholder="John" />
        </div>
        <div className="newWorkerItem">
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" type="text" placeholder="Doe" />
        </div>
        <div className="newWorkerItem">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" placeholder="Software Engineer" />
        </div>
        <div className="newWorkerItem">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input id="phoneNumber" type="text" placeholder="(+216) 51 234 678" />
        </div>
        <div className="newWorkerItem">
          <label htmlFor="email">Email</label>
          <input id="email" type="text" placeholder="john.doe@google.com" />
        </div>
        <div className="newWorkerItem">
          <label htmlFor="address">Address</label>
          <input id="address" type="text" placeholder="Tunis" />
        </div>

        <div className="newWorkerItem">
          <label htmlFor="gender">Gender</label>

          <div className="newWorkerGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>

            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>

            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>

        <div className="newWorkerItem">
          <label htmlFor="gender">Active</label>
          <select name="active" id="active" className="newWorkerSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newWorkerButton">Create</button>
      </form>
    </div>
  );
}
