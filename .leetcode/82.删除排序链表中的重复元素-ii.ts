/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) return null;
    let dummyHeadNode = new ListNode(0, head);

    let node = dummyHeadNode;
    while (node.next && node.next.next) {
        if (node.next.val === node.next.next.val) {
            const x = node.next.val;
            while (node.next && node.next.val === x) {
                node.next = node.next.next;
            }
        } else {
            node = node.next;
        }
    }
    return dummyHeadNode.next;
};
// @lc code=end

