                                    // While Loops

let index = 1 // Intialization / start

while (index <= 10) // Condition 
{
    
    console.log("2", " x" , index , "=", 2*index);
    
    index = index + 1; //increment
};

//Working with array

let sports = ["Basketball","Tannis","Baseall","Football","Cricket"];

let arr = 1;

while (arr < sports.length) {
    console.log(`Name of Sport is ${sports[arr]}`);
    arr+=1;
};

                                        //Do While

i =1;
do {
    console.log(`The value of i is ${i}`);
    i++;
}while(i == 1); // it will be execute once even the condition is already true.