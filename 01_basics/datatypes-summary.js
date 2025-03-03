// Primitive datatypes
// String, Number, Boolean, Null, Undefined, Bigint, Symbol

const score = 100;
const scoreValue = 100.8;

const isloggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId);

const bigNumber = 473648844386489988345n;
// console.log(typeof(bigNumber));


// Reference or Non-Primitive dataypes 
// Array, Objects, Functions, 

const heros = ["Shaktiman", "Junior G", "Doga"];
// console.log(heros);
// console.log(heros[0]);

const marvel = {
    name : "Ankit",
    age : 20,
    country : "India"
};
// console.log(marvel);
// console.log(marvel.name);


console.log("Score type is " + typeof(score));
console.log("ScoreValue type is " + typeof(scoreValue));
console.log("isloggedIn type is " + typeof(isloggedIn));
console.log("outsideTemp type is " + typeof(outsideTemp));
console.log("userEmail type is " + typeof(userEmail));
console.log("id type is " + typeof(id));
console.log("bigNumber type is " + typeof(bigNumber));
console.log("bigNum type is " + typeof(bigNum));
