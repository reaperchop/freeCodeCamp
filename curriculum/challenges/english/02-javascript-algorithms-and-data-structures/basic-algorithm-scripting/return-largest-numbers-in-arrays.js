/*---
id: a789b3483989747d63b0e427
title: Return Largest Numbers in Arrays
challengeType: 1
forumTopicId: 16042
dashedName: return-largest-numbers-in-arrays
---

# --description--

Return an array consisting of the largest number from each provided sub-array. For simplicity, 
the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array 
syntax `arr[i]`.

# --hints--

`largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])`
 should return an array.*/

 function largestOfFour(array) {
    let a = array.flat(1);                              //flattens the array to 1 level deep
    b = a.sort(function(x, y){return y - x});           // The function bypasses the issue of 'sort' thinking 35 is higher than 100, for example.
    c = [ ];
    c.push(b[0]);
    c.push(b[1]);
    c.push(b[2]);
    c.push(b[3]);
    return c;
 }
z = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(z);
//This one was a lot easier and more predictable. I thought there would be a nicer way to do it though. 
