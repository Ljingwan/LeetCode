/*
 * @Author: jingwan.li
 * @Date: 2022-08-24 17:15:10
 * @LastEditTime: 2022-08-26 14:05:02
 * @LastEditors: jingwan.li
 * @Description:
 * @FilePath: \LeetCode\349-intersection-of-two-arrays\intersectionOfTwoArrays.js
 *
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const resArr = new Set();
  if (nums1.length > nums2.length) {
    var setArr = nums1;
    var compareArr = nums2;
  } else {
    var setArr = nums2;
    var compareArr = nums1;
  }
  for (let i = 0; i < compareArr.length; i++) {
    const set = new Set(setArr);
    if (set.has(compareArr[i])) {
      resArr.add(compareArr[i]);
    }
  }
  return [...resArr];
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
