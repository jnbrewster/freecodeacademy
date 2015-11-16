//Bonfire: Find the Longest Word in a String
/*
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

String.split()
String.length

*/
function findLongestWord(str) {
  var arrayOfStrings = str.split(' ');
  var longestString = '';

  for (var i = 0; i < arrayOfStrings.length; i++) {
    if (longestString.length < arrayOfStrings[i].length) {
    longestString = arrayOfStrings[i];
    }
  }
  str = longestString;
  return str.length;

}
findLongestWord("The quick brown fox jumped over the lazy dog");



