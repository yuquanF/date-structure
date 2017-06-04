/**
 * 选择排序,将min理解为指向最小值的索引的指针，理解更佳
 */
const randomNums = require('./array_test');

function selectionSort(randomArray) {
    let min,
        arr = randomArray.dataStore,
        len = arr.length;

    for (let outer =0;outer<=len-2;outer++) {
        min = outer;
        for (let inner = outer+1;inner<=len-1;inner++) {
            if (arr[inner]<arr[min]){
                min = inner;
            }
        }
        randomArray.swap(arr, outer, min);
        console.log(`第${outer}：${randomArray.toString()}`);
    }
}

// 测试选择排序
let randomArray = randomNums(10);
selectionSort(randomArray);
console.log('sort:\n' + randomArray.toString());