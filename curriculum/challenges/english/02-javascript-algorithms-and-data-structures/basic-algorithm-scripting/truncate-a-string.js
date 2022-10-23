/*---
id: ac6993d51946422351508a41
title: Truncate a String
challengeType: 1
forumTopicId: 16089
dashedName: truncate-a-string
---

# --description--

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a `...` ending.

# --hints--

`truncateString("A-tisket a-tasket A green and yellow basket", 8)` should return the string `A-tisket...`.*/
function truncateString (string, length){
    let a = string.trim().split("");
    let n = length;
    let b = [ ];
    let i = 0;
while (i < n){b.push(a[i]); i++};
b = b.join("");
return (b + "...")};
let c = truncateString("A-tisket a-tasket A green and yellow basket", 12);
console.log(c);
// Another one bites the dust with no googling! :) 