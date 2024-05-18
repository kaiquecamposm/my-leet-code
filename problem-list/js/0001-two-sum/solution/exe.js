/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// let nums = [2, 7, 11, 15], target = 9
// let nums = [3, 2, 4], target = 6
let nums = [3, 3], target = 6

var twoSum = function(nums, target) {
  for(let x = 0; x < nums.length; x++) {    
    console.log('x: ' + x)
    for(let y = 0; y < nums.length; y++) {
      console.log('y: ' + y)
      let xIndex = nums.findIndex(num => num == nums[x])
      let yIndex = nums.findIndex(num => num == nums[y])

      if (xIndex == yIndex) continue

      console.log(nums[x] + ' ')
      let sum = nums[x] + nums[y]

      if (sum == target) return [xIndex, yIndex]
    }
  }
};

const res = twoSum(nums, target)

// console.log(res)