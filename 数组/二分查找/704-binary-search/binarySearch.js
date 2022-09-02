/*
 * @Author: jingwan.li
 * @Date: 2022-08-29 17:24:50
 * @LastEditTime: 2022-08-29 18:33:18
 * @LastEditors: jingwan.li
 * @Description:
 * @FilePath: \LeetCode\数组\二分查找\704-binary-search\binarySearch.js
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  // 左闭右闭区间，当l = r时，左闭右闭区间合法（仅有一个元素），即while中条件应包括l = r的情况
  // 左闭右开区间，不应包含l = r的情况，因为此时区间不合法了
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (target < nums[mid]) {
      // 因为是左闭右闭区间 已经判断nums[mid]一定不是target，所以应该从下一位开始搜索 所以边界值是middle-1
      r = mid - 1;
    } else if (target > nums[mid]) {
      l = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
