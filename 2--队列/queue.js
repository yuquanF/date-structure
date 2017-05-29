class Queue{
    constructor(){
        this.item = [];
    }
    /* 进队列 */
    enQueue(element){
        this.item.push(element);
    }
    /* 出队列 */
    deQueue(){
        return this.item.shift();
    }
    /* 返回队首元素 */
    front(){
        return this.item[0];
    }
    /* 判断队列是否为空 */
    isEmpty(){
        return this.item.length === 0;
    }
    /* 队列大小 */
    size(){
        return this.item.length;
    }
    /* 打印队列 */
    print(){
        console.log(this.item.toString());
    }
}

/* 测试 */
/*
let queue = new Queue();

queue.enQueue('feng');
queue.enQueue('zhang');

queue.print();

console.log(queue.size());
console.log(queue.isEmpty());
console.log(queue.deQueue());

queue.print();
*/
