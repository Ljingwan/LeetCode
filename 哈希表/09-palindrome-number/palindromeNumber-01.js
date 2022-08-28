/*
 * @Author: jingwan.li
 * @Date: 2022-08-23 18:17:31
 * @LastEditTime: 2022-08-23 18:42:36
 * @LastEditors: jingwan.li
 * @Description:
 * @FilePath: \LeetCode\09-palindrome-number\palindromeNumber-01.js
 *
 */
var isPalindrome = function (x) {
  return x.toString() === x.toString().split("").reverse().join("");
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
