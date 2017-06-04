/**
 * 插入排序
 */

const randomNums = require('./array_test');

function insertionSort(randomArray) {
    let inner,
        temp,
        len = randomArray.dataStore.length,
        arr = randomArray.dataStore;

    for (let outer = 1; outer <= len - 1; outer++) {
        temp = arr[outer];
        inner = outer;
        while (inner > 0 && arr[inner - 1] >= temp) {
            arr[inner] = arr[inner - 1];
            inner--;

        }
        arr[inner] = temp;
        // console.log(`第${outer}：${randomArray.toString()}`);
    }
}


// 测试插入排序
let len = 10000;
let randomArray = randomNums(len);

const start = new Date();

insertionSort(randomArray);
console.log('\nsort:\n' + randomArray.toString());

const ms = new Date() -start;
console.log(`插入排序${len}个随机数，花费${ms}ms`);