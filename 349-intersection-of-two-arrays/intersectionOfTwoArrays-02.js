/*
 * @Author: jingwan.li
 * @Date: 2022-08-26 14:06:33
 * @LastEditTime: 2022-08-26 14:13:32
 * @LastEditors: jingwan.li
 * @Description:
 * @FilePath: \LeetCode\349-intersection-of-two-arrays\intersectionOfTwoArrays-02.js
 *
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const resArr = new Set();
  if (nums1.length < nums2.length) {
    const temp = nums2;
    nums2 = nums1;
    nums1 = temp;
  }
  for (let i = 0; i < nums2.length; i++) {
    // 去重
    const set = new Set(nums1);
    set.has(nums2[i]) && resArr.add(nums2[i]);
  }
  return [...resArr];
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
