import showName from "./utils/showName";
import showLocation from "./utils/showLocation";
import showDuration from "./utils/showDuration";
import showDailyPay from "./utils/showDailyPay";
import showCompanyId from "./utils/showCompanyId";
import showNeeds from "./utils/showNeeds";
import showWaiter from "./utils/showWaiter";
import showMaid from "./utils/showMaid";
import showChef from "./utils/showChef";
import showMoreInfo from "./utils/showMoreInfo";
import showBanButton from "./utils/showBanButton";

// prettier-ignore
export default function getColumns (state, setState) {
  console.log("state:", state);
  return [
    { field: "id", headerName: "ID", width: 70 },
    { field: "eventName", headerName: "Event Name", width: 160, renderCell: showName },
    { field: "location", headerName: "Location", width: 130, renderCell: showLocation },
    { field: "needs", headerName: "Needs (Chefs / Cleaners / Waiters)", headerAlign: 'center', width: 250, renderCell: showNeeds },
    // { field: "nbrWaiter", headerName: "Waiters", headerAlign: 'center', width: 110, renderCell: showWaiter },
    // { field: "nbrMaid", headerName: "Cleaners", headerAlign: 'center', width: 110, renderCell: showMaid },
    // { field: "nbrChef", headerName: "Chefs", headerAlign: 'center', width: 110, renderCell: showChef },
    { field: "dailyPay", headerName: "Daily Pay", headerAlign: 'center', width: 110, renderCell: showDailyPay },
    { field: "duration", headerName: "Duration", headerAlign: 'center', width: 110, renderCell: showDuration },
    { field: "companyId", headerName: "Company ID", headerAlign: 'center', width: 110, renderCell: showCompanyId },
    // { field: "action", headerName: "More Info", headerAlign: 'center', width: 145, renderCell: showMoreInfo },
    { field: "ban", headerName: "Ban / Unban", headerAlign: 'center', width: 160, renderCell: (params) => showBanButton(params, state, setState) },
  ];
}
