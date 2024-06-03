class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const l1 = new ListNode(2, new ListNode(4, new ListNode(3))), l2 = new ListNode(5, new ListNode(6, new ListNode(4)))

var addTwoNumbers = function(l1, l2) {
  let res;
  let currentL1 = l1;
  let currentL2 = l2;

  while (currentL1 && currentL2) {
    let sum = currentL1.val + currentL2.val
    let restSum = 0;

    if (sum > 9) {
      restSum = sum - 9

      res = addLastNode(res, new ListNode(sum - 10))
      continue;
    }

    res = addLastNode(res, new ListNode(sum + restSum))

    currentL1 = currentL1.next;
    currentL2 = currentL2.next;
  }

  console.log(res)

  return res
};

var addLastNode = function(currentNode, newNode) {
  if (!currentNode) {
    currentNode = newNode 
    return currentNode
  }

  while (currentNode.next) {
    currentNode = currentNode.next
  }

  currentNode.next = newNode

  return currentNode
}

const res = addTwoNumbers(l1, l2)

// console.log(res)