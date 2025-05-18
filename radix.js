// Radix Sort Helper Function
// getDigit (num, place) returns the digit in num at the given place value
// getDigit(12345, 0) // returns 5
// getDigit(12345, 1) // returns 4
function getDigit(num, place) {
    // Math.floor(num / Math.pow(10, place)) % 10
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

//digitCount (num) returns the number of digits in num
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// mostDigits (nums) returns the number of digits in the largest number in nums
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

// Radix Sort pseudo code Accepts an array 
// Loop through the array and find the largest number
// Call the getDigit function to find the number of digits in the largest number
// Loop from k = 0 to the number of digits in the largest number
// Create a bucket array for each digit
// Loop through the array and place each number in the appropriate bucket
// Concatenate the buckets into the sorted array

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));