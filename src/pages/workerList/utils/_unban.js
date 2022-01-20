import axios from "axios";
import workerFormater from "./workerFormater";

// prettier-ignore
export default async (id, state, setState) => {

  setState(()=> state.map((worker) => {
    if (worker.id !== id) return worker;
    worker.status = "Active";
    return worker;
  }))

  // now do the Unban request to the server
  const unban = { unbanWorker: true };
  const response = await axios.put(`http://192.168.11.125:3001/admins/workers/${id}`, unban);

  // Get the new Data from the server
  const { data } = await axios.get("http://192.168.11.125:3001/admins/workers")

  // update the state
  setState(data.map((worker) => workerFormater(worker)))
}
