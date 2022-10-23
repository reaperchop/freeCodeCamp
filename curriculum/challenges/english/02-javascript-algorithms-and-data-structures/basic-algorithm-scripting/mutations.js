/*---
id: af2170cad53daa0770fabdea
title: Mutations
challengeType: 1
forumTopicId: 16025
dashedName: mutations
---

# --description--

Return `true` if the string in the first element of the array contains all of the letters of the string in
the second element of the array. For example, `["hello", "Hello"]`, should return `true` because all of the
letters in the second string are present in the first, ignoring case. 
The arguments `["hello", "hey"]` should return `false` because the string `hello` does not contain a `y`.
Lastly, `["Alien", "line"]`, should return `true` because all of the letters in `line` are present in `Alien`.

# --hints--

`mutation(["hello", "hey"])` should return `false`.*/

function mutation (word1, word2) {
    let a = word1.trim().split("").sort().join();
    let b = word2.trim().split("").sort().join();
    if (b == a) {return true}
    else {return false}}

   console.log(mutation("dog", "god"));

   // This was a little sly, but the tactic used here is clever. the 'sort' statement here is the key. 