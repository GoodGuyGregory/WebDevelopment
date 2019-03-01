//basic function w/o types
/*
function getSum(num1, num2){
    return num1 + num2;
} 
*/

function getSum(num1: number, num2: number):number{
    return num1 + num2;
} 

//console.log(getSum(1,4));

let mySum = function(num1: any, num2: any): number{
    if(typeof num1 == 'string'){
        //parse function will parse a string as a number
        num1 = parseInt(num1);
    }
    if(typeof num2 == 'string'){
        //parse function will parse a string as a number
        num2 = parseInt(num2);
    }     
    return num1 + num2;
}

//console.log(mySum('3','5'));

function getName(firstName: string,lastName: string):string{
    if(lastName == undefined){
        return firstName;
    }
    return firstName+' '+lastName;
}

//console.log(getName('Jason','Gallavin'));
console.log('Matt');

function myVoid(): void{
    return;
}
