let newGuests = ["ali", "usman", "hira", "madiha."];

console.log(newGuests);
console.log("dear guests we have found a bigger dinner table so we are inviting three more guests." )

newGuests.unshift("alia");

newGuests.push("zahid");

let middleindex:number= Math.floor(newGuests.length/2);
newGuests.splice(middleindex,0,"nazish");

newGuests.forEach(guest=>console.log(`hello!${guest},all of you guests are invited for the dinner tomorrow.`));
