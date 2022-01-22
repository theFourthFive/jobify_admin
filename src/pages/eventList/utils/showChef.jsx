// prettier-ignore
export default ({ row }) => {
  return (
    <div className="eventListTableCentered">
      {row.nbrChef ? row.nbrChef : 0} needed
    </div>
  )
}
