import handleBan from "./_ban";
import handleUnban from "./_unban";

// prettier-ignore
export default ({ row }, state, setState) => {
  const { id, status } = row;

  let banOrUnbanButton;
  if (status.toLowerCase() === "active") {
    banOrUnbanButton = (
      <button className="eventListBan" onClick={() => handleBan(id, state, setState)}>
        Ban
      </button>
    );
  } else {
    banOrUnbanButton = (
      <button className="eventListUnban" onClick={() => handleUnban(id, state, setState)}>
        Unban
      </button>
    );
  }

  return (
    <>
      <div className="eventListTableCentered">{banOrUnbanButton}</div>
    </>
  );
}
