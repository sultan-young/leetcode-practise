/*
 * @lc app=leetcode.cn id=530 lang=typescript
 *
 * [530] 二叉搜索树的最小绝对差
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function getMinimumDifference(root: TreeNode | null): number {
    let diff = Number.MAX_SAFE_INTEGER;
    let preVal;

    function inOrder(root: TreeNode | null) {
        if (!root) {
            return;
        }
        inOrder(root.left);
        if (preVal !== undefined && root.val - preVal < diff) {
            diff = root.val - preVal;
        }
        preVal = root.val;
        inOrder(root.right);
    }
    inOrder(root);
    return diff;
};
// @lc code=end

