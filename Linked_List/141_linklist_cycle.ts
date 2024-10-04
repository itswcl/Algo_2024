/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // initial slow and fast runner
  let slowNode = head;
  let fastNode = head;

  // if fast and fast next is null we done
  while (fastNode && fastNode.next) {
    // so we start running and keep comparing if same it's true
    // the reason we running both is we continely add 1 step and 2 step we will eventually meet
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
    if (slowNode === fastNode) return true;
  }

  // otherwise it's not a cycle
  return false;
};
