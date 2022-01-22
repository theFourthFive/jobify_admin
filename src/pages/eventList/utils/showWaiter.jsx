// prettier-ignore
export default ({ row }) => {
  return (
    <div className="eventListTableCentered">
      {row.nbrWaiter ? row.nbrWaiter : 0} needed
    </div>
  )
}
