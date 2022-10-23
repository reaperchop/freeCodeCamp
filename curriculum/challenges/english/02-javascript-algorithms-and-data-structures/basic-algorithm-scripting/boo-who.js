/*---
id: a77dbc43c33f39daa4429b4f
title: Boo who
challengeType: 1
forumTopicId: 16000
dashedName: boo-who
---

# --description--

Check if a value is classified as a boolean primitive. Return `true` or `false`.

Boolean primitives are `true` and `false`. */

function checkBoolean (value) {
    if(value === true) {
        return `true`}
        else if(value === false){return `true`}
        else {return false};
};

console.log(checkBoolean(true));
console.log(checkBoolean(false));
//Both should return `true`
