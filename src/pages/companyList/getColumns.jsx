import showLabel from "./utils/showLabel";
import showBussinessField from "./utils/showBussinessField";
import showMoreInfo from "./utils/showMoreInfo";
import showBanButton from "./utils/showBanButton";

// prettier-ignore
export default function getColumns (state, setState) {
  return [
    { field: "id", headerName: "ID", width: 100 },
    { field: "label", headerName: "Label", width: 300, renderCell: showLabel },
    { field: "bussinessField", headerName: "Bussiness Field", width: 160, renderCell: showBussinessField },
    { field: "email", headerName: "E-mail", width: 280 },
    { field: "action", headerName: "More Info", headerAlign: 'center', width: 145, renderCell: showMoreInfo },
    { field: "ban", headerName: "Ban / Unban", headerAlign: 'center', width: 160, renderCell: (params) => showBanButton(params, state, setState) },
  ];
}
