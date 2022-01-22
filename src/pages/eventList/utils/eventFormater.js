// prettier-ignore
export default function eventFormater (event) {
  const id = event.eventID;
  const avatar = event.imageUri ?? ""
  const companyId = event.companyCompanyId
  const nbrMaid = event.nbrCleaningWorker

  const { eventName, location, date_time, nbrWaiter, nbrChef, duration, dailyPay, nbrWorkers, createdAt, updatedAt, status } = event;

  return { id, avatar, companyId, eventName, location, date_time, nbrWaiter, nbrChef, nbrMaid, duration, dailyPay, nbrWorkers, createdAt, updatedAt, status };
}
