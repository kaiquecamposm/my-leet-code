var findMedianSortedArrays = function(nums1, nums2) {
  let mergedArr = new Array().concat(nums1, nums2)
  let mergedArrSort = mergedArr.sort()
  console.log(mergedArrSort)
  const size = mergedArrSort.length

  const isOdd = mergedArrSort[((size + 1) / 2) - 1]
  const isEven = (mergedArrSort[(size / 2) - 1] + mergedArrSort[(size / 2 + 1) - 1]) / 2

  const result = size % 2 === 0 ? isEven : isOdd 

  return result
};


const nums1 = [1,2,3,4,5]
const nums2 = [6,7,8,9,10,11,12,13,14,15,16,17]

console.log(findMedianSortedArrays(nums1, nums2))