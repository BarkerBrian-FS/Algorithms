//Break up array into halves until you have arrays that are empy or have one element
// Once you have smaller sorted arrays merge those arrays with other sorted arrays until you are back at full length array
// Once array merged together return sorted array
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length &&  j< arr2.length){
        if(arr1[i] < arr2[j]){
            results.push(arr1[i])
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
        }
        while (i < arr1.length){
            results.push(arr1[i]);
            i++;
        }
        while (j < arr2.length){
            results.push(arr2[j]);
            j++;
        }
        return results;
    }
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0,mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

mergeSort([10, 24, 76, 73, 72, 1, 9]) // [10, 24, 73, 76]