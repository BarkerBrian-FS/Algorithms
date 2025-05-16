
//Create an empty array, take a look at the smallest vaules in each input array
// while there are still values we haven't looked at
  // If the value in the first arrary is smaller than the value in the second
  // push the value in to the first array into our results and move on to the next
  // value in the first array
  // If the value in the first array is larger than the value in the second push the value in the second
  // into our results and move on to the next value in second array
  // Once we exhaust one array push remaining values from the other array
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
    
console.log(merge([1, 10, 50], [2, 14, 99, 100])) // [1, 2, 10, 14, 50, 99, 100]
// Time complexity: O(n + m) where n and m are the lengths of the two arrays
// Space complexity: O(n + m) where n and m are the lengths of the two arrays