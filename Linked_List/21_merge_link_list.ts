/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(0);
  let cur = dummy;

  while (list1 && list2) {
    // continueslly attach smaller node to current
    if (list1.val <= list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }

    // move current to next point
    cur = cur.next;
  }

  // append whatever left in list1/list2
  cur.next = list1 || list2;

  // get the dummy next
  return dummy.next;
};

/**
 * O(n) visit each node
 * O(1) few varialbe
 */