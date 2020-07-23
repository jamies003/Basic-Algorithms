function mutation(arr) {

  let arr2 = arr[1].toLowerCase() ;
  let arr3 = arr[0].toLowerCase();

  for (var i = 0; i < arr2.length; i++) {

    if (arr3.indexOf(arr2[i]) < 0) 
    return false;
  }
  return true;
}

mutation(["hello", "hey"]);
