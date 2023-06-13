// Write a function that will check whether ANY permutation of the characters of the input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.

// For this kata assume that all characters are lowercase.



function permuteAPalindrome (input) { 
  let arr = input.split('').sort()
  for(let i = 0; arr.length > 1; ) {
    if(arr[i] === arr[i + 1]) arr.splice(0,2)
    else i++
    if(i === 2) return false
  }
  return true;
}