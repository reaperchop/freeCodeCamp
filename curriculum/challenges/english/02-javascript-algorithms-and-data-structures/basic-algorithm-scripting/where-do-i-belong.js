/*---
id: a24c1a4622e3c05097f71d67
title: Where do I Belong
challengeType: 1
forumTopicId: 16094
dashedName: where-do-i-belong
---

# --description--

Return the lowest index at which a value (second argument) should be inserted into an array (first argument)
once it has been sorted. The returned value should be a number.
For example, `getIndexToIns([1,2,3,4], 1.5)` should return `1` because it is greater than `1` (index 0),
but less than `2` (index 1).
Likewise, `getIndexToIns([20,3,5], 19)` should return `2` because once the array has been sorted it will
look like `[3,5,20]` and `19` is less than `20` (index 2) and greater than `5` (index 1).

# --hints--

`getIndexToIns([10, 20, 30, 40, 50], 35)` should return `3`.*/

function getIndexToIns (array, value){
    let a = array;
    let b = a.sort(function(x, y){return x - y}) 
    let n = value;
    for(i = 0; i < (b.length + 1); i++){
        if(n > b[i] && n < b[i + 1]){
            return (i + 1)} else if (i == b.length){
                return b.length}
            else if (n === b[i]){return i}}};
z = getIndexToIns([10, 20, 30, 40, 50], 40);
console.log(z);
// No Googling, no wrong avenues taken. A great finish :) 