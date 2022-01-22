import axios from "axios";
import eventFormater from "./eventFormater";

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
    let response = await axios.delete(`http://localhost:3001/admins/events/${id}`)

    // Get the new Data from the server
    const { data } = await axios.get("http://localhost:3001/admins/events")

    setState(data.map((worker) => eventFormater(worker)))

  } catch (error) {
    console.log(error);
  }



}
