// Given an integer product, find the smallest positive integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

function productCalculator(product) {
  for(let i = 9; i > 1; i--) {
    if(product < 10) return product
    if(product % i === 0) {
      return (i + "" + productCalculator(product/i))
    }
  }
  return "-1";
}
function digitsProduct(product) {
  if(product < 10) return +('1'+product)
  let result = productCalculator(product)
  if(result.indexOf("-") !== -1) return -1
  return +result.split("").reverse().join("")
}
