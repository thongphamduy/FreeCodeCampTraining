function spinalCase(str) {
  let spinal = str.replace(/[^A-Za-z]/g,'-').split("")
  for(let i=1;i<=spinal.length-1;i++){
  	if(spinal[i] !== '-' && /[A-Z]/.test(spinal[i+1])){
  		spinal.splice(i+1,0,'-')
  	}
  }
  console.log(spinal.join("").toLowerCase())
  return str;
}

spinalCase('AllThe-small Things');
