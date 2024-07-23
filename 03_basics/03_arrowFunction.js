                                        // This KeyWord 

// This kewword is used in Objects with Object values to tell the 
// current Object or context we are working with.

myObj = {
    uname:"Talal",
    
    age:25,
    
    values:function (){
    
        // console.log(`The Name is ${this.uname} and his age is ${this.age}.`);
    
    // console.log(this); // To check the scope/context of it in the  Object Method.
}

} 

// myObj.values();

// myObj.uname = "Awais"

// myObj.values();

// myFunction(myObj);

// console.log(this); // To check the scope/context of it in the Globel Scope. It will give empty object in 
                   // Node Environment and in Chrome browser Console it give Windows with different Methods.

// Value of this in a function 

function dummy (){
    
    let myName = "Ali";
    
    // console.log(this); //Gives many methods of the function and also the custom declarations like username 
    
    // console.log(this.myName); // It generates undefined. This will not work in function it only work in objects

}

dummy();
                                // Arrow Functions
// Arrow Function it is a Short Form f function declaration and it is 
// annonymous function it does not require function keyword and function name to creatte function .

// General function creation

// function name(){};

// Arrow Function creation 

// () => {}

// If you want to name this function you can use variableName declaration like.

// const add = () => {} give this function a name add.

const dum = () =>{

    // console.log(this); // to Check what it gives in an Arrow function.

}

dum(); // gives same empty Object


// in bellow two ways you can write single line Arrow Function for Small Purpose without using {} an return keywords.

// const addition = (n1,n2) => n1+n2;

// const addition = (n1,n2) => (n1+n2);

// working with object in arrow function. always  use {} to retun an object 

const addition = () => ({username:"M Awais"});

console.log(`Addition of Two Numbers using Arrow Function is ${addition()}`);

// Arrow Function is mostly used in working with array and Loops.

