/*---
id: a202eed8fc186c8434cb6d61
title: Reverse a String
challengeType: 1
forumTopicId: 16043
dashedName: reverse-a-string
---

# --description--

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

# --hints--

`reverseString("hello")` should return a string.*/

function reverseString (string) {
    let a = string.trim().split("");
    let b = [ ];
    for(i = (a.length - 1); i >= 0; i--){
        b += a[i];}
        return b;}
c = reverseString("I did it!");
console.log(c);
// Did this one well quick, didn't look a thing up :)