/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
    // 思路，将多个连续的空格替换成一个后，字符串trim，再split成数组后取出最后一个
    const arr = s.replace(/\s+/g, ' ').trim().split(' ');
    return arr[arr.length - 1].length
};
// @lc code=end

