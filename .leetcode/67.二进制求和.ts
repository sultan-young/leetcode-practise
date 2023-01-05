/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
function addBinary(a: string, b: string): string {
    const maxLen = Math.max(a.length, b.length);
    let binary = '';

    function calculate(a: string, b: string, carry: boolean): {result: string; isNeedCarry: boolean} {
        let result: string;
        let isNeedCarry = false;
        if (a === '1' && b === '1') {
            result = '0';
            isNeedCarry = true;
        } else if (a === '0' && b === '0') {
            result = '0';
        } else {
            result = '1';
        }
        if (carry) {
            if (result === '0') {
                result = '1'
            } else if (result === '1') {
                result = '0';
                isNeedCarry = true;
            }
        }
        return {
            result,
            isNeedCarry,
        }
    }
    // 是否需要进位
    let isNeedCarry = false;
    for(let i = 1; i < maxLen + 1; i++) {
        const currentAStr = a[a.length - i] || '0';
        const currentBStr = b[b.length - i] || '0';
        const { result, isNeedCarry: newIsNeedCarry } = calculate(currentAStr, currentBStr, isNeedCarry);
        isNeedCarry = newIsNeedCarry;
        binary = result + binary;
    }
    if (isNeedCarry) {
        binary ='1' + binary
    }
    return binary;
};
// @lc code=end

