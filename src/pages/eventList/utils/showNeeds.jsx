// prettier-ignore
export default ({ row }) => {
  console.log("----------",row);
  const { nbrChef, nbrMaid, nbrWaiter } = row;
  let needs = ""
  let needsChef = ""
  let needsMaid = ""
  let needsWaiter = ""

  if(nbrChef > 1){
    needsChef += `${nbrChef} chefs`
  } else if(nbrChef === 1) {
    needsChef += `${nbrChef} chef`
  }

  if(nbrMaid > 1){
    needsMaid += `${nbrMaid} cleaners`
  } else if(nbrMaid === 1) {
    needsMaid += `${nbrMaid} cleaner`
  }

  if(nbrWaiter > 1){
    needsWaiter += `${nbrWaiter} waiters`
  } else if(nbrChef === 1) {
    needsWaiter += `${nbrWaiter} waiter`
  }

  // customizing the output
  if(needsChef){
    needs += needsChef
  }

  if(needsMaid){
    if(needs){
      needs += " & " +needsMaid
    } else {
      needs += needsMaid
    }
  }

  if(needsWaiter){
    if(needs){
      needs += " & " + needsWaiter
    } else {
      needs += needsWaiter
    }
  }

  // rendering total needs (Chefs, Cleaners & Waiters)
  return (
    <div className="eventListTableCentered">
      {needs}
    </div>
  )
}
