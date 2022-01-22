// prettier-ignore
export default ({ row }) => {
  const { id, status } = row;

  return (
    <>
      <div className="workerListTableCentered">
        {row.status}
      </div>
    </>
  );
}
