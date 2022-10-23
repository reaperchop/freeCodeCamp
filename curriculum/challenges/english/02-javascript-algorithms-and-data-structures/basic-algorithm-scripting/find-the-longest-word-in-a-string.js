const { count } = require("console");
const { arrayBuffer } = require("stream/consumers");

/* ---
id: a26cbbe9ad8655a977e1ceb5
title: Find the Longest Word in a String
challengeType: 1
forumTopicId: 16015
dashedName: find-the-longest-word-in-a-string
---

# --description--

Return the length of the longest word in the provided sentence.

Your response should be a number.

# --hints--

`findLongestWordLength("The quick brown fox jumped over the lazy dog")` should return a number.*/
let sentence = "The quick brown fox jumped over the lazy dog";
function findLongestWord (sentence) {
    let newSentence = sentence.trim().split(" ");
    let longestWord = 0;
for(i = 0; i < newSentence.length; i++){
    if( newSentence[i].length > longestWord){
longestWord = newSentence[i].length;
    }
}return longestWord;
};

console.log(findLongestWord(sentence));

// This took a lot of back and forth before I had to look it up. Funny enough I had tried this method but
// deleted it as I didn't realise the code would know to start counting for .length after a space in a string.
