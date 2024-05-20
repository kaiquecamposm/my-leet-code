/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const l1 = [2,4,3], l2 = [5,6,4]
// const l1 = [0], l2 = [0]
// const l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]

var addTwoNumbers = function(l1, l2) {
  console.log(l1)
  console.log(l2)
  console.log('--------------------')

  const mapL1 = new Map()
  const mapL2 = new Map()

  for(let x = 0; x < l1.length; x++) {
    mapL1.set(x, l1[x])

    console.log(x, mapL1.get(x))
  }
  
  for(let y = 0; y < l2.length; y++) {
    mapL2.set(y, l2[y])

    console.log(mapL2.values())
  }
};

const res = addTwoNumbers(l1, l2)

// console.log(res)