// prettier-ignore
export default ({ row }) => {
  const { id, status } = row;

  return (
    <>
      <div className="workerListTableCentered">
        {row.rating ?? 0}
      </div>
    </>
  );
}
