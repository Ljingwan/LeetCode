/*
 * @Author: jingwan.li
 * @Date: 2022-08-22 10:45:55
 * @LastEditTime: 2022-08-23 17:22:09
 * @LastEditors: jingwan.li
 * @Description:
 * @FilePath: \LeetCode\01-twoSum\twoSum-01.js
 *
 */

// 两数之和双for循环解法 时间复杂度O(n2)
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] + nums[j] === target) {
        return [j, i];
      }
    }
  }
};

console.log(twoSum([3, 3, 6], 6));
