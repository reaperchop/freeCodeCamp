/* ---
id: a9bd25c716030ec90084d8a1
title: Chunky Monkey
challengeType: 1
forumTopicId: 16005
dashedName: chunky-monkey
---

# --description--

Write a function that splits an array (first argument) 
into groups the length of `size` (second argument) and returns them as a two-dimensional array.

# --hints--

`chunkArrayInGroups(["a", "b", "c", "d"], 2)` should return `[["a", "b"], ["c", "d"]]`. */

/*function sliceTry (array, size){
   let a = array;
   let b = a % size
   if (b = 0){ //this means, if there is no remainder
 for(c = a.slice(0, (array.length/size)); a = []; c =+ a.slice(c.length, a.length/size) ){
    return c;
 }}
 else{for(d = 0; d = b; d++){
    e = a.pop();
 }{for(c = a.slice(0, (array.length/size)); a = []; c =+ a.slice(c.length, a.length/size) ){
    return c;}{e + c}}
   }};
console.log(sliceTry([1, 2, 3, 4, 5, 6], 3)); 
This script won't work without lodash so I can't test it. the idea behind it
is that it will first test for a remainder, if there is no remainder, it will perform an 'if' loop 
decalring a value of 'c' that removes the first chunk of the array using the .slice function, and then
repeats every iteration by using another slice statement starting from where the last left off. 
... it's a mess that won't work at all. a 'while' statement may actually work better. i-e: slice size off the
beginning of array until array is empty, starting each iteration at the length of the previous... clever thinking
but poor execution on this occasion. but all in all this is a positive. 
*/

//The name 'Chunky Monkey clearly denotes that a 'chunk' statement should be used. 'chunk' statements do not
// get used directly, instead there is a .splice statement that will slice and splice an array based on the 
//starting position and size. See Below:

function chunkyMonkey (array, size){
   while (array.length > (array.length/size)){
      let temporaryArray;
      temporaryArray = array.splice(0, size);
      console.log(temporaryArray);
   }
};
chunkyMonkey([1, 2, 3, 4, 5, 6], 3);