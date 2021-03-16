/*
 * @Date: 2020-07-27 10:33:28
 * @LastEditors: 王一丁
 * @LastEditTime: 2021-03-14 21:40:31
 * @FilePath: \MyDemod:\GIt\GoodWord\常用原生JS方法\数组去重.js
 */ 
// 利用ES6 Set去重（ES6中最常用）---------
// 不考虑兼容性，这种去重的方法代码最少。这种方法还无法去掉“{}”空对象，后面的高阶方法会添加去掉重复“{}”的方法
function unique(arr) {
    return Array.from(new Set(arr))
}
var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];
console.log(unique(arr))
 //[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]


// 利用Map数据结构去重-------------------
function arrayNonRepeatfy(arr) {
    let map = new Map();
    let array = new Array();  // 数组用于返回结果
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {  // 如果有该key值
            map.set(arr[i], true);
        } else {
            map.set(arr[i], false);   // 如果没有该key值
            array.push(arr[i]);
        }
    }
    console.log("arrayNonRepeatfy -> map", map)
    return array;
}
var arr2 = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];
console.log(arrayNonRepeatfy(arr2))
//[1, "a", "true", true, 15, false, 1, {…}, null, NaN, NaN, "NaN", 0, "a", {…}, undefined]