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

var swapPairs = function (head) {
  // edge case
  if (!head || !head.next) return head;

  // recursive, lets' initial our first and second
  let first = head;
  let second = first.next;

  // and we need to do the same thing from 3rd node
  // [1,2,3,4] => swap in [1,2], [3,4]
  first.next = swapPairs(second.next);
  // we repoint second next to first
  second.next = first;

  // second will be the new head node because the swap
  return second;
};
/**
 * O(n) because the recursive call
 * O(n) because recursive call
 */

var swapPairs2 = function (head) {
  // edge case
  if (!head || !head.next) return head;

  // initial dummy and prev and current pointer
  let dummy = new ListNode(0);
  let prev = dummy;
  let cur = head;

  // we stop until no node we can swap
  while (cur && cur.next) {
    // we have temp holde for first node and second node
    let first = cur;
    let second = cur.next;

    // we start to repoint the prev next to second
    prev.next = second;
    // first next will point to second next
    first.next = second.next;
    // second's next repoint back to first node
    second.next = first;

    // move both prev and current pointer to next set
    // the first will be new prev
    prev = first;
    // current will be first next
    cur = first.next;
  }

  // in the end we return dummy next because it's our new head
  return dummy.next;
};

/**
 * O(n) becuase check each node
 * O(1) becase a few variable
 */