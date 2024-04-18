let guests = [
  "areeba",
  "usman",
  "hira",
  "and",
  "madiha",
  "these were the guests who were invited at dinner",
];

console.log(guests);

console.log(
  "due to an emergency areeba cannot come at dinner and now ali is invited instead of areeba."
);
let newGuests = ["ali", "usman", "hira", "madiha."];

console.log(newGuests);

newGuests.forEach((guest) =>
  console.log(`hello! ${guest},you are invited for a dinner tomorrow.`)
);
