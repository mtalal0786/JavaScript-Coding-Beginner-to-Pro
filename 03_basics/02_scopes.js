// Scope means Boundary or Limit of any thing. Like for  Conditions or Loops.
let a = 25;
let b = 45;
//  console.log(a);  
//  console.log(b);
if (b>a) {
   let c= 65;
   let d = 89;
   //  console.log("Condiotion is True");
   //  console.log("Scope of c is the condional brackets and value is ",c);
   //  console.log("Scope of d is the condional brackets and value is ",d);
}  
  
let c = 11;
 
//  console.log("Value of c outside the condition",c);

 //dont use var as it can be accessed any where . var has no scope so always avoid var. 

 // Global Scope and Local Scope.
 // variable a,b are in Global Scope.
 // valriable d is in If Condition  and is In Local Scope of Conditional Statement.
 // We can Accss values of a and b in Local Scope but value of d declare in 
 // If Condition can not be  accessed OutSide the Brackets of If Condition.
 // Like in the Below functions .

function outer(){
   let employeeName = "Awais"; 

   function inner(){
      let ownerName = "Ali";
      console.log(`Name of Employee is ${employeeName}`); // It Will Access The Parent Function Outer() values and data .
      console.log("Name of Owner is ",ownerName); //Generate not defined Error
      console.log(`Even the values of a,b and c can also be accessed as there values are ${a} ${b} and ${c}`); 
   }

   inner();

   // console.log("OwnerName is ",ownerName); //Generate not defined Error 

};

outer()

// for function name(){} YOU DIDN'T get any error if you call it with its name before its creation. 
// for const/let name =  function (){} YOU  got INTITIALIZATION  error if you call it with its name before its creation. 

