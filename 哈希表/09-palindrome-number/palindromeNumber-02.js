/*
 * @Author: jingwan.li
 * @Date: 2022-08-23 18:17:31
 * @LastEditTime: 2022-08-24 14:39:06
 * @LastEditors: jingwan.li
 * @Description:
 * @FilePath: \LeetCode\09-palindrome-number\palindromeNumber-02.js
 *
 */
var isPalindrome = function (x) {
  // 提前过滤效率更低
  // if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  let tempNum = x.toString();
  // 双指针法
  const n = Math.floor(tempNum.length / 2);
  for (let i = 0; i < n; i++) {
    if (tempNum[i] !== tempNum[tempNum.length - i - 1]) return false;
  }
  return true;
};

console.log(isPalindrome(0));
console.log(isPalindrome(1234));
console.log(isPalindrome(121));
