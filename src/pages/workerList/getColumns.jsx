import showFullName from "./utils/showFullName";
import showMoreInfo from "./utils/showMoreInfo";
import showBanButton from "./utils/showBanButton";
import showStatus from "./utils/showStatus";
import showRating from "./utils/showRating";

// prettier-ignore
export default function getColumns (state, setState) {
  return [
    { field: "id", headerName: "ID", width: 100 },
    { field: "fullName", headerName: "Full name", width: 250, renderCell: showFullName },
    { field: "email", headerName: "E-mail", width: 250 },
    { field: "rating", headerName: "Av. Rating", headerAlign: 'center', width: 100, renderCell: showRating },
    { field: "action", headerName: "More Info", headerAlign: 'center', width: 145, renderCell: showMoreInfo },
    { field: "ban", headerName: "Ban / Unban", headerAlign: 'center', width: 160, renderCell: (params) => showBanButton(params, state, setState) },
  ];
}
