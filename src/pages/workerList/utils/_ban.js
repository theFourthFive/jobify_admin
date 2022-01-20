import axios from "axios";
import workerFormater from "./workerFormater";

// prettier-ignore
export default async (id, state, setState) => {

  // updating the state directly before doing a request & waiting for a response
  const newData = state.map((worker) => {
    if (worker.id !== id) return worker;
    worker.status = "Banned";
    return worker;
  });
  setState(()=> newData)

  // Ban request from the server
  let response = await axios.delete(`http://192.168.11.125:3001/admins/workers/${id}`)

  // Get the new Data from the server
  const { data } = await axios.get("http://192.168.11.125:3001/admins/workers")

  setState(data.map((worker) => workerFormater(worker)))
}
