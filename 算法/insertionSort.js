/**
 * 插入排序
 */

const randomNums = require('./array_test');

function insertionSort(randomArray) {
    let inner,
        temp,
        arr = randomArray.dataStore,
        len = arr.length;
    for (let outer = 1; outer <= len - 1; outer++) {
        temp = arr[outer];
        inner = outer;
        while (inner > 0 && arr[inner - 1] >= temp) {
            arr[inner] = arr[inner - 1];
            inner--;

        }
        arr[inner] = temp;
        console.log(`第${outer}：${randomArray.toString()}`);
    }
}


// 测试插入排序
let randomArray = randomNums(10);
insertionSort(randomArray);
console.log('sort:\n' + randomArray.toString());