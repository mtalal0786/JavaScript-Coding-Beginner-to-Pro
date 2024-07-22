const emptyArr = [ ]	//Creates a new Array
const arr = [45,6,3,26,3,75,11]
const arr2 = new Array(["apple","mango","orange",["guava",["kiwi","banana"]]])	// Creates a new Array
 
// console.log(arr.length);
// console.log(arr2.length);

// console.log(arr);

// console.log(arr2);

// console.log(arr + arr2);

// console.log(arr.concat(arr2));

// console.log([...arr,...arr2]);

// console.log([...arr,...arr2.flat()]);

// console.log(arr2.flat());

// console.log(arr.flatMap((x) => ((x*25)*100)/1100));

// console.log(arr2.join());

// console.log(arr.reverse());

function getSum(total, num) {
        return (total + num) - 25;
      }

console.log(arr.reduce(getSum));

// console.log(Array.from("Talal")); //intersting



//****************************** Array Methods ***************************************//

// console.log(arr.at(3));	// Returns an indexed element of an array
// console.log(arr.concat(arr2));	// Joins arrays and returns an array with the joined arrays
// console.log(arr.constructor);	//Returns the function that created the Array prototype
// console.log(arr.copyWithin(1,4));	// Copies array elements within the array, to and from specified positions
// console.log(arr.entries());	// Returns a key/value pair Array Iteration Object
// function ageCheck(arr){
//     return arr > 12;
// };
// console.log(arr.every(ageCheck));	  // Checks if every element in an array pass a test
// console.log(arr2.fill("melon", 2, 4));	// Fill the elements in an array with a static value
// console.log(arr.filter(ageCheck));	// Creates a new array with every element in an array that pass a test
// console.log(arr.find(ageCheck));	// Returns the value of the first element in an array that pass a test
// console.log(arr.findIndex(ageCheck));	// Returns the index of the first element in an array that pass a test
// console.log(arr.findLast(ageCheck));	// Returns the value of the last element in an array that pass a test
// console.log(arr.findLastIndex(ageCheck));	// Returns the index of the last element in an array that pass a test
// console.log(arr.flat(Infinity));	// Concatenates sub-array elements
// console.log(arr.flatMap((x) => x * 2));	// Maps all array elements and creates a new flat array
// console.log(arr.forEach(ageCheck));	// Calls a function for each array element
// console.log(Array.from("ABCDE"));	 // Creates an array from an object
// console.log(arr.includes(45));	// Check if an array contains the specified element
// console.log(arr.indexOf(11));	// Search the array for an element and returns its position
// console.log(Array.isArray(arr));	// Checks whether an object is an array
// console.log(arr.join(","));	// Joins all elements of an array into a string
// console.log(arr.keys());	// Returns a Array Iteration Object, containing the keys of the original array
// console.log(arr.lastIndexOf(3));	// Search the array for an element, starting at the end, and returns its position
// console.log(arr.length);	// Sets or returns the number of elements in an array
// console.log(arr.map(Math.sqrt));	// Creates a new array with the result of calling a function for each array element
// console.log(Array.of("Ali","Awais","Shahroz"));	// Creates an array from a number of arguments
// console.log(arr.pop());	// Removes the last element of an array, and returns that element
// // console.log(arr.prototype);	// Allows you to add properties and methods to an Array object
// console.log(arr.push(7));	// Adds new elements to the end of an array, and returns the new length
// function getSum(total, num) {
//     return total - num;
//   }
// console.log(arr.reduce(getSum));	// Reduce the values of an array to a single value (going left-to-right)
// console.log(arr.reduceRight(getSum));	// Reduce the values of an array to a single value (going right-to-left)
// console.log(arr.reverse());	// Reverses the order of the elements in an array
// console.log(arr.shift());	// Removes the first element of an array, and returns that element
// console.log(arr.slice(4,7));	// Selects a part of an array, and returns the new array
// console.log(arr.some(ageCheck));	// Checks if any of the elements in an array pass a test
// console.log(arr.sort());	// Sorts the elements of an array
// console.log(arr2.splice(2,5));	// Adds or Removes array elements
// console.log(arr.toReversed());	// Reverses the order of array elements (to a new array)
// console.log(arr.toSorted());	// Sorts the elements of an array (to a new array)
// console.log(arr2.toSpliced());	// Adds or Removes array elements (to a new array)
// console.log(arr.toString());	// Converts an array to a string, and returns the result
// console.log(arr.unshift(23));	// Adds new elements to the beginning of an array, and returns the new length
// console.log(arr.valueOf());	// Returns the primitive value of an array
// console.log(arr.values());	// Returns the primitive value of an array
// console.log(arr.with(5,99));	// Returns a new array with updated elements

// //  Best use for array concatination

// const sports = ["Tannis","Hockey","FootBall","Cricket","BaseBall"]
// const players = ["Afridi","Kohli","Messi","Tendolkar","Ronaldo"]

// const playerSports = [...sports,...players]
// console.log(playerSports);


//*********************************** References for Study ********************************

// Youtube =>   https://www.youtube.com/watch?v=cejBux2gtEE&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=14
// W3School =>  https://www.w3schools.com/jsref/jsref_obj_array.asp
