//Reduce Method
//A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
// Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result,
// and is provided as an argument in the next call to the callback function.
 
const numb = [1,2,3,4,5];

const sumNum = numb.reduce( (acc,crvalue) =>{
    // console.log(`Accumalator vlaue ${acc} and Current Value is ${crvalue}`);
    return acc * crvalue;
},1);

console.log(sumNum);

// Working with Object in Array

const shopingCart = [
    {
        itemName: "js course",
        price:1999
    },
    {
        itemName: "java course",
        price:2999
    },
    {
        itemName: "data analyst course",
        price:5999
    },
    {
        itemName: "android  dev course",
        price:3999
    },
];

const totalPrice = shopingCart.reduce( (acc,item) => {
    return acc + item.price ;
},0)

console.log(totalPrice);
