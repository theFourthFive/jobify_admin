// prettier-ignore
export default ({ row }) => {
  return (
    <div className="workerListElement">
      <img className="workerListImage" src={row.avatar} alt="" />
      {row.fullName}
    </div>
  )
}
