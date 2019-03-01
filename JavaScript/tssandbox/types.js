console.log("Hello from ts");
// Simple data types
var myString;
var myNum;
var myBool;
var myVar;
//complex data types
//declaring an array of strings
/*
let strArr: string[];
let numArr: number[];
let boolArr: boolean[];
*/
//other common initializers or istantiations
var strArr;
var numArr;
var boolArr;
//tuple array with a defined number of elements
//initial must match exactly order does matter
// after that it is considered a union
var strNumTuple;
myString = "Hello World";
myNum = 24;
myBool = true;
myVar = 7;
console.log(myString);
console.log(myNum);
console.log(myBool);
strArr = ["What's", 'up?'];
numArr = [2, 4, 6, 8];
boolArr = [true, false, true];
strNumTuple = ["Let's", 69];
//additional types
var myVoid = null;
var myNull = undefined;
var myUndefined = undefined;
console.log(strArr);
console.log(numArr);
console.log(boolArr);
console.log(strNumTuple);
console.log(myVoid);
