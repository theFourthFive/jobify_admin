// prettier-ignore
export default ({ row }) => {
  return (
    <div className="eventListElement">
      <img className="eventListImage" src={row.avatar} alt="" />
      {row.eventName}
    </div>
  )
}
