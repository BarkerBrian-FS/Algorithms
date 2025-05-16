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