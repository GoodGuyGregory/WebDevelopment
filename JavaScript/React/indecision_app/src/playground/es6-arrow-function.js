const square = function (x) {
    return x * x;
}

//es6 style 
//all arrow functions are annonymous
/*
const squareArrow = (x) => {
   return x * x;   
};
*/

//squareArrow Function Syntax 
//single lines don't require very much as you can see there is no explicit return it is implicitly returned
const squareArrow = (x) => x * x;

console.log(square(8));
console.log(squareArrow(81));

//note it will take about two weeks to fully master the new ARROW FUNCTION style

//CODE CHALLENGE:
//create getFirstName function using the new ES6 syntax
// the origninal is below:
/* 
    var fullName = 'Greg Witt';
    let firstName;

    if(fullName){
    //splits the full name into different parts and holds them in an Array
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName); */
var fullName = 'testie mctesterson';
let firstName;
/*
const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};
*/

const getFirstName = (fullName) => firstName = fullName.split(' ')[0];

console.log(getFirstName(fullName));