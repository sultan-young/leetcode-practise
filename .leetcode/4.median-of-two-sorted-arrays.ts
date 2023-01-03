/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const concatArr = nums1.concat(nums2).sort((a, b) => a - b);
    let len = concatArr.length;
    if (len % 2 === 1) {
        return concatArr[Math.floor(len / 2)]
    } else {
        let num1 = concatArr[len / 2 - 1];
        let num2 = concatArr[len / 2];
        return (num1 + num2) / 2;
    }
};
// @lc code=end

