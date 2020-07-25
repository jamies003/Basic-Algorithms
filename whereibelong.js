function sortNumber(a,b){
  return a - b
}
function getIndexToIns(arr, num) {
let result = 0;
// Find my place in this sorted array.
arr = arr.sort(sortNumber)
for(let i=0; i < arr.length; i++){
   if(arr[i] < num){
      result = i + 1
   }else if(arr[i] === num){
      result = i;
   }

  }

return result    


}
console.log(getIndexToIns([2, 20, 10], 19))