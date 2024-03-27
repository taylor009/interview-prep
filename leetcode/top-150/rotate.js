/**
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

        // If k is greater than the length of the array, we take the remainder
        k = k % nums.length;
        // Reverse the entire array
        reverse(nums, 0, nums.length - 1);
        // Reverse the first k elements
        reverse(nums, 0, k - 1);
        // Reverse the last n-k elements
        reverse(nums, k, nums.length - 1);
};

// Helper function to reverse the array
function reverse(nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate2 = function(nums, k) {
    const n = nums.length;

    // If k is greater than array length, take its modulus
    k %= n;

    // Use splice to move the last k elements to the front
    const rotatedPart = nums.splice(n - k, k);

    // Concatenate the rotated part at the beginning of the array
    nums.unshift(...rotatedPart);
};