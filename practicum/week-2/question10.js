/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
  var max=-1;
  var min=10;
  n=n.toString();
  for(i in n){
    if(Number(n[i])<min){
      min=Number(n[i])
    }
    if(Number(n[i])>max){
      max=Number(n[i])
    }
  }

  return max-min;

};
