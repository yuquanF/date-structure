/**
 * 冒泡排序
 */
const randomNums = require('./array_test');

function bubbleSort(randomArray) {
    let len = randomArray.dataStore.length,
        arr = randomArray.dataStore;

    for (let outer = len - 1; outer >= 2; outer--) {
        for (let inner = 0; inner <= outer-1; inner++) {
            if (arr[inner] > arr[inner + 1]) {
                randomArray.swap(arr, inner, inner + 1);
            }
        }
        // console.log(`第${outer}：${randomArray.toString()}`);
    }
}

// 测试冒泡排序
let len = 10000;
let randomArray = randomNums(len);

const start = new Date();

bubbleSort(randomArray);
console.log('\nsort:\n' + randomArray.toString());

const ms = new Date() -start;
console.log(`冒泡排序${len}个随机数，花费${ms}ms`);