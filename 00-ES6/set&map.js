/*
 * @Author: jingwan.li
 * @Date: 2022-08-22 14:35:40
 * @LastEditTime: 2022-08-23 17:29:59
 * @LastEditors: jingwan.li
 * @Description:
 * @FilePath: \LeetCode\00-ES6\set&map.js
 *
 */

// Set()构造函数可以自动去重，可以转换JSON结构

var setExp = function (arr) {
  let set = new Set(arr);
  //   console.log(set.size, set.has(3));
  set.forEach((value, key, ownerSet) => {
    // 在set集合中，value和key相等
    console.log(value === key);
    // 第三个参数是set本身
    console.log(set === ownerSet);
  });
  // 展开运算符，可以将Set集合转换为数组
  let setArr = [...set];
  console.log(setArr);
  return set;
};

console.log(setExp([3, 3, 6]));


// 利用Set构造函数-数组去重
let noDuplicate = function (arr) {
  let newArr = [...new Set(arr)];
  return newArr;
};

console.log(noDuplicate([1, 2, 3, 4, 5, 6, 6, 6, 6, 6]));


// Map()