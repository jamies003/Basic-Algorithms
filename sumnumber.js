function sumAll(arr) {
  let sum = 0;

  for (let i = Math.min(...arr); i <= Math.max(...arr); i++){
    sum += i;

    // console.log(...arr)

  }
  return sum;
}
console.log(sumAll([1, 4]));
// sumAll([1,4]);
