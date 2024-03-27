/**
 * @param {number[]} nums
 * @return {number}
 */

/*
 It uses the Boyer-Moore Voting Algorithm, which has a time complexity of O(n) and a space complexity of O(1), where n is the length of the input array. This is because it only needs to traverse the array once and does not require any additional space that scales with the input size.
 */
var majorityElement = function(nums) {
let count = 0;
    let candidate = null;
    for(let num of nums){
        if(count === 0){
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    return candidate;
}