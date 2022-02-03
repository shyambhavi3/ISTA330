/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
    var count={};



    for(var i=0;i<input.length;i++){
        var num=input[i].toString();
        if(num in count){
            count[num] +=1;
        }else{
            count[num]=1;
        }
    }

    

    var d_int=findDInteger(count);

    return retValFind(d_int);



};

function findDInteger(dict){
    d_int=[];
    for(let num in dict){
        if(num==dict[num]){
            d_int.push(Number(num));
        }
    }

  
    return d_int;
}

function retValFind(d_ints){
    if(d_ints.length===0){
        return -1;
    }

    else if(d_ints.length===1){
        return d_ints[0];
    }
    
    else{

        return findMax(d_ints);

    }

}

function findMax(list){
    var num=list[0]

    for(var i=0;i<list.length;i++){
            if (list[i]>num){
                    num=list[i];
            }

    }

    return num
}