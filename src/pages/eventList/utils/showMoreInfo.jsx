import { Link } from "react-router-dom";

// prettier-ignore
export default ({ row }) => {
  const { id, status } = row;

  return (
    <>
      <div className="eventListTableCentered">
        <Link to={"/events/" + id}>
          <button className="eventListEdit">Show</button>
        </Link>
      </div>
    </>
  );
}
