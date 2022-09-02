/*
 * @Author: jingwan.li
 * @Date: 2022-08-30 14:11:38
 * @LastEditTime: 2022-08-30 16:28:48
 * @LastEditors: jingwan.li
 * @Description:
 * @FilePath: \LeetCode\数组\二分查找\35-search-insert-position\searchInsertPosition.js
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // 时间复杂度需为 O(log n)，用二分查找
  let l = 0;
  let r = nums.length - 1;
  // 左闭右闭区间，l=r时也合法
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (target < nums[mid]) {
      r = mid - 1;
    } else if (target > nums[mid]) {
      l = mid + 1;
    } else {
      return mid;
    }
  }
  // 当r<l时才会跳出while循环，此时l应比r大1
  // console.log(r, l);
  return r + 1;
};

console.log(searchInsert([1, 2, 3, 5, 6], 4));
