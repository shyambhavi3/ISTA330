/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
    sum={};

    for(var i=1;i<n+1;i++){
        
            var numString = i.toString();
            var digitSum=0;
            for(var j=0;j<numString.length;j++){
                digitSum+=Number(numString[j]);
               

        }

        if(digitSum in sum){
            sum[digitSum]+=1;
        }else{
            sum[digitSum]=1;
        }
    }

    var sumValues=Object.values(sum);  
    var maxNum=findMax(sumValues);

    return findOccurences(sumValues,maxNum);

};

function findMax(list){
    var num=list[0]

    for(var i=0;i<list.length;i++){
            if (list[i]>num){
                    num=list[i];
            }

    }

    return num
}

function findOccurences(list,num){
    var count=0

    for(var i=0;i<list.length;i++){
        if(list[i]===num){
            count+=1
        }
    }

    return count

}