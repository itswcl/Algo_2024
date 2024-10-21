/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  // initial dummy in case dup head
  let dummy = new ListNode(0);

  // dummy next is our head
  dummy.next = head;
  // initial prev as dummy and current is dummy next
  let prev = dummy;
  let current = dummy.next;

  // traversal current
  while (current) {
    // we will check if current and next is dup
    if (current.next && current.val == current.next.val) {
      // traversal the dupicale value
      // once hit end we link prev next to current next
      while (current.next && current.val == current.next.val) {
        current = current.next;
      }

      // once finish we will update prev next to current next to link from previous node next to current next
      prev.next = current.next;
    } else {
      // if not same we can just move prev to current
      prev = prev.next;
    }
    // move current to next
    current = current.next;
  }

  // get our dummy next as our head
  return dummy.next;
};
