
function pairElement(str) {

	let splitedStr = str.split("")
	let arr=[]
	for(let ele of splitedStr){
		ele = new Array(ele)
		arr.push(ele)
	}
	for(let ele of arr){
		switch(ele[0]){
			case 'A':
				ele.push('T')
				break
			case 'T':
				ele.push('A')
				break
			case 'G':
				ele.push('C')
				break
			case 'C':
				ele.push('G')
				break
			default:
				console.log('unknown')
				break
		}
	}
	console.log(arr)
  return arr;
}

pairElement("CTCTA");
