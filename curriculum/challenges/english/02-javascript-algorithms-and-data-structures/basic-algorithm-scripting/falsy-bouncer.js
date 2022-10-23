/*---
id: adf08ec01beb4f99fc7a68f2
title: Falsy Bouncer
challengeType: 1
forumTopicId: 16014
dashedName: falsy-bouncer
---

# --description--

Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are `false`, `null`, `0`, `""`, `undefined`, and `NaN`.

Hint: Try converting each value to a Boolean.

# --hints--

`bouncer([7, "ate", "", false, 9])` should return `[7, "ate", 9]`.*/

function bouncer (array) {
let tempArray = array;
for (i = 0; i <tempArray.length; i++){
    if(tempArray[i] == "" ||tempArray[i] ==  true ||tempArray[i] ==  false ||tempArray[i] ==  null ||tempArray[i] ==  0 ||tempArray[i] ==  `undefined` ||tempArray[i] ==  `NaN`){
        delete tempArray[i]};
                }console.log(tempArray);
};
bouncer([7, "ate", "", false, 9]);
// This method technically works, but outputs [7, 'ate', <2 empty items>, 9], which isn't exactly right

let easyWayArray = [7, "ate", "", false, 9];
let easyWay = easyWayArray.filter(x => x);
console.log(easyWay);
// This method is a GODsend that basically enacts a small function within the .filter statement to only 
// return true regular values in the array
// this one was complicated and unnecessarily so. Definitely understand the annoyances with coding nuances.
