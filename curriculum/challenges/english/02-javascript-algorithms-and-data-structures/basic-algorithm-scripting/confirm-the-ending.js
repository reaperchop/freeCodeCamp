/* ---
id: acda2fb1324d9b0fa741e6b5
title: Confirm the Ending
challengeType: 1
forumTopicId: 16006
dashedName: confirm-the-ending
---

# --description--

Check if a string (first argument, `str`) ends with the given target string (second argument, `target`).

This challenge *can* be solved with the `.endsWith()` method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

# --hints--

`confirmEnding("Bastian", "n")` should return `true`.*/

function checkEndOfString(str, target) {
        if(str[str.length - 1] === target){
        return `true`;
    }else{
        return `false`};
};
console.log(checkEndOfString("cable", "e"));
//This one was nice and easy :) 