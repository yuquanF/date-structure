/**
 * 二叉查找树
 */
/* 首先定义一个节点*/
class Node {
    constructor(data, left, right) {
        this.data = data; // 节点数据
        this.count = 1; // 计数
        this.left = left; // 指向左子节点
        this.right = right; // 指向右子节点
    }

    /* 显示当前节点的数据内容 */
    show() {
        return this.data;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    /* 插入一个新的节点 */
    insert(data) {
        let n = this.find(data);
        if(n!== null){
            // 说明树中已经存在数据为data的节点，更新该节点count即可
            n.count++;
            return true;
        }
        let node = new Node(data, null, null);

        if (this.root === null) {
            this.root = node;
        } else {
            let current = this.root,
                parent;
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current === null) {
                        parent.left = node;
                        break;
                    }
                } else {
                    current = current.right;
                    if (current === null) {
                        parent.right = node;
                        break;
                    }
                }
            }
        }
    }

    /* 中序遍历(数据值从小到大), 默认传入树的根节点，可以传其他节点进来，遍历子树 */
    inOrder(node = this.root) {
        let str = []; // 用于存储遍历的数据
        _inOrder(node);
        // console.log("中序遍历：" + str.join(' '));
        return str;
        function _inOrder(node) {
            if (node !== null) {
                _inOrder(node.left);
                str.push(node.show());
                _inOrder(node.right);
            }
        }
    }

    /* 先序遍历（与中序唯一区别是if语句中的代码顺序） */
    preOrder(node = this.root) {
        let str = []; // 用于存储遍历的数据
        _preOrder(node);
        // console.log("先序遍历：" + str.join(' '));
        return str;
        function _preOrder(node) {
            if (node !== null) {
                str.push(node.show());
                _preOrder(node.left);
                _preOrder(node.right);
            }
        }
    }

    /* 后序遍历（与中序唯一区别是if语句中的代码顺序） */
    postOrder(node = this.root) {
        let str = []; // 用于存储遍历的数据
        _postOrder(node);
        // console.log("后序遍历：" + str.join(' '));
        return str;
        function _postOrder(node) {
            if (node !== null) {
                _postOrder(node.left);
                _postOrder(node.right);
                str.push(node.show());
            }
        }
    }

    /* 查找最小值 */
    getMin() {
        return this.inOrder()[0];
    }

    /* 查找最大值 */
    getMax() {
        let len = this.inOrder().length;
        return this.inOrder()[len - 1];
    }

    /* 查找给定值 */
    find(data) {
        let current = this.root;
        while (current !== null) {
            if (data === current.data) {
                return current;
            } else if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return null;
    }

    /* 删除节点 */
    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, data) {
        return _removeNode(node, data);

        function _removeNode(node, data) {
            if (node === null) {
                return null;
            }

            if (data === node.data) {
                // 1、没有子节点
                if (node.left === null && node.right === null) {
                    return null;
                }

                // 2、没有左节点
                if (node.left === null) {
                    return node.right;
                }

                // 3、没有右节点
                if (node.right === null) {
                    return node.left;
                }

                // 4、有两个子节点
                let temNode = _getRightMin(node.right); // 找到右子树中最小的节点
                node.data = temNode.data;
                // 删除右子树中最小的那个节点
                node.right = _removeNode(node.right, temNode.data);
                return node;
            } else if (data < node.data) {
                node.left = _removeNode(node.left, data);
                return node;
            } else {
                node.right = _removeNode(node.right, data);
                return node;
            }
        }

        function _getRightMin(node) {
            let current = node;
            while (current.left !== null) {
                current = current.left;
            }
            return current;
        }
    }

    /* 返回节点个数 */
    size(){
       return this.inOrder().length;
    }

    /* 返回边数（除去根节点，剩下多少节点就有多少边） */
    getSide(){
        return this.size()-1;
    }
}

let nums = new BST();
nums.insert(56);
nums.insert(81);
nums.insert(22);
nums.insert(10);
nums.insert(30);
nums.insert(77);
nums.insert(92);

/* 测试中序遍历 */
console.log("中序：" + nums.inOrder().join(' ')); // 中序遍历：10 22 30 56 77 81 92


/* 测试先序遍历 */
// console.log('先序：' + nums.preOrder().join(' ')); // 先序遍历：56 22 10 30 81 77 92

/* 测试后序遍历 */
// console.log('后序：' + nums.postOrder().join(' ')); // 后序遍历：10 30 22 77 92 81 56

/* 最大最小值 */
// console.log('min: ' + nums.getMin());
// console.log('max: ' + nums.getMax());

/* 查找 30 */
// console.log(nums.find(56));

/*/!* 删除节点测试 *!/
let data = 56;
nums.remove(data);
console.log(`删除了数据为${data}的节点`);
console.log("中序：" + nums.inOrder().join(' '));*/

/* 测试计数 */
console.log('插入重复根节点前--root.count：'+nums.find(56).count);
nums.insert(56);
console.log('插入重复根节点后--root.count：'+nums.find(56).count);
console.log('插入重复根节点后--中序：'+nums.inOrder().join(' '));

/* 测试节点个数 */
console.log('节点个数：' + nums.size());