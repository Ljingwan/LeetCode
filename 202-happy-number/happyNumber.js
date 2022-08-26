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

var getSum = function (n) {
  let sum = 0;
  while (n) {
    // n % 2 取每一位的数字
    sum += (n % 10) ** 2;
    n = Math.floor(n / 10);
  }
  return sum;
};

var isHappy = function (n) {
  const sumSet = new Set();
  while (n !== 1 && !sumSet.has(n)) {
    sumSet.add(n);
    n = getSum(n);
  }
  return n === 1;
};

console.log(isHappy(123));
console.log(isHappy(100));
