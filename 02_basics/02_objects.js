//Singleton
 
//Two Types of Object Declaration

//Object Litrals => No Sigleton
//Object Constructor => Singleton

//*************************** Object Literals*************************************** */

const mySym = Symbol("Alpha")
const mySym2 = Symbol("Beta")


const myObj = {
    name:"M Talal",
    email:"talal@mail.com",
    age:23,
    isPresent:true,
    workingDay:["Teu","Fri","Mon"],
    mySym:"Alpha",
    [mySym2]:"Beta"
}

myNewObj = {
    name:"Muhammad Talal",
    email:"talal786@gmail.com"
}
// console.log(myObj);
// console.log(myNewObj);
// console.log(myObj.age);
// console.log(myObj["email"]); //best way to access obj elements.
// console.log(myObj.constructor); //best way to access obj elements.
// console.log(myObj.workingDay); 
// console.log(myObj.mySym); 
// console.log(typeof (myObj.mySym)); 
// console.log(myObj[mySym2]);
// console.log(typeof myObj[mySym2]);
myObj.age = 25;
// Object.freeze(myObj); //Freezing object that does not allow any changing any more 
// myObj.isPresent = false //this does not changed.
// console.log(myObj);





//****************************** Object Methods ***************************************//

// Name	Description

// console.log(Object.assign(myObj,myNewObj));	// Copies properties from a source object to a target object
// console.log(myObj.constructor);// Returns the function that created an object's prototype
const employeeDetail = Object.create(myObj)
employeeDetail.name = "Awais";
// console.log(employeeDetail);	//Returns an object created from an existing object
Object.defineProperties(myNewObj,{
    age:{value:24},
    email:{value:"awais@gmail.com"}
});	

// console.log(myNewObj); // Adds or changes properties
Object.defineProperty(myObj,"isPresent",{
    value:false
});
// console.log(myObj);	 // Adds or changes a property

// console.log(Object.entries(myObj));	// Returns an array of the key/value pairs of an object

// console.log(Object.freeze(myObj));	 // Prevents any changes to an object

const fruits = [["Apple",200],["Banana",300],["Avacado",400],["Peach",500]];

// console.log(Object.fromEntries(fruits));	// Returns an object created from an iterable list of key/value pairs

// console.log(Object.getOwnPropertyDescriptor(myObj,"email"));	 // Returns an array of the keys of an object

// console.log(Object.getOwnPropertyDescriptors(myObj,"email"));  // Returns an array of the keys of an object

// console.log(Object.getOwnPropertyNames(myObj));	// Returns an array of the keys of an object

	
// console.log(Object.isExtensible(myObj));	  // Returns true if an object is extensible

// console.log(Object.isFrozen(myObj));	// Returns true if an object is frozen

// console.log(Object.isSealed(myObj));	// Returns true if an object is sealed

// console.log(Object.keys(myObj));	// Returns an array of the keys of an object

Object.preventExtensions(myObj)	// Prevents adding new properties to an object

// prototype	Let you to add properties and methods to JavaScript objects

Object.seal(myNewObj);	// Prevents adding new or deleting existing object properties

const srtingObject = Object.toString(myObj);
// console.log(srtingObject);	// Converts an object to a string and returns the result

console.log(myObj.valueOf());	// Returns the primitive value of an object

// console.log(Object.values(myObj));	// Returns an array of the property values of an object	



//*********************************** References for Study ********************************

// Youtube =>   https://www.youtube.com/watch?v=vVYOHmqQDCU&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=17
// Youtube =>   https://www.youtube.com/watch?v=4lb2pXWWXJI&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=18
// W3School =>  https://www.w3schools.com/jsref/jsref_obj_object.asp
