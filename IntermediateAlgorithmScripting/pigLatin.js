
function translatePigLatin(str) {

	if(/[aeiou]/.test(str[0])){
		str=str.concat("way")
		console.log(str)
		return str
	}
	for(let char of str){
		if(/[aeiou]/.test(char)){
			break
		}
		str=str.substr(1).concat(str[0])
	}
	str=str.concat("ay")
	console.log(str)
  return str;
}

translatePigLatin("eight");
