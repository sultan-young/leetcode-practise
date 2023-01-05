/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const midIndex = ((right - left) >> 1) + left
        const midNum = nums[midIndex];
        if (midNum >= target) {
            right = midIndex - 1;
        } else {
            left = midIndex + 1;
        }
    }
    return left;
};
// @lc code=end