/*---

# --description--

You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index `n` of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

# --hints--

`frankenSplice([1, 2, 3], [4, 5], 1)` should return `[4, 1, 2, 3, 5]`.*/ 
// clearly, from above, the index means that the second array doesn't start at position 0 in this case. Weird

function frankenSplice (array1, array2, index){
    let a = array1;
    let b = array2;
    let x = index;
let intermediateArray = b.slice(0, x);
let slicedBits = b.splice(x, intermediateArray.length);
for(i = 0; i < a.length; i++){
intermediateArray.push(a[i])};
intermediateArray.splice((intermediateArray.length), 0, slicedBits);
let finalArray = intermediateArray.flat(1); 
return finalArray};
let z = frankenSplice([1, 2, 3, 4, 5], [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 6);
console.log(z);
// In the Words of all coders everywhere, if it works, it doesn't matter how you got there :)
//                          All of this without googling