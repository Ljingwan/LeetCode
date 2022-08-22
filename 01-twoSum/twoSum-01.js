/*
 * @Author: jingwan.li
 * @Date: 2022-08-22 10:45:55
 * @LastEditTime: 2022-08-22 10:47:37
 * @LastEditors: jingwan.li
 * @Description:
 * @FilePath: \LeetCode\01-twoSum.js
 *
 */

// 两数之和双for循环解法
var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < i; j++) {
      if (nums[i] + nums[j] === target) {
        return [j, i];
      }
    }
  }
};

console.log(twoSum([3, 3, 6], 6));
