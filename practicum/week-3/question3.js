/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

// triangle = []

//         for row_num in range(num_rows):
//             # The first and last row elements are always 1.
//             row = [None for _ in range(row_num + 1)]
//             row[0], row[-1] = 1, 1

//             # Each triangle element is equal to the sum of the elements
//             # above-and-to-the-left and above-and-to-the-right.
//             for j in range(1, len(row) - 1):
//                 row[j] = triangle[row_num - 1][j - 1] + triangle[row_num - 1][j]

//             triangle.append(row)

//         return triangle

var PascalTriangle = function(n) {

  var retTriangle= [[1]];

  for(var i=0;i<n-1;i++){

    var lastRow = retTriangle[retTriangle.length-1];
    var appendRow=[1];

    for(var j=1; j< lastRow.length;j++){
      appendRow.push(lastRow[j]+lastRow[j-1]);
    }

    appendRow.push(1);

    retTriangle.push(appendRow);



  }

  return retTriangle;

};