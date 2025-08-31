/* const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(`arr[${i}], elements :` + arr[i]);
} */

var help = 2;

const Sami = [59, 58, 70, 60];
const Mohammad = [77, 58, 70, 60];
const Ghufran = [90, 66, 70, 60];

function result(marks) {
  var f = 0;
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 60) {
      f = f + (60 - marks[i]);
    }
  }

  if (f > help) {
    return "Failed";
  } else {
    return "Pass";
  }
}

console.log("Sami is :" + result(Sami));
console.log("Mohammad is :" + result(Mohammad));
console.log("Ghufran is :" + result(Ghufran));
