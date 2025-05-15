//store first element as smallest value you have seen so far
//compare this item to the next item in the array until you find a smaller number
//if a smaller number is found, designate that smaller number to be the new "smallest" and continue until the end of the array
//if the "smallest" is not the value you first began with, swap the values of the two elements
//continue to the next element and repeat this process

function selectionSort(arr){
    for (let i=0; i<arr.length; i++){
        let lowest = i;
        for (let j = i+1; j<arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
    }
    return arr;
}

console.log(selectionSort([34,22,10,19,17])) // [10, 17, 19, 22, 34]