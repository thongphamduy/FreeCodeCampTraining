function uniteUnique(...args) {
	let arr=[]
	for(let i=0;i<arguments.length;i++){
		for(let j=0;j<arguments[i].length;j++){
			if(arr.indexOf(arguments[i][j]) === -1){
				arr.push(arguments[i][j])
			}
		}
	}
	console.log(arr)
}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])