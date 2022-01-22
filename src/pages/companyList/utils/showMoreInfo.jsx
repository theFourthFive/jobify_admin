import { Link } from "react-router-dom";

// prettier-ignore
export default ({ row }) => {
  const { id, status } = row;

  return (
    <>
      <div className="workerListTableCentered">
        <Link to={"/companies/" + id}>
          <button className="workerListEdit">Show</button>
        </Link>
      </div>
    </>
  );
}
