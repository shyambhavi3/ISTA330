/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {

  var string="";

  for(i in input){
    for(j in shuffleIndices){
    
      if(i==shuffleIndices[j]){
        string+=input[j];
      }
    }
  }


  return string;



};
