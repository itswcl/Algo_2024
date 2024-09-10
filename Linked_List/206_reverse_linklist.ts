/**
 * Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
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
var reverseList = function (head) {
  // null -> 1 -> 2 -> 3 -> 4 -> 5
  //   P     C
  // null <- 1    N
  //         P    C
  // null <- 1 <- 2    N
  //              P    C
  // null <- 1 <- 2 <- 3    N
  //                   P    C
  // null <- 1 <- 2 <- 3 <- 4    N
  //                        P    C
  // null <- 1 <- 2 <- 3 <- 4 <- 5 <===== prev

  // initial our prev list
  // current list as head
  let prev = null;
  let curr = head;

  // when current is exist meaning we haven't get to end of list
  while (curr) {
    // 1. we set our curr.next to temp value
    const temp = curr.next;
    // 2. we move our pointer next to prev node
    curr.next = prev;
    // 3. set new prev as pervious curr
    prev = curr;
    // 4. set new cur to next node
    curr = temp;
  }
  // finally we return prev head
  return prev;
};
