/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
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
    let nextNode: ListNode | null = head;
    while (nextNode && nextNode.next) {
        if (nextNode.val === nextNode.next.val) {
            nextNode.next = nextNode.next.next;
        } else {
            nextNode = nextNode.next;
        }
    }
    return head;
};
// @lc code=end

