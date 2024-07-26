// Loops are the block of code that allows the inside code to iterate to no of times we want. like pring Hallo World 1000 time.

// THere are few types of Loop and These are:-  for loop , while loop , do while loop and then some specified for loops like:- for of loop , for in loop , for each loop.


                                    // for loop

for (let i = 0; i < 10; i++) {

    const element = i;

    if (element === 5) {
        
        console.log("Element is 5.");
    
    }

    console.log(element);
   
}; 

                                // nested loop
 
for (let i = 1; i <= 5; i++) {
    
    for (let j = 1; j <= 3; j++) {

        console.log("Inner Number is ",j);
        
    }
    
    console.log("Outer Number is     ",i);
};

//Working with Arrays

let fruits = ["Mango","Kiwi","Banana","Apple"];

for (let i = 0; i < fruits.length; i++) {
    
    const element = fruits[i];
    
    console.log(element);
    
};

                            //break and continue

for (let i = 0; i < 15; i++) {
    const element = i;
    if (element == 5) {
        console.log("Number 5 is Skipped from Number Printing.");
        continue; //used to skip current iteration according to condition
    };
    if (element == 10) {
        console.log("Loop is Stopped When number is 10");
        break;//used to stop loop according to condition
    };
    console.log(element);
    
};