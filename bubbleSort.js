// swapping spaces in array
/*function swap (arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}
const swap (arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}*/
// Bubble Sort
// start looping with a variable called i at the beginning of the array
// start an inner loop with a variable called j from the beginning until i -1
// if arr[j] is greater than arr[j+1], swap those two values
// return the sorted array
function bubbleSort(arr){
    for (let i=0; i<arr.length; i++){
        for (let j = 0; j<arr.length; j++){
            if(arr[j]>arr[j+1]){
                //swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
 console.log(bubbleSort([37,45,29,8])) // [8, 29, 37, 45]
// Time complexity: O(n^2)
// Space complexity: O(1)