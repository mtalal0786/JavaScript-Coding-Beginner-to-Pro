// Loops used to handle Array are:- for in , for of , for Each Loop , Maps.

                                        //for of

const fruits = ["Orange","Peach","Banana","Apple","Kiwi"]

for (const fruit of fruits) {
    // console.log(`Fruit Name is ${fruit}`);
};

// Working with String

const myStr = "Pakistan";

for (const ch of myStr) {
    // console.log(`Charecter of String is "${ch}"`);
};

//Maps

const myMap = new Map();

myMap.set("WAN","Wide Area Network");
myMap.set("LAN","Local Area Network");
myMap.set("PAN","Personal Area Network");
myMap.set("MAN","Matropoliten Area Network");
myMap.set("WAN","Wide Area Network");

// console.log(myMap);

//for of loop on map

for (const [key,value] of myMap) // use [key,value] to get both and thenn print that you want
    {
    // console.log(`Key is ${key}      Value is ${value}`);
};

//Working for of with Object

const games = {
    "gm1": "NFS",
    "gm2": "SpiderMan",
    "gm3": "Taken-7"
};

// for (const [key,value] of games) {
    // console.log(key,    value);
// }; 

//for of does not work with Objects as Object are not Iterables.

// we can use for in loop to work with objects.

//for in Loop

//working with Objects

for (const key in games) {
    
    // console.log(`${key} game names are ${games[key]}`);
    };


//Working with array 

const myFruits = ["Orange","Peach","Banana","Apple","Kiwi"]

for (const key in myFruits) {
    // console.log(key); //it will print the keys(index value) of array 0,1,2...
    // console.log(myFruits[key]); // it will print the values of Array.
};

//for in loop also not work on maps it will not print anything because map is not iterable.

//for Each loop is used for working with Arrays

//for each loop

const coex = ["ruby","java","cpp","py","js"] ;

coex.forEach(ex => {
    // console.log(`Language Extention is ${ex}`);
});

//We can also create funnction outside the for each lop and then just give reference of it in for each loop . it will work the same.

function exprint (ex){
    console.log(`Extention of Language is ${ex}`);
};
coex.forEach(exprint); // just give referance by its name dont add () that is used to call the fuction.

//in for each loop it take the parameter that you give like ex and the index and complete array also.

coex.forEach((ex,index,arr) => {
    // console.log(`Extention of Language is ${ex} and its index is ${index} from array of `,arr);
});

//common senario of array and Object is [{},{},{}] used in foe Each loop

const prolang = [
{
    langN:"javascript",
    langEx:"js"
},
{
    langN:"c++",
    langEx:"cpp"
},
{
    langN:"java",
    langEx:"java"
},
{
    langN:"python",
    langEx:"py"
}
];
  
// important as we work with databases with these type of data in which array has multiple objects. 

prolang.forEach( (lang) =>{
    console.log(lang.langN,".",lang.langEx);
    // by using this we can access the Objects inside the arrray as in parameter we call every
    // programming Languange as language so every Object comes in this . and then we language 
    // name and extention using .
});

