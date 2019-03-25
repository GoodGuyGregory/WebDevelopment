// Fibonacci Challenge:
// Creates an Array which will store Fibonacci totals by requesting
// an index in the sum.

function fibonacciGenerator (n) {
    //TODO
    // create the array
    var fib = [];
      // Loops through the array based on the input
     for (var i = 0; i < n; i++) {
        // first series solution
         fib.push(i);
         // 1 + K case -> infinity
         if(i > 1) {
              // entry = previous entry + second previous entry
              fib[i] = fib[i-1] + fib[i-2];
         }
     }
     // returns the array with the correct numbers
     return fib;

}
