function fearNotLetter(str) {
	let arr=str.split("")
	let firstCharCode = str.charCodeAt(0)
	let result =undefined
	for(let i=0;i<str.length;i++){
		let charFromCode = String.fromCharCode(i+firstCharCode)
		if(arr[i]!==charFromCode){
			arr.splice(i,0,charFromCode)
			result=charFromCode
		}
	}
	console.log(result)
  return str;
}

fearNotLetter("abce");
