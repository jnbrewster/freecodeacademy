//Bonfire: Where do I belong
/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.

For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, where([20,3,5], 19) should return 2 because it is less than 20 (index 2) and greater than 5 (index 1).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Array.sort()
*/
function where(arr, num) {
  var counter = 0;

  for (var i = 0; i < arr.length; i++) {
   if (arr[i] - num < 0) {
     counter++;
    }
  }
  return counter;
}

//OR
//Below, I originally had this but it doesn't work. Need to figure out why at a later stage.

function where(arr, num) {
  arr.sort();
  for (var i = 0; i < arr.length; i++) {
   if (arr[i] >= num) {
    return i;
    }
  }
}


where([10, 20, 30, 40, 50], 35); //PASS
where([10, 20, 30, 40, 50], 30); //PASS
where([40, 60,], 50);            //PASS
where([5, 3, 20, 3], 5);         //FAIL
where([2, 20, 10], 19);          //PASS
where([2, 5, 10], 15);           //FAIL
