/*
You are given strings A and B.
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function(A, B) {
  var returnVal=0

  for(i in A){
    for(j in B){
      if(A[i]===B[j]){
        returnVal+=1;
      }
    }
  }

  return returnVal;

};
