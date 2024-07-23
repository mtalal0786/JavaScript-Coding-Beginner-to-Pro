//Functions are used to make code more readable, Optimize and Reuseable.There are diffrent Ways to use Functions.

function sum(){
    let a=3;
    let b=4
    let sum = a + b
    // console.log("Value of a is " + a,"and Value of b is " + b ," and sum of them is " + sum);
}

sum()

function addition (num1,num2){
    let vsum = num1 + num2;
    return vsum;
}

a=5,b=6;

// console.log("THe Addition of A and B is ",addition(a,b));

function sub (num1,num2){
    return num1 - num2;
}
// console.log("THe sub of A From  B is ",sub(25,5));


function mul(num1,num2,num3) { return (num1 * num2 ) * num3};

// console.log("THe Product of A , B and C is ",mul(5,3,5));

let adding = addition(276,124);
let subtract = sub(195,34);
let multiple = mul (51,45,35);
let result = (multiple - adding) / subtract;  

// console.log(`The Division of the values come from Subtraction Function on Multiplication Function after Subtraction Addition Function Values from Multiplication Function is ${result}`);

// console.log(`result of adding subraction function value ${subtract} and addition function value ${adding} and then devide \n multiplcation function value ${multiple}  with this result and the final result is ${multiple / (addition(subtract,adding))}`);

//When Input numbers are Unknown. use rest operator.(...).

function TotalMarks(...n1) {
    return n1; //gives an array of all the values given to function to give the total result.
}
console.log(TotalMarks(555,33457,233,4343));

// Creating Object and giving to Function.
myObj = {
    uname:"Talal",
    age:25
}
//use anyobject instead of the custom created object myObj as we can give any other object when needed.

function myFunction(anyobject){
    console.log(`The Name is ${anyobject.uname} and his age is ${anyobject.age}.`);

}
 
// myFunction(myObj);

//Direct Passing of Object 

myFunction({
    uname:"Awais",
    age:26
});

//Creating arraay and then pass to the Function

const myArray = ["Apple","Mango","Banana","Guava","Peach","Kiwi"];

function arrayWorking(fruits){
    return fruits[3];
}

console.log(`The Fruit No in Array is ${myArray.indexOf(myArray[3])} and Value is  ${arrayWorking(myArray)}`);

    