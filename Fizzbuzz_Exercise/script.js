let x = 12; //not divisible by either 3 and 5
let result;
switch (true) {
  case (x%3 == 0 && x%5 == 0): result = "fizzbuzz";
    break;
  case (x%3 == 0): result = "fizz";
    break;
  case (x%5 == 0): result = "buzz";
    break;
  case (x%3 !== 0 && x%5 !== 0): result = x;
}
console.log();
// Taking what we learned from the conditionals practice with fizzbuzz, We are going to Loop through every number from 1 to max, applying those same exact rules to each number and, before ending the loop, printing out result to the console via console.log(result). A For Loop would work. 
let max = 50;
for (let i = 0; i <= max; i++) {
    switch (true) {
  case (i%3 == 0 && i%5 == 0): result = "fizzbuzz";
    break;
  case (i%3 == 0): result = "fizz";
    break;
  case (i%5 == 0): result = "buzz";
    break;
  case (i%3 !== 0 && i%5 !== 0): result = i;
  }
    console.log(result);
}