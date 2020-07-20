function getIndexToIns(arr, num) {

  var sorted = 0;

  for (var i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      sorted++;
    }
  } 
  return sorted; 
}

getIndexToIns([40, 60], 50);