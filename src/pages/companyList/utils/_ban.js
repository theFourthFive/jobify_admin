import axios from "axios";
import companyFormater from "./companyFormater";

// prettier-ignore
export default async (id, state, setState) => {

  // updating the state directly before doing a request & waiting for a response
  const newData = state.map((worker) => {
    if (worker.id !== id) return worker;
    worker.status = "Banned";
    return worker;
  });
  setState(()=> newData)

  try {
    // Ban request from the server
    let response = await axios.delete(`http://localhost:3001/admins/companies/${id}`)

    // Get the new Data from the server
    const { data } = await axios.get("http://localhost:3001/admins/companies")

    setState(data.map((worker) => companyFormater(worker)))

  } catch (error) {
    console.log(error);
  }



}
