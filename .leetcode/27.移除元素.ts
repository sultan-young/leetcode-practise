/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
    let len = nums.length;
    let left = 0; // left 总是指向输出数组的最后一位
     //  right 指向当前将要处理的元素
    for( let right = 0;right < len; right++ ) {
        if (nums[right] !== val) {
            nums[left] = nums[right] 
            left++;
        }
    }
    return left;
};
// @lc code=end

