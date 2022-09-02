/*
 * @Author: jingwan.li
 * @Date: 2022-08-31 17:36:44
 * @LastEditTime: 2022-09-02 17:40:52
 * @LastEditors: jingwan.li
 * @Description:
 * @FilePath: \LeetCode\数组\27-remove-element\removeElement.js
 *
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

//  双指针法（快慢指针法）： 通过一个快指针 + 慢指针在一个for循环下完成两个for循环的工作
var removeElement = function (nums, val) {
  let slow = 0;
  for (let fast = 0; fast <= nums.length - 1; fast++) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
  }
  return slow;
};

console.log(removeElement([3, 2, 2, 3], 3));
