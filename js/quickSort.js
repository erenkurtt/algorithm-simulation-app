
function quickSort(arr) {
  console.log(arr);

  if (arr.length < 2) {
    return arr;
  }
  
  const pivot = arr[Math.floor(Math.random() * arr.length)];
  console.log(pivot);

  let left = [];
  let right = [];
  let equal = [];

  for (let val of arr) {
    if (val < pivot) {
      left.push(val);
    } else if (val > pivot) {
      right.push(val);
    } else {
      equal.push(val);
    }
  }
  return [
    ...quickSort(left),
    ...equal,
    ...quickSort(right)
  ];
}

let arr = [16, 15, 46, 2, 54, 6, 16, 98, 67, 103];

console.log(quickSort(arr));
