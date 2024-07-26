//Fiter A function that accepts up to three arguments. 

//The filter method calls the predicate function one time for each element in the array.

//Returns the elements of an array that meet the condition specified in a callback function

//for each does not return values

//Filter return values

const anyNumber = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// const evNum = anyNumber.filter( (num) =>{
//     return num > 7; // return  number greater then 7

// });

// console.log(evNum); //print evNum to check the result of filter function

//Now lets do the same with  for Each loop

newNum = [];

anyNumber.forEach( (num) => {
    if (num > 7)
    {
        newNum.push(num);
    }
});

// console.log(newNum); //works same as filter but we have to add condition and push in new array.

//Advantages of filter 

const books = [
    {
        title: "Book One", genra:"Fiction" ,publish:1981,edition:2004
    },
    {
        title: "Book TWo", genra:"Fiction" ,publish:1985,edition:2002
    },
    {
        title: "Book Three", genra:"History" ,publish:1945,edition:1970
    },
    {
        title: "Book Four", genra:"Science" ,publish:1996,edition:2012
    },
    {
        title: "Book Five", genra:"Non-Fiction" ,publish:1990,edition:2009
    },
    {
        title: "Book Six", genra:"Comic" ,publish:2005,edition:2020
    },
    {
        title: "Book Seven", genra:"History" ,publish:2000,edition:2016
    },
    {
        title: "Book Eight", genra:"Fiction" ,publish:1978,edition:1999
    },
    {
        title: "Book Nine", genra:"Fiction" ,publish:1971,edition:2006
    },
    {
        title: "Book Ten", genra:"Non-Fiction" ,publish:1999,edition:2010
    },
];

const customerBooks = books.filter( (book)=>{
    // return (book.genra==="Fiction" && book.publish > 1980 || book.genra==="Science");
});

// console.log(customerBooks);

//Map Method map()

const myNum = [1,2,3,4,5,6,7,8,9,10];

// const nunSum = myNum.map( (numb) => {
    // return (numb + 10) * 2 ; //give array with every vlae is multiplyed by 2.
// });

// console.log(nunSum);

// we can apply map() on the expression having map or filter or any other method 

// like myNum.map().map() etc.

const numSum = myNum.map( (numb) => numb + 5).map( (numb) => numb * 3).filter( (numb) => numb > 20) 

// first map() applied on each(numb) value of array and add 5 and then on this updated array 
// second map() is applied that multily each updated value by 2 and then on this updated array
// fiter() is applied and filter value grater then 15.

console.log(numSum);

