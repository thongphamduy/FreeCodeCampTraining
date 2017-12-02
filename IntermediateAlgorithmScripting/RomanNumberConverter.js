	function convertToRoman(num) {
	var roman=[]
	var x=num
	var value=[1,4,5,9,10,40,50,90,100,400,500,900,1000]
	var symbol=["I","IV","V","IX","X","XL","L","LC","C","CD","D","CM","M"]
	for(var i=value.length-1;i>=0;i--){
		var y=Math.floor(x/value[i])
		if(y !== 0){
			while(y>0){
				roman.push(symbol[i])
				y--
			}
		} 
		x=x%value[i]
	}

 	return roman.join("");
}

console.log(convertToRoman(3999))	