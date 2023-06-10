// Return a list of all numbers that have no more than n bits, such that exactly k of them are set to 1.

// Input/Output
// [input] integer n

// The maximum number of bits the number can have.

// 1 ≤ n ≤ 20.

// [input] integer k

// The number of bits equal to 1.

// 0 ≤ k ≤ 20.

// [output] an integer array

// The numbers with at most n bits k of which are set to 1 sorted in ascending order

function kBitsDigits(n, k) {
  let array = []
  for(let i = Math.pow(2, k) - 1; i < Math.pow(2, n); i++) {
    if(i.toString(2).replace(/0/g, '').length === k) array.push(i)
  }
  return array
}