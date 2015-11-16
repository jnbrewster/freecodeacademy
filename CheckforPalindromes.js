//Bonfire: Check for Palindromes
/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

You'll need to remove punctuation and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

String.replace()
String.toLowerCase()

*/
function palindrome(str) {
  var stripString = str.toString().toLowerCase().replace(/[.,-\W|\s/#!$%\^&\*;:{}=\-_`~()]/g,"");
  var checkString = stripString.split('').reverse().join(''); {

    if (stripString === checkString) {
      return true;
    }
    else {
      return false;
    }
  }
}

/*
//This took way too long!
palindrome("0_0 (: /-\ :) 0-0") should return true.
*/
