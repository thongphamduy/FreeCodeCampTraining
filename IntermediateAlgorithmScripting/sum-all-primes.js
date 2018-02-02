function sumPrimes(num) {
	let primeList = []
	let sum=0
	for(let i=2;i<=num;i++){
		let isPrime = true
		for(let j=1;j<=Math.sqrt(i);j++){
			if(i%j === 0 && j>1){
				isPrime = false
				break
			}
		}
		if(isPrime){
			primeList.push(i)
		}
	}
	sum = primeList.reduce((a,b)=>a+b,0)
	console.log(sum)
  return num
}

sumPrimes(10);
