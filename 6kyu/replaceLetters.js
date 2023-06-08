// In input string word(1 word):
//
// replace the vowel with the nearest left consonant.
// replace the consonant with the nearest right vowel.
// P.S. To complete this task imagine the alphabet is a circle (connect the first and last element of the array in the mind). For example, 'a' replace with 'z', 'y' with 'a', etc.(see below)
//
// For example:
//
// 'codewars' => 'enedazuu'
// 'cat' => 'ezu'
// 'abcdtuvwxyz' => 'zeeeutaaaaa'
// It is preloaded:
//
// const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
// const vowels = ['a','e','i','o','u'];
// P.S. You work with lowercase letters only.
// 

function replaceLetters(word) {
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
  const vowels = ['a','e','i','o','u'];
  let newWord = ""

  const findNearestLetter = (letterIndex, array) => {
    let step = (index) => {
      if(array[0] === vowels[0]) index++
      else index--

      if(index === 26) return 0
      if(index === -1) return 25
      return index
    }
    while(true) {
      letterIndex = step(letterIndex)
      if(array.some(e => e === alphabet[letterIndex])) return alphabet[letterIndex]
    }
  }

  for(let i = 0; i < word.length; i++) {
    const letter = word.charAt(i)
    const letterIndex = alphabet.indexOf(letter)
    const array = vowels.some(e => e === letter) ? consonants : vowels
    newWord += findNearestLetter(letterIndex, array)
  }
  return newWord
}
