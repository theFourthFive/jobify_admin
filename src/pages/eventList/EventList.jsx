import React, { useState, useEffect } from "react";
import "./eventList.css";
import axios from "axios";

// importing the table template from:
// https://mui.com/components/tables/#data-table
import { DataGrid } from "@mui/x-data-grid";

import { workerRows } from "../../dummyData";
import eventFormater from "./utils/eventFormater";

import getColumns from "./getColumns";

// prettier-ignore
export default function WorkerList() {
  const [data, setData] = useState([]);
  localStorage.setItem('menu', 'events')

  useEffect(() => {
    // because I got a warning in the console, to not use : useEffect(async ()=>{})
    (async () => {
      try {

        const { data } = await axios.get("http://localhost:3001/admins/events");

        setData(data.map((company) => eventFormater(company)))

      } catch (error) {
        // console.log(error);
      }
    })(); // this is a function that call itself
  }, [])

  const columns = getColumns(data, setData)

  return (
    <div className="companyList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        // checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
