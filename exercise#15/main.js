var guests = [
    "areeba",
    "usman",
    "hira",
    "and",
    "madiha",
    "these were the guests who were invited at dinner",
];
console.log(guests);
console.log("due to an emergency areeba cannot come at dinner and now ali is invited instead of areeba.");
var newGuests = ["ali", "usman", "hira", "madiha."];
console.log(newGuests);
newGuests.forEach(function (guest) {
    return console.log("hello! ".concat(guest, ",you are invited for a dinner tomorrow."));
});
