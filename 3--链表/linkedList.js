class Node {  // node辅助类，表示要加入列表的项
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.length = 0;   // 新建链表长度为0
        this.head = null; // 链表第一个节点的引用
    }

    /* 向列表尾部添加一个新的项。*/
    append(ele) {
        let node = new Node(ele),
            current = null;

        if (this.head === null) { // 表示这是链表第一个节点
            this.head = node;
        } else {
            current = this.head;

            /* 循环列表，直到找到最后一项 */
            while (current.next) {
                current = current.next;
            }

            /* 找到了最后一项了，最后一项的next是null 将其next赋值为node，建立链接*/
            current.next = node
        }
        this.length++; // 更新列表长度
    }

    /* 向列表的特定位置插入一个新的项。*/
    insert(position, ele) {
        if (position >= 0 && position <= this.length) {
            let node = new Node(ele),
                current = this.head,
                previous,
                index = 0;

            if (position === 0) {
                node.next = current;
                this.head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current.next;
                previous.next = node;
            }
            this.length++;
        } else {
            return false;
        }
    }

    /* 从列表的特定位置移除一项。*/
    removeAt(position) {
        /* 检查是否越界 */
        if (position > -1 && position < this.length) {
            let current = this.head,
                previous,
                index = 0;

            if (position === 0) { // 如果移除的是第一项
                this.head = current.next;
            } else {
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                /* 将previous与current的下一项链接 */
                previous.next = current.next;
            }

            this.length--;
            return current.element;
        } else {
            return null;
        }
    }

    /* 从列表中移除一项。*/
    remove(ele) {
        let index = this.indexOf(ele);
        return this.removeAt(index);
    }

    /* 返回元素在列表中的索引。如果列表中没有该元素则返回-1。*/
    indexOf(ele) {
        let current = this.head,
            index = 0;

        while (current) {
            if (current.element === ele) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    /* 如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。*/
    isEmpty() {
        return this.length === 0;
    }

    /* 返回链表包含的元素个数。*/
    size() {
        return this.length;
    }

    /* 由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的
     toString方法，让其只输出元素的值。*/
    toString() {
        let current = this.head,
            string = '';

        while (current) {
            string += current.element;
            current = current.next;
        }
        return string;
    }

    print() {
        console.log(this.toString());
    }

}

let list = new LinkedList();
console.log(list);

list.append(12);
console.log(list);

list.append(33);
console.log(list);

list.removeAt(1);
console.log(list);

list.insert(0, 'head');
console.log(list);

list.remove(12);
console.log(list);

list.remove(12);
 console.log(list);

console.log(list.toString());

console.log(list.indexOf('head'));
console.log(list.indexOf('12'));
