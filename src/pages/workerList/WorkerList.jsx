import React, { useState, useEffect } from "react";
import "./workerList.css";
import axios from "axios";

// importing the table template from:
// https://mui.com/components/tables/#data-table
import { DataGrid } from "@mui/x-data-grid";

import { workerRows } from "../../dummyData";
import workerFormater from "./utils/workerFormater";

import getColumns from "./getColumns";

// prettier-ignore
export default function WorkerList() {
  const [data, setData] = useState(workerRows);

  useEffect(() => {
    // because I got a warning in the console, to not use : useEffect(async ()=>{})
    (async () => {
      try {

        const { data } = await axios.get("http://192.168.11.125:3001/admins/workers");

        setData(data.map((worker) => workerFormater(worker)))

      } catch (error) {
        // console.log(error);
      }
    })(); // this is a function that call itself
  }, [])

  const columns = getColumns(data, setData)

  return (
    <div className="userList">
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
