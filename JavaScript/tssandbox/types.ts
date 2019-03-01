console.log("Hello from ts");

// Simple data types
let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

//complex data types
//declaring an array of strings
/*
let strArr: string[];
let numArr: number[];
let boolArr: boolean[];
*/

//other common initializers or istantiations
let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

//tuple array with a defined number of elements
//initial must match exactly order does matter
// after that it is considered a union
let strNumTuple: [string, number];

myString = "Hello World";
myNum = 24;
myBool = true;
myVar = 7;

console.log(myString);
console.log(myNum);
console.log(myBool);

strArr= ["What's", 'up?'];
numArr = [2,4,6,8];
boolArr = [true, false, true];

strNumTuple = ["Let's", 69];

//additional types
let myVoid: void = null;
let myNull: null = undefined;
let myUndefined: undefined = undefined;

console.log(strArr);
console.log(numArr);
console.log(boolArr);
console.log(strNumTuple);
console.log(myVoid);
