/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (!head || !head.next) return;

    // first we find our break point for 2 list
    // we can do slow and fast runner
    let fast = head, slow = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // after we found our slow list (mid point)
    // we can reverse our slow list
    let prev = null, cur = slow;
    while (cur) {
        // we store our curNext
        const temp = cur.next
        // repoint our cur next to prev
        cur.next = prev;
        // now our prev is the current
        prev = cur
        // move current to next node we store earlier
        cur = temp;
    }

    // after reverse our second node we will bring our head to start adding
    // remember our second is prev because reversed
    let first = head, second = prev

    // we will only iterate until our second list next is null
    while (second.next) {
        // first we need to store both next
        const tempFirst = first.next;
        const tempSecond = second.next;
        // now we connect both list to each other
        first.next = second
        second.next = tempFirst;
        // then we moving both list to next node
        first = tempFirst;
        second = tempSecond;
    }

};

/**
 * o(n) and O(1)
 */