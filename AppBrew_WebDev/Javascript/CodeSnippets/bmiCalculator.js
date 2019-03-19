//Create your function below this line.
function bmiCalculator(weight, height){
    var bmi = (weight / Math.power(height, 2));
    return Math.round(bmi);
}



/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8);

bmi should equal around 20 in this case.

*/

var bmi = bmiCalculator(65, 1.8);
console.log(bmi)

// Conditional BMI (IF/Else)

function bmiCalculator(weight, height){
    var bmi = Math.round(weight / (Math.power(height, 2)));
    var interpretation;

    if(bmi < 18.5){
       interpretation = alert("Your BMI is " + bmi + ", so you are underweight.");
    }
    if(bmi >= 18.5 && bmi < 24.9 ){
       interpretation = alert("Your BMI is " + bmi + ", so you have a normal weight.");
    }
    if(bmi > 24.9){
       interpretation = alert("Your BMI is "  + bmi + ", so you are overweight.")
    }

    return interpretation;

}
