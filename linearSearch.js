//write a function accepting array and value
//loop through array 
//if the value is found, return index
//if the value is not found, return -1
function linearSearch(arr, val){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}
   

console.log(linearSearch([1,2,3,4,5], 3)) // 2
// Time complexity: O(n)
// Space complexity: O(1)