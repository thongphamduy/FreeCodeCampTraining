function spinalCase(str) {
  let spinal = str.replace(/[^A-Za-z0-9]/g,'-').replace(/([a-z])([A-Z])/g,'$1-$2')
  console.log(spinal.toLowerCase())
  return str;
}

spinalCase('AllThe-small Things');
