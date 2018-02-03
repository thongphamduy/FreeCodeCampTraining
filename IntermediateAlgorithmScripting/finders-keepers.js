function findElement(arr, func) {
  let arr1 = []
  arr1 = arr.filter(func)
  console.log(arr1[0])
}
findElement([1, 3, 5, 9], function(num){ return num % 2 === 0; });
