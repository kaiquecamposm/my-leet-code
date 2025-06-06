class ListNode {
  /**
   * @param {number} val 
   * @param {ListNode | null} next 
   */
  constructor(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @returns {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (head === null) {
    return null
  }
  if (head.next === null) {
    return null
  }

  let current = head
  let size = 0

  while (current != null) {
    current = current.next
    size += 1
  }

  if (n == size) {
    head = head.next

    return head
  }

  current = head
  let indexForRemove = (size - n) - 1

  for(let i = 0; i < indexForRemove && current != null; i++) {
    current = current.next
  }

  current.next = current.next.next

  return head
}

let node = new ListNode(1)
node.next = new ListNode(2)
node.next.next = new ListNode(3)
node.next.next.next = new ListNode(4)
node.next.next.next.next = new ListNode(5)

function traverse(head) {
  let current = head

  while(current != null) {
    console.log(current.val)
    current = current.next
  }
}

const nodeAtt = removeNthFromEnd(node, 2)
traverse(nodeAtt)