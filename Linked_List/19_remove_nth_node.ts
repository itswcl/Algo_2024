/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // dummy with head
  let dummy = new ListNode(0);
  dummy.next = head;

  // set 2 runners
  let slow = dummy;
  let fast = dummy;

  // 1. let fast run until 'n'
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // now we continue to run fast until end
  while (fast.next) {
    // in the mean time the slow will join to run
    // once fast null the slow will be before 'n'
    fast = fast.next;
    slow = slow.next;
  }

  // then we move pointer next to next next in that way we skip 'n' node
  slow.next = slow.next.next;

  // now return the head which is dummy next
  return dummy.next;
};
