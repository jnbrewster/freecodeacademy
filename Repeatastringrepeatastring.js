//Bonfire: Repeat a string repeat a string
/*
Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global String Object
*/

function repeat(str, num) {
  var container = "";

  if (num < 0) {
    return "";
  } else {

    for (var n = 0; n < num; n++ ) {
      container += str;
    }
    return container;
  }
}

repeat("abc", 3);



