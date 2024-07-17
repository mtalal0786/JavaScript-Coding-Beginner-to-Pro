myName = "Myself Muhammad Talal"
myClass = "BS Computer Science"

// this type of concatination is not recomended
console.log(myName + " and My class is " + myClass);

// Use Back-Ticks and ${} for display strings and variables .This is more convinient.
console.log(`${myName} and My class is ${myClass}.`);

const gameName = new String("Call of Duty") //(new) using object for string initialization.
console.log(gameName);

console.log(gameName.length); // Give the Length of String.
console.log(gameName.at(5)); // Give the value at the Specified Index.
console.log(gameName.concat(" ",myClass)); // Add Different Strings to the Given String.
console.log(gameName.constructor); // Give the Function that Created the String Prototype.
console.log(String.fromCharCode(76,81,66)); //Give Alphabet According to their CharCode of UniCode.
console.log(gameName.includes("alal")); // Give Boolean Result of Sepecific Word Present or Not.
console.log(gameName.indexOf("a")); // Give the Index of First Occurence of Words or Characters.
console.log(gameName.lastIndexOf("a")); // Give Index of Last Occurence of Words or Characters.
console.log(gameName.match(/m/gi)); // Match any Character or Word in String with out Case-Senstivity. 
console.log(gameName.padStart(20,"X")); // At StartAdd specified Symbol for spaces more then the string length.
console.log(gameName.padEnd(20,"X")); // At End Add specified Symbol of spaces more then the string length.
console.log(gameName.repeat(2)); //Repeat the String Number of Time.
console.log(gameName.replace("of","Of")); // Replace Words in first occurence of word String.replaceAll() Replaces in all positions in string
console.log(gameName.search("Duty")); // Search for the Words present in String or Not.
console.log(gameName.slice(0,4)); // Give a Spacific part of of String.
console.log(gameName.split(" ")); // (Split) Divide String and make Array according to Spaces between Words.
console.log(gameName.startsWith("Call")); //Check the String Start with Same Words.
console.log(gameName.substring(4,7)); //Give a part of String as a new String.
console.log(gameName.toLowerCase()); // Convert string to Small Alphabets.
console.log(gameName.toLocaleLowerCase()); //LowerCase According to the System.
console.log(gameName.toUpperCase()); // Convert string to Capital Alphabets.
console.log(gameName.toLocaleUpperCase()); //UpperCase According to the System. 
console.log(gameName.toString()); // GIve the String As String Object
const gameName2 = "        Call of Duty        "; // New Variable with New Value for OP of Trim
console.log(gameName2.trimStart());  //Remove White Space From Start
console.log(gameName2.trimEnd()); // Remove White Space From End
console.log(gameName2.trim()); // Remove White Space From Both Start and End
console.log(gameName2.valueOf()); // Default for Displaying Strings.Not Used in General.





// Some Prototype functions of Strings. like .length , .toLowerCase , .Indexof etc.
//These are given in console of browser. lets try some of them.