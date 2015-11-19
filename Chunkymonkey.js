//Bonfire: Chunky Monkey
/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.

Array.push()
*/

function chunk(arr, size) {
  var newArray = [];

  for (var i = 0; i <= arr.length; i++) {
    newArray.push(arr.splice(0, size));
  }
  // Break it up.
  return newArray;
}

chunk(["a", "b", "c", "d"], 2);

