//funciton scoped
/*
var nameVar = 'Greg';
var nameVar = 'Insub';
console.log('nameVar', nameVar);

// ES6 standard for variables convention can be reassigned 
let nameLet = 'Blair';
nameLet = 'Matthew';
console.log('nameLet', nameLet);

//Cannot be reassigned it is a CONSTANT duh!
const nameCost = 'Philip';
const nameCost = 'Gunther';
console.log('nameCost', nameCost);

function getPetName() {
    var petName = 'Bufford';
    return petName;
}
*/
/*
getPetName();
//Bufford won't show up var is out of scope here.
console.log(petName);

// Block Scoping (Let and Const)
*/
var fullName = 'Greg Witt';
let firstName;

if(fullName){
    //splits the full name into different parts and holds them in an Array
     firstName = fullName.split(' ')[0];

    console.log(firstName);
}

console.log(firstName);