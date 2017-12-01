//Convert the given number into a ronman numeral. 
//All roman numberal answers should be provided in upper-case

function convertToRoman(num) {
	var arr=[]
	var roman=[1000,500,100,50,10,5,1]
	var key=["M","D","C","L","X","V","I"]
	var arr1=[]
	for(var i=0;i<roman.length;i++){
		var thuong=Math.floor(num/roman[i])
		arr.push(thuong)
		num=num%roman[i]
	}
	console.log(arr)
	for(var i=0;i<arr.length;i++){
		for(var j=0;j<arr[i];j++){
			arr1.push(key[i])
		}
	}

	console.log(arr1.join(""))

	return num
}

convertToRoman(4);
