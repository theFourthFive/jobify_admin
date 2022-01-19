import React from "react";
import "./widgetLarge.css";

export default function WidgetLarge() {
  const Button = ({ type }) => {
    return <button className={`widgetLargeButton ${type}`}>{type}</button>;
  };
  return (
    <div className="widgetLarge">
      <h3 className="widgetLargeTitle">Latest Events</h3>
      <table className="widgetLargeTable">
        <tr className="widgetLargeTableRow">
          <th className="widgetLargeTableMain">Company</th>
          <th className="widgetLargeTableHeader">City</th>
          <th className="widgetLargeTableHeader">Date</th>
          <th className="widgetLargeTableHeader">Amout</th>
          <th className="widgetLargeTableHeader">Status</th>
        </tr>

        <tr className="widgetLargeTableRow">
          <td className="widgetLargeCompany">
            <img
              src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="widgetLargeImage"
            />
            <span className="widgetLargeCompany">New Technologie Co.</span>
          </td>
          <th className="widgetLargeCity">Tunis</th>
          <th className="widgetLargeDate">2 Jun 2022</th>
          <th className="widgetLargeAmount">100 TND</th>
          <th className="widgetLargeStatus">
            <Button type="Approved" />
          </th>
        </tr>

        <tr className="widgetLargeTableRow">
          <td className="widgetLargeCompany">
            <img
              src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="widgetLargeImage"
            />
            <span className="widgetLargeCompany">New Technologie Co.</span>
          </td>
          <th className="widgetLargeCity">Tunis</th>
          <th className="widgetLargeDate">2 Jun 2022</th>
          <th className="widgetLargeAmount">100 TND</th>
          <th className="widgetLargeStatus">
            <Button type="Declined" />
          </th>
        </tr>

        <tr className="widgetLargeTableRow">
          <td className="widgetLargeCompany">
            <img
              src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="widgetLargeImage"
            />
            <span className="widgetLargeCompany">New Technologie Co.</span>
          </td>
          <th className="widgetLargeCity">Tunis</th>
          <th className="widgetLargeDate">2 Jun 2022</th>
          <th className="widgetLargeAmount">100 TND</th>
          <th className="widgetLargeStatus">
            <Button type="Pending" />
          </th>
        </tr>

        <tr className="widgetLargeTableRow">
          <td className="widgetLargeCompany">
            <img
              src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="widgetLargeImage"
            />
            <span className="widgetLargeCompany">New Technologie Co.</span>
          </td>
          <th className="widgetLargeCity">Tunis</th>
          <th className="widgetLargeDate">2 Jun 2022</th>
          <th className="widgetLargeAmount">100 TND</th>
          <th className="widgetLargeStatus">
            <Button type="Approved" />
          </th>
        </tr>

        <tr className="widgetLargeTableRow">
          <td className="widgetLargeCompany">
            <img
              src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="widgetLargeImage"
            />
            <span className="widgetLargeCompany">New Technologie Co.</span>
          </td>
          <th className="widgetLargeCity">Tunis</th>
          <th className="widgetLargeDate">2 Jun 2022</th>
          <th className="widgetLargeAmount">100 TND</th>
          <th className="widgetLargeStatus">
            <Button type="Approved" />
          </th>
        </tr>
      </table>
    </div>
  );
}
