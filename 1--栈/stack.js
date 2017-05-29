class Stack {
    constructor() {
        this.items = [];
    }

    /* 进栈 */
    push(elements) {
        this.items.push(elements);
    }

    /* 出栈（后进先出） */
    pop() {
        return this.items.pop();
    }

    /* 返回栈顶元素 */
    peek() {
        return this.items[this.items.length - 1];
    }

    /* 判断栈是否空 */
    isEmpty() {
        return this.items.length === 0;
    }

    /* 判断栈的大小 */
    size() {
        return this.items.length;
    }

    /* 清空栈 */
    clear() {
        this.items = [];
    }

    /* 打印栈中所有元素 */
    print() {
        console.log(this.items.toString());
    }
}

/*/!* 测试 *!/
 let stack = new Stack();
 /!*验证栈是否为空*!/
 console.log('isEmpty: ' + stack.isEmpty()); // true

 /!* 往栈中添加一些数据 *!/
 stack.push(1);
 stack.push(3);

 /!* 返回栈顶元素 *!/
 console.log('栈顶：' + stack.peek()); //  3

 /!* 返回栈的大小 *!/
 console.log('size:  ' + stack.size()); //  2

 /!*验证栈是否为空*!/
 console.log('isEmpty: ' + stack.isEmpty()); // false

 /!* 出栈 *!/
 console.log('出栈： '+stack.pop()); // 3
 console.log('出栈后size: ' + stack.size()); // 1

 /!* 打印所有栈元素 *!/
 console.log('输出所有栈元素');
 stack.print();

 /!* 清空栈 *!/
 stack.clear();
 console.log('clear stack');
 console.log('清空栈后size:  ' + stack.size()); // log: 0*/

/*
/!* 使用栈来实现10进制数转换到其他进制数 *!/
function baseConverter(decNum,base=2) {
    let remStack = new Stack(),
        rem,
        baseString = '',
        digits = '0123456789ABCDEF';

    while (decNum>0) {
        rem = Math.floor(decNum % base);
        remStack.push(rem);
        decNum = Math.floor(decNum / base);
    }

    while (!remStack.isEmpty()){
        /!*在将十进制转成二进制时，余数是0或1；
          在将十进制转成八进制时，余数是0到8之间的数；
          但是将十进制转成16进制时，余数是0到8之间的数字加上A、B、C、D、E和F（对应10、11、12、13、14和15）。因此，我们需要对栈中的数字做个转化才可以*!/
        baseString += digits[remStack.pop()];
    }

    return baseString;

}

/!* 测试 *!/
console.log('10的2进制：  ' + baseConverter(10)); // 10的2进制：  1010
console.log('2的2进制：  ' + baseConverter(2)); // 2的2进制：  10
console.log('255的16进制：  0x' + baseConverter(255,16)); // 255的16进制：  0xFF
console.log('255的8进制：  0o' + baseConverter(255,8));// 255的8进制：  0o377
*/
