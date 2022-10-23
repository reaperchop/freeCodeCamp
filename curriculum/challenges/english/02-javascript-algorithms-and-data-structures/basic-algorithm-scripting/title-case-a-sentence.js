/*---
id: ab6137d4e35944e21037b769
title: Title Case a Sentence
challengeType: 1
forumTopicId: 16088
dashedName: title-case-a-sentence
---

# --description--

Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like `the` and `of`.
# --hints--

`titleCase("I'm a little tea pot")` should return a string.*/

let sentence = "I'm a little tea pot";
function titleCase (sentence) {
    let newSentence = sentence.trim().split(" ");
    for (i = 0; i < newSentence.length; i++){
        newSentence[i] = newSentence[i].charAt(0).toUpperCase() + newSentence[i].slice(1);
    }
    let finalSentence = newSentence.join(" ");
    return finalSentence;
};

console.log(titleCase(sentence));
// Kinda Cheated with this one, but only because I knew there'd be new syntax and statements to use. 
//                                      Study this :)