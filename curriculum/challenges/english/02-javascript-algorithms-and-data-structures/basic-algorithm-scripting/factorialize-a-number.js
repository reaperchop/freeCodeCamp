/* ---
id: a302f7aae1aa3152a5b413bc
title: Factorialize a Number
challengeType: 1
forumTopicId: 16013
dashedName: factorialize-a-number
---

# --description--

Return the factorial of the provided integer.

If the integer is represented with the letter `n`, a factorial is the product of all positive integers less than or equal to `n`.

Factorials are often represented with the shorthand notation `n!`

For example: `5! = 1 * 2 * 3 * 4 * 5 = 120`

Only integers greater than or equal to zero will be supplied to the function.

# --hints--

`factorialize(5)` should return a number.*/

function factorialise (value){
    let anArray = [];
let i = value;
while (i > 0){
    anArray.push(i); i--
};
let product = anArray.reduce((a, b) => a * b);
console.log(product);
};
factorialise(5);
// This was definitely more challenging, but once you get all the numbers into an array, the 
//'.reduce((a,b) => a *b)' appendix can be used to multiply all elements in an array. 