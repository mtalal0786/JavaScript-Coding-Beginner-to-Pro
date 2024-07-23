// IIFE (Immediately invoked Function Expressions ) is used to execute a function Immediately.
// It is also Used when there is chances that globel scope varaible can effect internal working of Functions.
// We use it to prevent function to be effected by Globel Scope Pollution.

// It is nothing but a () after the function declaration that  resulted in calling the function so we wrap the function in the () as (function name(){}) and add '()' at end . 
// We can alsopass arguments in the second () that are required as parameters in function. 

// General Way 

// function dbConnection(){
   
//   console.log("Database Is Connected.");

// }

// dbConnection() // Formal way

//IIFE

(function dbConnection(){
      // Named IIfe as dbConnected is name of function
      console.log("Database Is Connected.");
    
    })();  // ; is must to use. else it will generate error for next code execution. 
    
// Incloses Function declaration in () and add '()' to function call.  
     
// always end the IIFE function using ;  

((name) => {
    // Non named IIFE as there is no name of arrow function.
    console.log("Database Is Connected by username ",name);
  
  })("Talal"); 