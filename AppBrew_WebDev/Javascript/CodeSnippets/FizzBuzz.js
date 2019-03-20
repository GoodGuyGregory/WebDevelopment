//  Classic FizzBuzz Challenge:

var output = [];
var count = 1;

function fizzBuzz() {
  count += 1;
  if (count % 3 == 0 && count % 5 == 0) {
    console.log("FizzBuzz");
  }
  if (count % 3 == 0) {
      output.push("Fizz");
  } else if (count % 5 == 0){
      output.push("Buzz");
  } else {
    output.push(count);
  }
    console.log(output);
}//fizzBuzz
