let fruit= "apple";

console.log("is fruit equal to apple?");
console.log(fruit=="apple");

console.log("is fruit not equal to apple?");
console.log(fruit!="apple");


let uppercaseApple="APPLE";

console.log("\nis APPLE equal to fruit after converting to lowercase?");
console.log(uppercaseApple.toLowerCase()=="apple");
 
console.log("APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase()!="apple");


let ten=10;
let twenty=20;

console.log("\nten is equal to twenty.");
console.log(ten==twenty);

console.log("ten is not equal to twenty.");
console.log(ten!=twenty);

console.log("ten is greater than zero.");
console.log(10>0);

console.log("twenty is less than ten.");
console.log(20<10);

console.log("ten is greater than or equal to five.");
console.log(10>=5);

console.log("twenty is less than or equal to ten.");
console.log(20<=10);

console.log("twenty is not equal to ten and twenty is greater than ten.");
console.log(twenty!=10 && 20>10);

console.log("twenty is greater than fifty or twenty is not equal to twenty.");
console.log(20>50||20!=20);


let fruits=["apple","banana","orange"];

console.log("\norange is included in my fruits array.");
console.log(fruits.includes("orange"));

console.log("orange is not included in my fruits array.");
console.log(!fruits.includes("orange"));
