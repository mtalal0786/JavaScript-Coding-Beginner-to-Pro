                //Coparison Operators Are
// console.log(2 > 1);
// console.log(2 < 5);
// console.log(2 == 2);
// console.log(2 >= 1);
// console.log(2 <= 6);
// console.log(2 != 6);

// Before Comparison make sure the Data Types of Data Are Same. 
//Not Recommended to do comparison with different Data Types.
 
// console.log(2 > "1");

//Problem of diffrent type comparison like here 
// console.log(null >= 0); //true 
// console.log(null < 0);//false
// console.log(null == 0); //false

// console.log(undefined >= 0); //false
// console.log(undefined > 0); //false
// console.log(undefined ==0); //false
 
//=== Strict Check . It check values with its datatypes as well.

console.log(2===2);
console.log("2"===2);