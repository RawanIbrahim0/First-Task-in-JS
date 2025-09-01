/* const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(`arr[${i}], elements :` + arr[i]);
} */

/* 
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
console.log("Ghufran is :" + result(Ghufran)); */

function prime(n) {
  for (let j = 2; j < n; j++) {
    if (n % j === 0) {
      return false;
    }
  }
  return true;
}

function fact(m) {
  let mul = 1;
  for (let i = 1; i <= m; i++) {
    mul = mul * i;
  }
  return mul;
}
/* 
const primes = [];
for (let i = 1; i <= 100; i++){
  if (prime(i)) {
     primes.push(i)
  } 
} */

function fibonatcci(n) {
  if (n < 0) {
    return;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 0) {
    return 0;
  }

  let a = 0,
    b = 0,
    temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

/* 
for (let i = 0; i < 15; i++){
  console.log(fibonatcci(i));
} */

/* function perfectNumber(n) {
  let sum = 0;
  for (let j = 1; j < n; j++) {
    if (n % j === 0) {
     sum = sum + j;
    }
  }
  if (sum === n) {
    return true;
  }
  else { return false; }
}

for (let i = 1; i <= 1000; i++) {
  if (perfectNumber(i)) {
     console.log(i);
  }
}
 */

function reverce(num) {
  let result = 0;
  while (num > 0) {
    let remain = num % 10;
    result = result * 10 + remain;
    num = Math.floor(num / 10);
  }
  return result;
}

function isplaindrom(number) {
  if (number == reverce(number)) {
    return "is PlaindRom";
  } else {
    return "is Not PlaindRom";
  }
}

function movezerostoend(arr) {
  let count = 0;
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count++;
    } else {
      arr2.push(arr[i]);
    }
  }

  for (let i = arr2.length; i <= count + arr2.length; i++) {
    arr2[i] = 0;
  }

  return arr2;
}
/****************************************************** */

console.log(isplaindrom(12221));

/****************************************************** */

const u = [10, 0, 5, 20, 0, 12, 0];
const m = movezerostoend(u);
console.log(m);
