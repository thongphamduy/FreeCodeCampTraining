//We'll pass you an array of two numbers. Return the sum of those two
// numbers and all numbers between them.
//The lowest number will not always come first.

function sumAll(arr) {
  var min=Math.min(...arr)
  var max=Math.max(...arr)

  var tempArr=[]
  for(var i=min; i<=max;i++){
  	tempArr.push(i)
  }
  console.log(tempArr)
  var result= tempArr.reduce((sum,current)=>
  	sum+current)
return result
}

//var a=sumAll([10, 4]);
console.log(sumAll([11, 4]))