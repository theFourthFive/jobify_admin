import React from "react";
import "./newCompany.css";

export default function NewWorker() {
  return (
    <div className="newCompany">
      <h1 className="newCompanyTitle">New Worker</h1>
      <form className="newCompanyForm">
        <div className="newCompanyItem">
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" type="text" placeholder="John" />
        </div>
        <div className="newCompanyItem">
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" type="text" placeholder="Doe" />
        </div>
        <div className="newCompanyItem">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" placeholder="Software Engineer" />
        </div>
        <div className="newCompanyItem">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input id="phoneNumber" type="text" placeholder="(+216) 51 234 678" />
        </div>
        <div className="newCompanyItem">
          <label htmlFor="email">Email</label>
          <input id="email" type="text" placeholder="john.doe@google.com" />
        </div>
        <div className="newCompanyItem">
          <label htmlFor="address">Address</label>
          <input id="address" type="text" placeholder="Tunis" />
        </div>

        <div className="newCompanyItem">
          <label htmlFor="gender">Gender</label>

          <div className="newCompanyGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>

            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>

            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>

        <div className="newCompanyItem">
          <label htmlFor="gender">Active</label>
          <select name="active" id="active" className="newCompanySelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newCompanyButton">Create</button>
      </form>
    </div>
  );
}
