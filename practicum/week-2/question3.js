/*
An array of integers, input, is given.
A pair (i, j) is called an ordered pair if input[i] < input[j] and i < j.
Return the number of ordered pairs.
Example:
input: [4, 2, 6, 9]
output: 5
There are 5 ordered pairs: (4, 6), (4, 9), (2, 6), (2, 9), (6, 9)
*/

var numberOfOrderedPairs = function(input) {
  var orderedPairs=0;

  i=0
  j=0

  while(i<input.length){
    while(j<input.length){
      if(input[i] < input[j] && i<j){
        orderedPairs+=1
      }
      j++
    }
    j=0
    i++
  }




  return orderedPairs;

};
