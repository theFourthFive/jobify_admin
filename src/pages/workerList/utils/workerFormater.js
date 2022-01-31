// prettier-ignore
export default function workerFormater (worker) {
  const id = worker.workerId;
  const firstName = worker.firstName ?? "";
  const lastName = worker.LastName ?? "";

  let fullName = "";
  if (firstName) fullName += firstName;
  if (lastName) fullName += " " + lastName;

  const email = worker.Email;
  const rating = worker.avgRating

  const avatar = worker.imageUrl;
  const { phoneNumber, createdAt, updatedAt, status } = worker;

  return { id, fullName, avatar, phoneNumber, createdAt, updatedAt, status, email, rating };
}
