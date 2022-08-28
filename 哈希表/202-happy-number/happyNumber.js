/*
 * @Author: jingwan.li
 * @Date: 2022-08-26 15:02:32
 * @LastEditTime: 2022-08-26 18:12:47
 * @LastEditors: jingwan.li
 * @Description:
 * @FilePath: \LeetCode\202-happy-number\happyNumber.js
 *
 */
/**
 * @param {number} n
 * @return {boolean}
 */

// 求和函数
var getSum = function (n) {
  let sum = 0;
  // n不为 0时
  while (n) {
    // 计算每一位的平方和
    sum += (n % 10) ** 2;
    n = Math.floor(n / 10);
  }
  return sum;
};

// 判断求和的结果是否曾经出现过，如果出现过就陷入死循环，不是快乐数
var isHappy = function (n) {
  let sumSet = new Set();
  // 如果 n不是1，且未在 sumSet里出现过，就一直循环
  while (n !== 1 && !sumSet.has(n)) {
    sumSet.add(n);
    // 将当前 n按位求和，赋值给下一次的 n
    n = getSum(n);
  }
  return n === 1;
};

console.log(isHappy(123));
console.log(isHappy(100));
