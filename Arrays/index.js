// var guestList = ["Angel", " Grace", "Peter", "Paul", "Tomi"];

// var guestName = prompt("What is the name of your guest?");

// if (guestList.includes(guestName)) {
//   alert("You are welcome!");
// } else {
//   alert("You are not welcome here.");
// }

function whosPlaying(names) {
  var numberOfPeople = names.length;
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  var randomPerson = names[randomPersonPosition];

  console.log(randomPerson + " is going to buy lunch today!");
}

var whosPlaying = ["Micheal", "Rita", "John", "Paul", "Omoh"];
