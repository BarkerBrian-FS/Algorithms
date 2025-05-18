// Pivot Helper Pseudo Code
//It will accept 3 arguments and array, a start index and and end
//(these can default to 0 and the length of the array -1)
//Grab the pivot from the start of the array
//Store the current pivot index in a variable
//Loop through the array from the start to the end
  //If the pivot is greater than the current value, increment the index variable
  //Swap the starting element (ie the pivot) with the pivot index 
//Return the pivot index

function pivot(arr, start = 0 , end =arr.length + 1) {
    function swap(arr, i , j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
  let pivot = arr[start];
  let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++){
        if (pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
    }

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

// Quick Sort Pseudo Code
//Accept an array
//If the length of the array is 1 or less, return the array
//Pivot the array
//Recursively call the left side of the pivot

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right){
        let pivotIndex = pivot(arr, left, right);
        let left = quickSort(arr, left, pivotIndex - 1);
        let right = quickSort(arr, right, pivotIndex + 1);
    }
    return arr;
}

quickSort([4, 8, 2, 1, 5, 7, 6, 3]);
//Time Complexity: O(n log n)   
//Space Complexity: O(n)    