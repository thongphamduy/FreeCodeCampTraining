function sumFibs(num) {
	let fibo = [1,1]
	let fiboSum = 0
	for(let i=1;i<fibo.length;i++){
		let sum = fibo[i]+fibo[i-1]
		if(sum <= num){
			fibo.push(sum)
		}
	}
	fibo.filter(x=>x%2===1).map(x=>fiboSum+=x)
	console.log(fiboSum)
	return fiboSum
}

sumFibs(75025);