function calcBmi(weight, height) {
  var bmi = weight / Math.pow(height, 2);

  return bmi;
}
var bmi = calcBmi(65, 1.8);
console.log(bmi);
