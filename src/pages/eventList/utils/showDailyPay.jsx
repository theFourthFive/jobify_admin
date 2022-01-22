// prettier-ignore
export default ({ row }) => {
  return (
    <div className="eventListTableCentered">
      {row.dailyPay ? row.dailyPay : 0} Dinars
    </div>
  )
}
