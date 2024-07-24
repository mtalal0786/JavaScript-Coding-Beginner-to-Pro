// Conditional Flow are used to execute a block/part of Code after a specified Condition.

// There are few types of Control Flow like If Condition, If Else , If Else If and Switch Case.

// There are some Conditional Operators like > , < , == , >= , <= , != , ===  , !==

// For Checking more then one condition at same time we use Logical Operators.

// Logical Operators are &&(And) All Condition Must True , || (OR) Any One of Condition Must True , !


                            // If Condition (Only Execute if Condition is True)
isLoggedIn = true

if (isLoggedIn){

    console.log("User is Logged In.");
};

// == or !=  Only Check the values not the data type 

if (2=="2"){

    console.log("Both are Equal ");
};

// === or !==   Check the values also there data types 

                                        // If Else Condition

if (2==="2"){

    console.log("Both are Equal ");
}
else{

    console.log("Diffrent Data Type.");

};

const age = 25;

if (age<20) {

    console.log("Age is Less then 20.");

}
else{

    console.log("Age is greater then 20.");

};

                                    //If-Else-If Condition

marks = 77;

if(marks<0){

    console.log("Marks are Only Allowed Between 0 and 60(Total Marks of Subject). And You Enter a  -Ve Value.");

}
else if (marks<24 && marks >=0) {

    console.log("F Grade");    

}

else if(marks<30 && marks >=24){

    console.log("D Grade");

}

else if(marks<39){

    console.log("C Grade");

}

else if(marks<48){

    console.log("B Grade");

}

else if(marks<60){

    console.log("A Grade");

}
else{

    console.log("Marks are Only Allowed Between 0 and 60(Total Marks of Subject). And You Enter a Value Greater then 60.");

};

                                //Switch Case Statement

const month = "feb";

switch (month) {
    case "dec":
        console.log("December");
        break;

    case "nov":
        console.log("November");
        break;
    
    case "oct":
        console.log("October");
        break;
    
    case "sep":
        console.log("September");
        break;

    case "aug":
        console.log("Augest");
        break;

    case "jul":
        console.log("July");
        break;    
    
    case "Jun":
        console.log("June");
        break;

    case "may":
        console.log("May");
        break;    
    
    case "apr":
        console.log("April");
        break;
    
    case "mar":
        console.log("March");
        break;

    case "feb":
        console.log("February");
        break;
    
    case "jan":
        console.log("January");
        break;
    default:
        console.log("Please Write correst name ");
        break;
}

                        // Conditional Statement (Tranery Operator)

// (condition) ? true : false ; 

(marks > 24) ? console.log(" Pass ") : console.log("Fail");

                    // Nullish Coalescing Operator (??): null undefined 

// Use for giving any number of values if one is null or undefined automatically take the other value 

const value = null ?? undefined ?? 15;

console.log(value);

                                        // Truthy values 

// "0" , "false", " ",[],{} , funtion(){}, true

// A non empty string is a truthy value even it has just a single space.

// Array , Objects and functions are truthy even they are empty.

                                        // Falsy value 

//  false , 0 ,(BigInt ) 0n, "" , null , undefined, NaN 