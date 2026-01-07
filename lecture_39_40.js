//*****lecture 39 40****

//*******level-1**********
//IIFE function
/*
(function(){
    console.log("I run instantly");
}
)();
*/

//nested function
/*
function print(){
    let a = 5;
    function child(){
        console.log(a);  
    }
    child();
}

print();
*/

//array addition and deletion
//push se last mei add hoga, unshift se start mei.
// pop last mei remove karega,shift se start mei.
/*
let arr = ["a","b","c","d","e"];
arr.push("f");
arr.unshift("0");
console.log(arr);

arr.pop();
arr.shift();
console.log(arr);
*/

//object
/*
let obj = {
    name:"vishwa",
    age : 21,
    city : "Ajmer"
}

for(let i in obj){
    console.log(obj[i]);
}
*/

//setTimeout()
/*
setTimeout(function(){
    console.log("time's up!");
},1000)
*/

//===========level-2=========

// # day -41 - JavaScript Questions

// ## **1. Higher-Order Function**
// Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.

/*
function runTwice(fn){
    fn();
    fn();
}

runTwice(function (){
   console.log("hello"); 
   console.log("world"); 
});
*/

// ---

// ## **2. Pure & Impure Functions**
// Create one pure function that always returns the same output for a given input, and one impure function using a global variable.
/*
let a=5;
function pure(a){
    console.log(a+10);
}
pure(a);
pure(a);
let t=0
function impure(a){
    t+=a;
    console.log(t);
}
impure(a);
impure(a);
*/

// ---

// ## **3. Object Destructuring**
// Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.

/* 
function abc({name,age}){
    console.log(name,"-",age);
}
abc({name:"vishwa",age:21});

 */

// ---

// ## **4. Normal Function vs Arrow Function (this Issue)**
// Demonstrate the difference between a normal function and an arrow function when used as object methods.

/* 
let obj={
    name:"vishwa",
    func: function (){
        console.log(this);
    },
    func2:()=>{
        console.log(this);
    }
};
obj.func2(); 
obj.func();
 */

// ---

// ## **5. map() Task**
// Given an array of numbers, use `map()` to create a new array where each number is squared.

/* 
let arr=[1,2,3,4,5,6];
let newarr = arr.map(function (i){
    return i*i;
}
);
console.log(newarr);
 */

// ---
// ## **6. filter() & reduce() Tasks**
// * Use `filter()` to get only even numbers from an array.
// * Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.

/* 
let arr=[1,2,4,5,7,4,3,8,10];
arr=arr.filter(function (val){
    return val%2===0;
}
);
console.log(arr);

let arr2 = [1000,2000,3000];
let ans = arr2.reduce(function (acc,val){
    return acc+val;
}
)
console.log(ans);
 */

// ---

// ## **7. some() & every() Task**
// Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 characters).

/* 
let name=["vish","charmei","om"];
let ans = name.every(function (val){
    return val.length>3;
}
);
console.log(ans);
 */

// ---

// ## **8. Object.freeze() & Object.seal()**
// Create an object `user` and test the behavior of `Object.freeze()` and `Object.seal()` by adding/changing keys.





// ---

// ## **9. Nested Object Access**
// Create a nested object (`user → address → city`) and access the city name inside it.
// Displaying day 41 Questions.md.