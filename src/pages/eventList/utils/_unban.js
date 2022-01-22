import axios from "axios";
import eventFormater from "./eventFormater";

// prettier-ignore
export default async (id, state, setState) => {

  setState(()=> state.map((company) => {
    if (company.id !== id) return company;
    company.status = "Active";
    return company;
  }))

  // now do the Unban request to the server
  const unban = { unbanEvent: true };
  const response = await axios.put(`http://localhost:3001/admins/events/${id}`, unban);

  // Get the new Data from the server
  const { data } = await axios.get("http://localhost:3001/admins/events")

  // update the state
  setState(data.map((worker) => eventFormater(worker)))
}
