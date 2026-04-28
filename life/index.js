// function lifeInWeeks(age) {
//   var yearsRemaining = 90 - age;
//   var days = yearsRemaining * 365;
//   var weeks = yearsRemaining * 52;
//   var months = yearsRemaining * 12;

//   console.log(
//     "You have " +
//       days +
//       " days, " +
//       weeks +
//       " weeks, and " +
//       months +
//       " months left.           ",
//   );
// }

// lifeInWeeks(12);

function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  var numBottles = Math.floor(money / 1.5);

  console.log("buy" + numBottles + " bottles of Milk");

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return money % 1.5;
}

var change = getMilk(4);
console.log(change);
