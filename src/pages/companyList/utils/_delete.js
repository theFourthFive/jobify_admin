import axios from "axios";
import companyFormater from "./companyFormater";

// prettier-ignore
export default async (id, state, setState) => {

  // updating the state directly before doing a request & waiting for a response
  setState(()=> state.filter((worker) => worker.id !== id))

  const hardDelete = {hardDelete : true}
  // Ban request from the server
  let response = await axios.delete(`localhost:3001/admins/companies/${id}`, hardDelete)

  // Get the new Data from the server
  const { data } = await axios.get("localhost:3001/admins/companies")

  setState(data.map((worker) => companyFormater(worker)))
}
