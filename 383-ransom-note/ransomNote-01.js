/*
 * @Author: jingwan.li
 * @Date: 2022-08-25 16:56:13
 * @LastEditTime: 2022-08-26 10:37:51
 * @LastEditors: jingwan.li
 * @Description:
 * @FilePath: \LeetCode\383-ransom-note\ransomNote.js
 *
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const container = new Array(26).fill(0);
  const asclla = "a".charCodeAt(0);
  const length =
    ransomNote.length > magazine.length ? ransomNote.length : magazine.length;
  for (let i = 0; i < length; i++) {
    container[magazine.charCodeAt(i) - asclla]++;
    container[ransomNote.charCodeAt(i) - asclla]--;
  }
  return container.every((item) => {
    return item >= 0;
  });
};

console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));
