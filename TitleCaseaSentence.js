// Bonfire: Title Case a Sentence
/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.charAt()
*/
function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(' ');
  for (var i in str) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].substr(1);
    }
    str = str.join(' ');
    return str;
}

