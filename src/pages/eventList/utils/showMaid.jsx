// prettier-ignore
export default ({ row }) => {
  return (
    <div className="eventListTableCentered">
      {row.nbrMaid ? row.nbrMaid : 0} needed
    </div>
  )
}
