function downToOne(n) {
  const list = [];

  for (let i = n; i > 0; --i) {
    list.push(i);
  }

  return list;
}

console.log(downToOne(5))
  //=> [ 5, 4, 3, 2, 1 ]