// Given two words, how many letters do you have to remove from them to make them anagrams?

function anagramDifference(w1,w2){
  let sumOfChars = w1.length + w2.length
  for(let i = 0; i < w1.length; i++) {
    if(w2.indexOf(w1[i]) === -1) continue;
    let charIndex = w2.indexOf(w1[i])
    w2 = w2.slice(0, charIndex) + w2.slice(charIndex + 1)
    sumOfChars -= 2
  }
  return sumOfChars
}