/**
 * 05 October 2023 Daily Question 
 * https://leetcode.com/problems/majority-element-ii/
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let appear = [];
    let numsLength = nums.length;
    while(nums.length > 0){
        let filter = nums.filter((n) => n != nums[0]);
        if((numsLength / 3) < nums.length-filter.length) appear.push(nums[0]);
        nums = [...filter];
    }
    return appear;
};
console.log(majorityElement([3,3,3,3,2,3,5,5,5,5,5,5,5]));
console.log(majorityElement([1]));
console.log(majorityElement([1,2]));