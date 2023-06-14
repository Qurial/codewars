// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

snail = function(array) {
  if(array[0].length === 0) return []
  
  let resultString = '';
  let arrLength = Math.ceil(array.length/2)
  for(let i = 0; i < arrLength ; i++) {
    if(array[0].length === 1) {
      resultString += array[0];
      continue;
    }
    if(array[0].length === 2) {
      resultString +=
        array[0][0] + "." + 
        array[0][1] + "." + 
        array[1][1] + "." + 
        array[1][0];
      continue;
    }
    
    resultString += array[0].join('.') + "."
    array.shift()
    
    array.map(subArr => {
      resultString += subArr[subArr.length - 1] + '.'
      subArr.pop()
    })
    
    resultString += array[array.length - 1]?.reverse().join('.') + "."
    array.pop()
    
    array.map((val, index, arr) => {
      let subArr = arr[arr.length - 1 - index]
      resultString += subArr[0] + '.'
      subArr.shift()
    })
  }
  return resultString.split('.').map(item => +item)
}