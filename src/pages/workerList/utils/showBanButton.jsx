import handleBan from "./_ban";
import handleUnban from "./_unban";

// prettier-ignore
export default ({ row }, state, setState) => {
  const { id, status } = row;
  let banOrUnbanButton;
  if (status.toLowerCase() === "active") {
    banOrUnbanButton = (
      <button className="workerListBan" onClick={() => handleBan(id, state, setState)}>
        Ban
      </button>
    );
  } else {
    banOrUnbanButton = (
      <button className="workerListUnban" onClick={() => handleUnban(id, state, setState)}>
        Unban
      </button>
    );
  }

  return (
    <>
      <div className="workerListTableCentered">{banOrUnbanButton}</div>
    </>
  );
}
