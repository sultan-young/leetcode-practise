/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
    // 结题思路：将字符串依次填入数组，当进入的元素是右括号时候，寻找栈中距离最近的左括号并删除。当遍历结束时候，栈空则视为有效
    let stack: string[] = [];
    const CharMap = {
        '}': '{',
        ')': '(',
        ']': '['
    }
    for(let i = 0; i < s.length; i++) {
        let currentStr = s[i];
        if (CharMap[currentStr] && CharMap[currentStr] === stack[stack.length - 1]) {
            stack.pop()
        } else {
            stack.push(currentStr);
        }

    }
    return !stack.length;
};
// @lc code=end