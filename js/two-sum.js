/**
 * https://leetcode.com/problems/two-sum/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsMap = new Map();
    for(let i = 0; i < nums.length; i++){
        numsMap.set(nums[i], i);
    }
    for(let i = 0; i < nums.length; i++){
        let targetNum = target - nums[i];
        if(numsMap.get(targetNum) == undefined || numsMap.get(targetNum) == i) continue;
            return [i, numsMap.get(targetNum)];
    }
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));