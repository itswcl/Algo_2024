/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  // early return
  if (!head) return null;

  // making copy node to next
  let current = head;
  while (current) {
    // create copy
    let newNode = new Node(current.val);
    // newNode next is current next; "A'"> B
    newNode.next = current.next;
    // repointer current next to the copy A > "A'"
    current.next = newNode;
    // move our current next of newNode "A'" > B
    current = newNode.next;
  }

  // add random pointer for copies
  current = head;
  while (current) {
    // check if current has random
    if (current.random) {
      // we make the copy to point the random which is current's random next
      // A > C so A' > C+next which is C'
      current.next.random = current.random.next;
    }
    // we move to next node which is from original A > B
    current = current.next.next;
  }

  // split 2 list
  current = head;
  // we need to have fixed pointer to pointer our copy head
  let newHead = head.next;
  // to use copy pointer to traverse
  let copy = newHead;
  while (current) {
    // move our current to original node
    current.next = current.next.next;
    // if we have copy next which means next has a copy
    if (copy.next) {
      copy.next = copy.next.next;
    }
    // move our pointer to next node
    current = current.next;
    copy = copy.next;
  }

  // finally we get our copy head
  return newHead;
};
