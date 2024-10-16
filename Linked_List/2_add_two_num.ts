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
var addTwoNumbers = function (l1, l2) {
  // create an dummy reference
  let dummy = new ListNode(0);
  // initial current for running l1 and l2
  let current = dummy;
  // initial carry to 0 -> this is when 2 digit happen we need to update
  let carry = 0;

  // iterate l1 and l2 until both are null
  while (l1 != null || l2 != null) {
    // we check if l1 and l2 valid
    let a = l1 != null ? l1.val : 0;
    let b = l2 != null ? l2.val : 0;
    // sum up l1 l2 and carry
    let sum = carry + a + b;
    // find the carry and leftover
    carry = Math.floor(sum / 10);
    leftover = sum % 10;
    // new node for leftover and add to current next
    current.next = new ListNode(leftover);
    // current will be current next
    current = current.next;

    // move our l1 and l2 to next
    if (l1 != null) l1 = l1.next;
    if (l2 != null) l2 = l2.next;
  }

  // check if carry left. we need to add to tail
  if (carry) current.next = new ListNode(carry);

  // return dummy next which is the head nodes
  return dummy.next;
};
