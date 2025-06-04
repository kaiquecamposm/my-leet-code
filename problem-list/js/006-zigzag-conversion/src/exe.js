/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function(s, numRows) {
  let matrix = []

  for (let x = 0; x < s.length; x++) {
    let row = []

    for (let y = 0; y < numRows; y++) {
      row.push(s[x])
    }

    matrix.push(row)    
  }

  console.log(matrix)  
}
 
convert('PAYPALISHIRING', 3)