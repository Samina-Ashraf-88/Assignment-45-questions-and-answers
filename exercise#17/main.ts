let newGuests = ["ali", "usman", "hira", "madiha."];

console.log(newGuests);
console.log(
  "dear guests we have found a bigger dinner table so we are inviting three more guests."
);

newGuests.unshift("alia");

newGuests.push("zahid");

let middleindex: number = Math.floor(newGuests.length / 2);
newGuests.splice(middleindex, 0, "nazish");

newGuests.forEach((guest) =>
  console.log(
    `hello!${guest},all of you guests are invited for the dinner tomorrow.`
  )
);

console.log(
  "sorry!guests new table will not arrive  at time therefore we can only invite two people."
);

while (newGuests.length > 2) {
  let removedGuests = newGuests.pop();
  console.log(`sorry,${removedGuests} i cannot invite you for dinner.`);
}
newGuests.forEach((lasttwo) =>
  console.log(`hello!${lasttwo},you are finally invited for the dinner.`)
);

newGuests.pop();
newGuests.pop();

console.log("empty list:", newGuests);


