//Compare two arrays and return a new array 
//with any items only found in one of the two given arrays, 
//but not both. In other words, return the symmetric 
//difference of the two arrays.

function diffArray(arr1, arr2) {
  var newArr = [];
  var newArr1=[]
  var newArr2=[]

  for(var i=0;i<arr1.length;i++){
  	var i2=arr2.indexOf(arr1[i])
  	if(i2 !== -1){
  		newArr1.push(arr1.slice(i, i+1))
  		newArr2.push(arr2.slice(i2, i2+1))
  	}
  }  
  newArr=newArr2.concat(newArr1)
  console.log(newArr)
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);