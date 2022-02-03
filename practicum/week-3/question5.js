/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function(input) {

    for(var i =0; i<input.length-1;i++){
        if(input[i]<input[i+1]){
            return checkIncreasing(input)

        }
        if(input[i]>input[i+1]){
            return checkDecreasing(input);

        }
    }

};

function checkDecreasing(list){
    for(var i=0; i<list.length-1;i++){
        if(list[i]<list[i+1]){
            return false;
        }
    }

    return true;

}

function checkIncreasing(list){

    for(var i=0; i<list.length-1;i++){
        if(list[i]>list[i+1]){
            return false;
        }
    }

    return true;


}

