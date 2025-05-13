
// This function takes a sorted array and an element to search for.
// It uses a binary search algorithm to find the index of the element in the array.
function binarySearch(arr, elem){
let start = 0;
let end = arr.length - 1;
let middle = Math.floor((start + end /2));
while(arr[middle] !== elem && start <= end){
    if(elem < arr[middle]){
        end = middle -1;
    } else{
        start = middle +1;
    }
    middle = Math.floor((start + end /2));
}
if(arr[middle] === elem){
    return middle;
} else{
    return -1;
}
}

binarySearch([1,2,3,4,5,6,7,8,9], 5); // 4
// Time complexity: O(log n)
// Space complexity: O(1)


// If the element is found, it returns the index of the element.
// If the element is not found, it returns -1.
// The function works by dividing the array in half and checking if the middle element is equal to the target element.
// If the middle element is less than the target element, it searches the right half of the array.
// If the middle element is greater than the target element, it searches the left half of the array.
// The function continues to divide the array in half until the element is found or the array is empty.