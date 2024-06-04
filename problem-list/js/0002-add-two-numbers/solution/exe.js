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
  let restSum = 0;

  while (currentL1 || currentL2) {
    let sum = (currentL1 ? currentL1.val : 0) + (currentL2 ? currentL2.val : 0) + restSum

    restSum = Math.floor(sum / 10)
    sum = sum % 10

    res = addLastNode(res, new ListNode(sum))

    currentL1 = currentL1 ? currentL1.next : null
    currentL2 = currentL2 ? currentL2.next : null
  }

  if (restSum > 0) {
    res = addLastNode(res, new ListNode(restSum))
  }

  return res
};

var addLastNode = function(head, newNode) {
  if (!head) { 
    return newNode
  }

  let currentNode = head;
  while (currentNode.next) {
    currentNode = currentNode.next
  }

  currentNode.next = newNode

  return head
}

const res = addTwoNumbers(l1, l2)

console.log(res)