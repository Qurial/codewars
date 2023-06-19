// Write a function that generates factors for a given number.

// The function takes an integer as parameter and returns a list of integers (ObjC: array of NSNumbers representing integers). That list contains the prime factors in numerical sequence.



function primeFactors(n) {
  for(let i = 2; i <= n; i++) {
    if(n % i === 0) return primeFactors(n/i).concat([i]).sort((a,b) => a - b)
  }
	return [];
}