class DoubleNode {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}
class DoubleLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    /* 在任意位置插入一个新元素 */
    insert(position, ele) {
        if (position >= 0 && position <= this.length) {
            let node = new DoubleNode(ele),
                current = this.head,
                previous,
                index = 0;

            if (position === 0) { // 在第一个位置添加
                if (!this.head) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    this.head = node;
                }
            } else if (position === this.length) { // 最后一项
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;

                current.prev = node;
                node.prev = previous;
            }

            this.length++;
            return true;

        } else {
            return false;
        }
    }

    /* 从任意位置移除元素 */
    removeAt(position) {
        if (position > -1 && position < this.length) {
            let current = this.head,
                previous,
                index = 0;

            /* 移除第一项 */
            if (position === 0) {
                this.head = current.next;

                // 还需要判断(原链表)是否只有一项，是的话还要更新tail
                if (this.length === 1) {
                    this.tail = null;
                } else {
                    this.head.prev = null;
                }
            } else if (position === this.length - 1) { // 移除最后一项
                current = this.tail;
                this.tail = current.prev;

                // 还需要判断(原链表)是否只有一项，是的话还要更新tail
                if (this.length === 1) {
                    this.head = null;
                } else {
                    this.tail.next = null;
                }
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                /* 将previous和current的下一项链接起来，跳过current */
                previous.next = current.next;
                current.next.prev = previous;
            }
            this.length--;
            return current.element;
        } else {
            return null;
        }
    }

    remove(ele) {
        let index = this.indexOf(ele);
        return this.removeAt(index);
    }

    indexOf(ele) {
        let current = this.head,
            index = 0;

        if (ele === current.element) { // 检查第一项
            return 0;
        }
        while (current.next) { // 检查中间项
            if (ele === current.element) {
                return index;
            }
            current = current.next;
            index++;
        }

        if (ele === current.element) { // 检查最后一项
            return index;
        }

        return -1;
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    toString() {
        let current = this.head,
            string = current ? current.element : '';

        while (current && current.next) {
            current = current.next;
            string += ',' + current.element;
        }

        return string;
    }

    /* 倒叙显示所有项 */
    inverseToString() {
        let current = this.tail,
            string = current ? current.element : "";

        while (current && current.prev) {
            current = current.prev;
            string += ',' + current.element;
        }
        return string;
    }

    print() {
        console.log(this.toString());
    }

    printInverse() {
        console.log(this.inverseToString());
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }
}

let doubleList = new DoubleLinkedList();

doubleList.insert(0, 0);
console.log(doubleList);

doubleList.insert(1, 1);
console.log(doubleList);

doubleList.insert(2, 2);
console.log(doubleList);

doubleList.insert(0, 'new head');
console.log(doubleList);

/*/!* 移除 index等于2 及Element等于 1的节点*!/
doubleList.removeAt(2); // element = 1
console.log(doubleList);

doubleList.removeAt(2); // element = 2
console.log(doubleList);

doubleList.removeAt(1);
console.log(doubleList); // '0'

doubleList.removeAt(0); // 'head'
console.log(doubleList);*/

doubleList.print();
doubleList.printInverse();
