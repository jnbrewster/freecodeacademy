//Bonfire: Truncate a string
/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a "..." ending.

Note that the three dots at the end add to the string length.

If the length of the string is less than or equal to 3 characters, then the length of the three dots is not added to the string length.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

String.slice()
*/
function truncate(str, num) {
  if (num <= 3) {
    return str.slice(0, num) + '...';
  }
  else if (str.length > num) {
    return str.slice(0, num - 3) + '...';
  }
  else {
    return str;
  }
}

truncate("A-tisket a-tasket A green and yellow basket", 11);

