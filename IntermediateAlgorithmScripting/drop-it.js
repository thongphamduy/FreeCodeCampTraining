
function dropElements(arr, func) {
  // Drop them elements.
  for(let item of arr){
  	if(!func(item)){
  		arr = arr.slice(1)
  	} else {
  		break
  	}
  }
  console.log(arr)
  return arr;
}

dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})