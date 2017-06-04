/**
 * 选择排序,将min理解为指向最小值的索引的指针，理解更佳
 */
const randomNums = require('./array_test');

function selectionSort(randomArray) {
    let min,
        len = randomArray.dataStore.length,
        arr = randomArray.dataStore;

    for (let outer = 0; outer <= len - 2; outer++) {
        min = outer;
        for (let inner = outer + 1;
             inner <= len - 1; inner++) {
            if (arr[inner] < arr[min]) {
                min = inner;
            }
        }
        randomArray.swap(arr, outer, min);
        // console.log(`第${outer}：${randomArrayndomArrandomArrayy.toString()}`);
    }
}


// 测试选择排序
let len = 10000;
let randomArray = randomNums(len);

const start = new Date();

selectionSort(randomArray);
console.log('\nsort:\n' + randomArray.toString());

const ms = new Date() - start;
console.log(`选择排序${len}个随机数，花费${ms}ms`);