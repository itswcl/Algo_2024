/**
 * Example 1:


Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]
Example 2:


Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]
 */

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
var oddEvenList = function (head) {
  if (!head) return null;
  // [1,2,3]
  const evenHead = head.next; // [2]
  let oddPointer = head; // [1] -> [1] + [3]
  let evenPointer = head.next; // [2] -> [2] + undeifned

  while (evenPointer && evenPointer.next) {
    oddPointer.next = evenPointer.next;
    oddPointer = oddPointer.next;
    evenPointer.next = oddPointer.next;
    evenPointer = evenPointer.next;
  }

  // in the end oddPointer will be in last node.
  // we will set the next to link to our evenHead
  oddPointer.next = evenHead;
  return head;
};
