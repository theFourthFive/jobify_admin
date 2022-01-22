import axios from "axios";
import workerFormater from "./workerFormater";

// prettier-ignore
export default async (id, state, setState) => {

  // updating the state directly before doing a request & waiting for a response
  setState(()=> state.filter((worker) => worker.id !== id))

  const hardDelete = {hardDelete : true}
  // Ban request from the server
  let response = await axios.delete(`localhost:3001/admins/workers/${id}`, hardDelete)

  // Get the new Data from the server
  const { data } = await axios.get("localhost:3001/admins/workers")

  setState(data.map((worker) => workerFormater(worker)))
}
