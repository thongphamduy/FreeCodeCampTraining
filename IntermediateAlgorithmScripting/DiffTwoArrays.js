//Compare two arrays and return a new array 
//with any items only found in one of the two given arrays, 
//but not both. In other words, return the symmetric 
//difference of the two arrays.
//Link to solution: https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-diff-two-arrays/16008

function diffArray(arr1, arr2) {
	var newArr = [];

	var tempArr=arr1.concat(arr2)
	for(var i=0; i<tempArr.length;i++){
		if(!newArr.includes(tempArr[i])){
			newArr.push(tempArr[i])
		} else {
			newArr=newArr.filter(item=>item !== tempArr[i])
		}
	}
	console.log(newArr)
	return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);