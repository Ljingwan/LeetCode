/*
 * @Author: jingwan.li
 * @Date: 2022-08-23 17:13:38
 * @LastEditTime: 2022-08-23 18:09:32
 * @LastEditors: jingwan.li
 * @Description:
 * @FilePath: \LeetCode\01-twoSum\twoSum-02.js
 *
 */

// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

// 查找目标值 target是否存在，要首先考虑 hash结构
var twoSum = function (nums, target) {
  // 因为此题需要返回的是下标而非数字本身，所以可以考虑map键值对的形式存储
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    // map.has()判断的是键
    if (map.has(target - nums[i])) {
      // map.get()拿到的是值
      return [map.get(target - nums[i]), i];
    }
    // 把nums中的每个元素及其下标都以键值对的形式存入map，但如果此前map中已经存在了与当次循环的nums[i]相加可以=target的数字，立刻return，后面的就不用set了
    map.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 26));
