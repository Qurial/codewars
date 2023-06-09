// Given the following algorithm (Collatz conjecture):

//   If number x is even, x = x / 2
//   else if x is odd, x = x * 3 + 1
// Find all the possible numbers(x) which resolve to a specified number (y) when the algorithm is applied a specified number of times (n).

// Sort the results in ascending order.

function reversalCollatz(step,y){
  let array = []
  for(let i = 0; i < Math.pow(2, step); i++){
    let sequencing = [...(i.toString(2))].reverse().join("")
    let num = y
    for(let j = 0; j < step; j++) {
      if(!sequencing.charAt(j)) num = (num - 1)/3;
      else if(sequencing.charAt(j) === "1") num = num * 2;
      else num = (num - 1)/3;
    }
    if(num > 0 && num === Math.floor(num) && !array.some(e => e === num)) array.push(num)
    else continue;
    let verificationNum = num
    for(let j = 0; j < step; j++) {
      
      if(verificationNum % 2 === 0) verificationNum = verificationNum / 2;
      else verificationNum = verificationNum * 3 + 1
    }
    if(verificationNum !== y)array.pop()
  }
  return array.sort((a,b) => a - b)
}
