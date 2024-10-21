/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  // check if head is null
  if (!head || !head.next) return head;

  // now we count length start with 1 because we count tail.next
  let length = 1;
  let tail = head;
  while (tail.next) {
    length++;
    tail = tail.next;
  }

  // now we check if k is zero after length
  k = k % length;
  if (k === 0) return head;

  // find our new tail index
  let newTailIdx = length - k - 1;
  // find our newTail by traversal head to the newTail index
  let newTail = head;
  for (let i = 0; i < newTailIdx; i++) {
    newTail = newTail.next;
  }

  // now we will find our new head which is newTail next
  let newHead = newTail.next;
  // set new tail next to null
  newTail.next = null;

  // get our pervious tail (travese while counting) point to our old head
  tail.next = head;

  // findally get our new head
  return newHead;
};
