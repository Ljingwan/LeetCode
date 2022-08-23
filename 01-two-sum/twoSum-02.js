/*
 * @Author: jingwan.li
 * @Date: 2022-08-23 17:13:38
 * @LastEditTime: 2022-08-23 18:09:32
 * @LastEditors: jingwan.li
 * @Description:
 * @FilePath: \LeetCode\01-twoSum\twoSum-02.js
 *
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    // map的has方法 查找键名是否存在
    if (map.has(target - nums[i])) {
        // map的get方法 获取键名所对应的键值
      return [map.get(target - nums[i]), i];
    }
    // map的set方法 将键值对插进map里
    map.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 26));
