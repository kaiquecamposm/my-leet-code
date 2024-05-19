/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// let nums = [2, 7, 11, 15], target = 9
// let nums = [3, 2, 4], target = 6
// let nums = [3, 3], target = 6

var twoSum = function(nums, target) {
  const map = new Map()

  for(let x = 0; x < nums.length; x++) {
    if (map.get(nums[x]) === undefined) map.set(target - nums[x], x);
    else return [map.get(nums[x]), x];
  }
};

const res = twoSum(nums, target)

console.log(res)