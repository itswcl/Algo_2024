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
  // dummy list
  let dummy = new ListNode(0);
  // now we copy dummy to current
  let current = dummy;
  // initial carry to zero this is for when 2 val adding up over 10 -> 15 -> carry = 1
  let carry = 0;

  // traveral based on l1, l2, carry (we need to have 0 carry)
  while (l1 || l2 || carry) {
    // a temp sum to get pervious carry number
    let sum = carry;

    // check both l1 and l2 and traversal the value
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    // now we math our 1. carry 2. reminder to append to our current list
    const reminder = sum % 10;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(reminder);
    current = current.next;
  }
  // in the end our current will be in the last node
  // but we can find our head 'dummy' to next as our newest list
  return dummy.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
