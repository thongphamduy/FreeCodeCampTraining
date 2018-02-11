function steamrollArray(arr) {
	let result = []
	function checkArray(arr1){
	 	arr1.map((x)=>{
	 		if(Array.isArray(x)){
	 			checkArray(x)
	 		} else {
	 			result.push(x)
	 		}
	 	})
	}
	checkArray(arr)
	console.log(result)
  return arr;
}

steamrollArray([1, {}, [3, [[4]]]]);