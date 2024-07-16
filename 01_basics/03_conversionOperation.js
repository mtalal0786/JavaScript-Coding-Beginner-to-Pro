            // Number Conv
let score = "33" 
//Uncomment all the values one by one to  check there result 
// score = "33abc"
// score = null
// score = undefined
// score = true

console.log(typeof(score));// actual type
let valueInNumber = Number(score)
console.log(typeof(valueInNumber));// converted type
console.log(valueInNumber);// value
            //Boolean Conv
let isLoggedIn = 1
// isLoggedIn =0
// isLoggedIn = ""
// isLoggedIn = "Talal"
let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn) //When value 1 and "filled string" => true; When vale is 0 and "" => false 
                //String Conv
let someNumber = 45
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof (stringNumber))