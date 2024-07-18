let marks = 99;
const followers = new Number(1099)
console.log(followers);
console.log(marks);

//**************************** Number Functions *********************************//

console.log(followers.constructor); //
console.log(Number.EPSILON)
console.log(isFinite("1099")); //
console.log(Number.isFinite("1099")); //
console.log(Number.isFinite(Infinity)); //
console.log(Number.isFinite(NaN)); //
console.log(Number.isInteger(99)); //
console.log(Number.isInteger("99")); //
console.log(isNaN("99")); //
console.log(Number.isNaN("99")); //
console.log(Number.isNaN(NaN)); //
console.log(Number.isSafeInteger("123")); //
console.log(Number.isSafeInteger("123")); //
console.log(Number.isSafeInteger(Math.pow(2,53)-1)); //
console.log(Number.isSafeInteger(5-3)); //
console.log(Number.MAX_VALUE); //
console.log(Number.MIN_VALUE); //
console.log(Number.parseFloat("40 year old.")); // Return first number if number otherwise NaN.
console.log(Number.parseInt("35.5 year old.")); // Return first Integer Number if number otherwise NaN.
const followers2 = -1099.8765;
console.log(followers2.toExponential()); 
console.log(followers2.toFixed(3));
console.log(followers2.toLocaleString("en-US" , {style:"currency",currency:"USD"})); //Finland string type
console.log(followers2.toPrecision(3));
console.log(followers2.toString());
console.log(followers2.toString(8)); // octal value (base 8)
console.log(followers2.valueOf());


//******************************** Math Library ************************************//

console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);

console.log(Math.abs(followers2));
console.log(Math.ceil(45.1));
console.log(Math.floor(45.7));
console.log(Math.cos(45));
console.log(Math.sin(60));
console.log(Math.tan(90));
console.log(Math.E);
console.log(Math.exp(5));
console.log(Math.fround(4.56));
console.log(Math.cbrt(625));
console.log(Math.log(25));
console.log(Math.log10(25));
console.log(Math.log1p(25));
console.log(Math.max(50,100,75));
console.log(Math.min(50,100,75));
console.log(Math.pow(5,3));
console.log(Math.round(5.69));
console.log(Math.sqrt(27));

console.log(Math.random()); // rendom value btw 0 and 1.
console.log(Math.random()*10); // 1 to 9 . 10 is not included 
console.log((Math.random()*100)+1); //1 to 100 include random number


//*********************************** References for Study ********************************

// Youtube => https://www.youtube.com/watch?v=_KqpeDc47Ro&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=13
// W3School => https://www.w3schools.com/jsref/jsref_obj_number.asp
