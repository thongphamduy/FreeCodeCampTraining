
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  let sourceKeys = Object.keys(source)
  console.log(sourceKeys)
  let arr = collection
  for(let item of sourceKeys){
  	arr = arr.filter(obj=>{
  		return (obj.hasOwnProperty(item) && obj[item] == source[item])
  	})
  }  
  // Only change code above this linbe
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 })