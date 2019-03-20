// Fibonacci Challenge:
// Creates an Array which will store Fibonacci totals by requesting
// an index in the sum.

function fibonacciGenerator (n) {
    //TODO
    for (var nsum = 0; nsum <= n ; nsum++) {
      // Summation Calculation:
      var result = (nsum += nsum);
      fibonacciNums.push(result);
    }
    //Return an array of fibonacci numbers.

    console.log(fibonacciNums);

}
