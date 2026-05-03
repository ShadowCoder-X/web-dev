// function fibonacciGenerator(n) {
//   var output = [];
//   if (n === 1) {
//     output = [0];
//   } else if (n === 2) {
//     output = [0, 1];
//   } else {
//     output = [0, 1];

//     for (var i = 2; i < n; i++) {
//       output.push(output[output.lenght - 2] + output[output.lenght - 1]);
//     }
//   }

//   return output;
// }

// output = fibonacciGenerator(2);
// console.log(output);

// My own
function patBack(n) {
  var output = [];
  if (n === 5) {
    output = [1, 2];
    output.lenght;
  } else if (n >= 8) {
    output = [4, 7];

    for (var i = 1; i < n; i++) {}
  }
  return output;
}
output = patBack(5);
console.log(output);
