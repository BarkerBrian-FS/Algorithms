//Start by picking second element in array 
//compare it to the one before it if smaller swap 
//Continue to next element and if it in the incorrect order iterate through left side and put in correct place
//Repeat until array is sorted 

function insertionSort(arr){
    for (let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        let j = i -1;
        for (; j >= 0 && arr[j] > currentVal; j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4])) // [1, 2, 4, 9, 76]
// Time complexity: O(n^2)
// Space complexity: O(1)