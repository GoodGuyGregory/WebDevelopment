const square = x => x * x;

const cube = x => {
    return square(x) * x;
}

//Parentheses can be removed in single argument functions as above
// also note that the return keyword can be removed as the case for the first function square 
// and if there is a single line in the fucntion the curly braces can also be removed 

