	function convertToRoman(num) {
	var roman=[]
	var value=[1,4,5,9,10,40,50,90,100,400,500,900,1000]
	var symbol=["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"]
	for(var i=value.length-1;i>=0;i--){
	// 	var y=Math.floor(num/value[i])
	// 	if(y !== 0){
	// 		while(y>0){
	// 			roman.push(symbol[i])
	// 			y--
	// 		}
	// 	} 
	// 	num=num%value[i]
	// }
		while (num-value[i]>=0) {
			roman.push(symbol[i])
			num=num-value[i]
		}
	}
 	return roman.join("");
}

console.log(convertToRoman(3999))	