// In a black and white image we can use 1 instead of black pixels and 0 instead of white pixels.

// For compression image file we can reserve pixels by consecutive pixels who have the same color.

// Your task is to determine how much of black and white pixels is in each row sorted by place of those.

function blackAndWhite(height, width, compressed) {
  let result = []
  for(let i = 0; i < height; i++) {
    
    let lineCompression = []
    let pxInLine = width
    while(pxInLine > 0) {
      if(pxInLine > compressed[0]){
        lineCompression.push(compressed[0])
        pxInLine -= compressed[0]
        compressed.shift()
      }
      else {
        lineCompression.push(pxInLine)
        compressed[0] -= pxInLine
        if(lineCompression.length % 2 === 0) compressed.unshift(0)
        else lineCompression.push(0)
        pxInLine = -1
        if(compressed[0] !== 0 || compressed[1] !== 0) continue
        compressed.shift();
        compressed.shift();
      }
    }
    result.push(lineCompression)
  }
  return result
}