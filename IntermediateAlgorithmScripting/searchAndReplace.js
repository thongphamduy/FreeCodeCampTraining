
function myReplace(str, before, after) {

	let arr = str.split(" ")
	for(let i=0; i<arr.length; i++){
		if(arr[i].toLowerCase() === before.toLowerCase()){
			if(/[A-Z]/.test(arr[i][0])){
				after=after[0].toUpperCase() + after.substr(1)
			} else {
				after=after[0].toLowerCase() + after.substr(1)
			}
			arr[i]=after
		}
	}
	str=arr.join(" ")
	console.log(str)
  return str;
}

myReplace("Let us get back to more Coding", "Coding", "algorithms")