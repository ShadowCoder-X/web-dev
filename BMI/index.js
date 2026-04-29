// function calcBmi(weight, height) {
//   var bmi = weight / Math.pow(height, 2);

//   return Math.round(bmi);
// }
// var bmi = calcBmi(65, 1.8);
// console.log(bmi);

prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
  alert(
    "Your love score is " +
      loveScore +
      "%." +
      " You love each other like Tolu and Tola.",
  );
} else {
  alert("Your love score is " + loveScore + "%.");
}
