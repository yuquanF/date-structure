/**
 * 数组测试平台，用于生成一系列的随机数，应用排序算法
 * */
class RandomArray {
    constructor(len) {
        this.dataStore = [];
        this.len = len;

        this.clear();
    }
    
    toString() {
        let str = '';
        for (let i = 0; i < this.len; i++) {
            str += this.dataStore[i] + ' ';
            if (i > 0 && i % 10 === 0) {
                str += '\n';
            }
        }
        return str;
    }

    clear() {
        for (let i = 0; i < this.len; i++) {
            this.dataStore[i] = 0;
        }
    }

    setData() {
        for (let i = 0; i < this.len; i++) {
            this.dataStore[i] =
                Math.floor(Math.random() * (this.len + 1));
        }
    }

    /* 用于交换数组元素 */
    swap(arr, index1, index2) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
}


// 生成随机数字
function randomNums(nums = 10) {
    let len = nums;
    let myNums = new RandomArray(len);
    myNums.setData();
    console.log(myNums.toString());

    return myNums;
}

module.exports =  randomNums;
