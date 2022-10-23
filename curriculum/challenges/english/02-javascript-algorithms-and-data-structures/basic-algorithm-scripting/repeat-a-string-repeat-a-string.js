const { sep } = require("path");
const { stringify } = require("querystring");

/*---
id: afcc8d540bea9ea2669306b6
title: Repeat a String Repeat a String
challengeType: 1
forumTopicId: 16041
dashedName: repeat-a-string-repeat-a-string
---

# --description--

Repeat a given string `str` (first argument) for `num` times (second argument). 
Return an empty string if `num` is not a positive number. For the purpose of this challenge, 
do *not* use the built-in `.repeat()` method.

# --hints--

`repeatStringNumTimes("*", 3)` should return the string `***`.*/

function repeatingString(string, number){
    let a = "";
    let n = number;
    while (n > 0){
     a += string + " ";
     n--
    }return (a);
}
console.log(repeatingString("nice", 4));
// This one annoyed me, but I learnt how to do it. It's often simpler than I try to make it. 