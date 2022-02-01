/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.


A substring is balanced if it has equal number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'
*/

/*
  For this question you first need to have a function that lists all possible partitions
  for any given string. Here is the function that does that. You can call this function in your
  maxBalanceNumber function.
*/
function allPartitions(input){
  if(input.length === 1) {
    return [[input]];
  }
  let result = allPartitions(input.slice(0, -1));
  let n = result.length;
  //deep copy the result array
  let newPartitions = JSON.parse(JSON.stringify(result));
  for(let i = 0; i < n; i++) {

    newPartitions[i].push(input[input.length-1]);
  }
  for(let i = 0; i < n; i++) {
    result[i][result[i].length-1] += input[input.length-1];
  }
  return result.concat(newPartitions);
}
// Here is how you can use the utility function allPartitions:
for (let partition of allPartitions("aba")) {
  console.log(partition);
}

var maxBalanceNumber = function(input) {
  var partitions =allPartitions(input);
  var retVal=0;

  for(i in partitions){
    var balanced =0;
    for(j in partitions[i]){
      if(checkBalanced(partitions[i][j])){
        balanced+=1;
      }
    }
    if(balanced>retVal){
      retVal=balanced;
    }
  }

  return retVal;


}

function checkBalanced(string){
  aCount=0;
  bCount=0;

  for(char in string){
    if (string[char]==="a"){
      aCount+=1
    }else{
      bCount+=1
    }
  }

  return aCount===bCount;
}
