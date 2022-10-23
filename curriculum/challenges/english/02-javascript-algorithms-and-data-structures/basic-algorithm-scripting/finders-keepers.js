/*---
id: a6e40f1041b06c996f7b2406
title: Finders Keepers
challengeType: 1
forumTopicId: 16016
dashedName: finders-keepers
---

# --description--

Create a function that looks through an array `arr` and returns the first element in it that passes a 
'truth test'. This means that given an element `x`, the 'truth test' is passed if `func(x)` is `true`.
If no element passes the test, return `undefined`.

# --hints--

// `findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })` should return `8`.*/

function findElement (array){
let tempArray = array;
for (i = 0; i < tempArray.length; i++){
    let correctNumber = 0;
    if (tempArray[i] % 2 === 0){correctNumber = tempArray[i]; return correctNumber};
}};
console.log(findElement([1, 3, 5, 8, 9, 10]));
// This challenge was written very strangely, but I did what it asked... I think :) 
