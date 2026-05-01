var guestList = ["Angel", " Grace", "Peter", "Paul", "Tomi"];

var guestName = prompt("What is the name of your guest?");

if (guestList.includes(guestName)) {
  alert("You are welcome!");
} else {
  alert("You are not welcome here.");
}
