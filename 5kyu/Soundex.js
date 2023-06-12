// In this Kata you will encode strings using a Soundex variation called "American Soundex" using the following (case insensitive) steps:

// Save the first letter. Remove all occurrences of h and w except first letter.
// Replace all consonants (include the first letter) with digits as follows:
// b, f, p, v = 1
// c, g, j, k, q, s, x, z = 2
// d, t = 3
// l = 4
// m, n = 5
// r = 6
// Replace all adjacent same digits with one digit.
// Remove all occurrences of a, e, i, o, u, y except first letter.
// If first symbol is a digit replace it with letter saved on step 1.
// Append 3 zeros if result contains less than 3 digits. Remove all except first letter and 3 digits after it

var soundex = function(names) {
  let arr = names.split(" ");
  arr = arr.map(name => {
    let firstChar = name.charAt(0)
    name = name
      .replace(/^[wh]/i, "0")
      .replace(/[wh]/gi, "")
      .replace(/[bfpv]/gi, "1")
      .replace(/[cgjkqsxz]/gi, "2")
      .replace(/[dt]/gi, "3")
      .replace(/[l]/gi, "4")
      .replace(/[mn]/gi, "5")
      .replace(/[r]/gi, "6")
      .replace(/^0{1,}|1{1,}|2{1,}|3{1,}|4{1,}|5{1,}|6{1,}|[aeoiuy]/i, "")
      .replace(/1{1,}/g, "1")
      .replace(/2{1,}/g, "2")
      .replace(/3{1,}/g, "3")
      .replace(/4{1,}/g, "4")
      .replace(/5{1,}/g, "5")
      .replace(/6{1,}/g, "6")
      .replace(/[aeoiuy]/gi, "")
    name = firstChar.toUpperCase() + name
    if(name.length > 4) name = name.substring(0, 4);
    else if(name.length < 4) name = name + "0".repeat(4 - name.length);
    return name
  })
  return arr.join(" ")
}