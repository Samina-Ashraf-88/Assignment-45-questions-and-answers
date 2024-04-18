var newGuests = ["ali", "usman", "hira", "madiha."];
console.log(newGuests);
console.log("dear guests we have found a bigger dinner table so we are inviting three more guests.");
newGuests.unshift("alia");
newGuests.push("zahid");
var middleindex = Math.floor(newGuests.length / 2);
newGuests.splice(middleindex, 0, "nazish");
newGuests.forEach(function (guest) {
    return console.log("hello!".concat(guest, ",all of you guests are invited for the dinner tomorrow."));
});
console.log("sorry!guests new table will not arrive  at time therefore we can only invite two people.");
while (newGuests.length > 2) {
    var removedGuests = newGuests.pop();
    console.log("sorry,".concat(removedGuests, " i cannot invite you for dinner."));
}
newGuests.forEach(function (lasttwo) {
    return console.log("hello!".concat(lasttwo, ",you are finally invited for the dinner."));
});
newGuests.pop();
newGuests.pop();
console.log("empty list:", newGuests);
