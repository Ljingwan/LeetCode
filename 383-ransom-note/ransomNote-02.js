/*
 * @Author: jingwan.li
 * @Date: 2022-08-26 10:42:13
 * @LastEditTime: 2022-08-26 11:23:38
 * @LastEditors: jingwan.li
 * @Description:
 * @FilePath: \LeetCode\383-ransom-note\ransomNote-02.js
 *
 */
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
  for (let i = 0; i < magazine.length; i++) {
    container[magazine.charCodeAt(i) - asclla]++;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    container[ransomNote.charCodeAt(i) - asclla]--;
    if (container[ransomNote.charCodeAt(i) - asclla] < 0) return false;
  }
  return true;
};

console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));
