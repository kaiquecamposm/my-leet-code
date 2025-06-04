/**
 * 
 * @param {number[]} arr
 */
const findSmallestIndex = (arr) => {
  let small = arr[0]
  let smallIndex = 0

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < small) {
      small = arr[i]
      smallIndex = i 
    }
  }

  return smallIndex
}

/**
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 */
const selectionSort = (arr) => {
  const sortedArr = []
  const size = arr.length

  for (let i = 0; i < size; i++) {
    const smallIndex = findSmallestIndex(arr)

    sortedArr.push(arr.splice(smallIndex, 1)[0])  
  }

  return sortedArr
} 

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let mergedArr = new Array().concat(nums1, nums2)
  let mergedArrSort = selectionSort(mergedArr)
  const size = mergedArrSort.length

  const isOdd = mergedArrSort[((size + 1) / 2) - 1]
  const isEven = (mergedArrSort[(size / 2) - 1] + mergedArrSort[(size / 2 + 1) - 1]) / 2

  const result = size % 2 === 0 ? isEven : isOdd 

  return result
};

const nums1 = [1,2,3,4,5]
const nums2 = [6,7,8,9,10,11,12,13,14,15,16,17]

console.log(findMedianSortedArrays(nums1, nums2))