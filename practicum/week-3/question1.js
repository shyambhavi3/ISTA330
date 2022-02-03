/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function(input) {
        var maxNum=findMax(input);
       
        for(var i =0;i<input.length;i++){
                if(input[i]*2 < maxNum){
                        return false;
                }

        }

        return true;
   
};

function findMax(list){
        var num=list[0]

        for(var i=0;i++;i<list.length){
                if (list[i]>num){
                        num=list[i];
                }

        }

        return num
}