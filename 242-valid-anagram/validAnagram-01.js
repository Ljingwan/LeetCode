/*
 * @Author: jingwan.li
 * @Date: 2022-08-24 16:24:20
 * @LastEditTime: 2022-08-24 17:12:50
 * @LastEditors: jingwan.li
 * @Description:
 * @FilePath: \LeetCode\242-valid-anagram\validAnagram-01.js
 *
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  // 初始化一个26位全0的数组
  const counter = new Array(26).fill(0);
  // 获取'a'的ascll码,为97
  const acharCode = "a".charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    // n.charCodeAt(i)函数,获取n的第i位对应的ascll码
    counter[s.charCodeAt(i) - acharCode]++;
    counter[t.charCodeAt(i) - acharCode]--;
  }
  return counter.every((item) => {
    return !item;
  });
};

console.log(isAnagram("eat", "ate"));
console.log(isAnagram("eat", "cow"));
