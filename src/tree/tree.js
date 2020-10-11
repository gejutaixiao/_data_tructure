class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //insert(key): 向树中插入一个新的键
  insert(key) {
    //1.根据key创建Node节点
    const newNode = new Node(key);

    //2.如果原来的树是一颗空树
    if(this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    if(newNode.key > node.key) {
      if(node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    } else {
      if(node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    }
  }


  //二叉树的遍历是指从根节点出发，按照某种次序依次访问二叉树中所有结点，使得每个结点被访问一次且仅被访问一次。
  //1.前序遍历：规则是若二叉树为空，则空操作返回，否则先访问根结点，然后前序遍历左子树，再前序遍历右子树  
  //2.中序遍历：规则是若树为空，则空操作返回，否则从根节点开始(注意并不是先访问根节点)，中序遍历根节点的左子树，然后是访问根节点，最后中序遍历右子树
  //3.后序遍历：规则是若树为空，则空操作返回，否则从左到右先先叶子后结点的方式遍历访问左右子树，最后是访问根结点
  //4.层序遍历：规则是若树为空，则空操作返回，否则从树的第一层，也就是根结点开始访问，从上而下逐层遍历，在同一层中，按从左到右的顺序对接点逐个访问。

  //先序遍历preOrderTraverse: 通过先序遍历方式遍历所有节点
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root);
  }

  preOrderTraverseNode(node) {
    if(node === null) {
      return;
    }

    console.log(node.key); //直接访问
    this.preOrderTraverseNode(node.left);

    this.preOrderTraverseNode(node.right);
  }

  //中序遍历
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root);
  }

  inOrderTraverseNode(node) {
    if(node === null) {
      return;
    }

    this.inOrderTraverseNode(node.left);
    console.log(node.key);
    this.inOrderTraverseNode(node.right);
  }

  //后序遍历
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root);
  }

  postOrderTraverseNode(node) {
    if(node === null) {
      return;
    }

    this.postOrderTraverseNode(node.left);
    this.postOrderTraverseNode(node.right);
    console.log(node.key);
  }

  //min: 返回树中的最小值
  min() {
    let node = this.root;
    while(node.left) {
      node = node.left;
    }
    return node.key;
  }

  //max: 返回树中的最大值
  max() {
    let node = this.root;
    while(node.right) {
      node = node.right;
    }
    return node.key;
  }

  //search(key): 在树中查找一个键，如果节点在，则返回true
  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    //1.判断node有没有值
    if(node === null) {
      return false;
    }

    //2.判断搜索的key和结点值的关系
    if(key < node.key) {
      return this.searchNode(node.left, key);
    } else if(key > node.key) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }

  search2(key) {
    let node = this.root;

    while(node !== null) {
      if(key < node.key) {
        node = node.left;
      } else if(key > node.key) {
        node = node.right;
      } else {
        return true;
      }
    }
    return false
  }

  //remove(key): 从树中一处某个节点
  remove(key) {
    //1.定义一些变量记录状态
    let current = this.root;
    let parent = null;
    let isLeftChild = true;

    //2.开始查找要删除的节点
    while(current.key !== key) {
      parent = current;
      if(key < current.key) {
        isLeftChild = true;
        current = current.left;
      } else {
        isLeftChild = false;
        current = current.right;
      }

      if(current === null) {
        return false;
      }
    }

    //3.找到节点：current
    //情况一：删除的节点是叶子节点（没有子节点）
    if(current.left === null && current.right === null) {
      if(current === this.root) {
        this.root = null;
      } else if(isLeftChild) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }

    //情况二：删除的节点只有一个子节点
    else if(current.right === null) {  //只有左子节点
      if(current == this.root) {
        this.root = current.left;
      } else if(isLeftChild) {
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
    } else if(current.left === null) { //只有右子节点
      if(current == this.root) {
        this.root = current.right;
      } else if(isLeftChild) {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
    } else {
      //1.获取后继节点
      let successor = this.getSuccessor(current);

      //2.判断是否是根节点
      if(this.root === current) {
        this.root = successor;
      } else if(isLeftChild) {
        parent.left = successor;
      } else {
        parent.right = successor;
      }
      successor.left = current.left;
    }
    return true;
  }


  getSuccessor(delNode) {
    // 1.定义变量，来存储临时节点
    let successerParent = delNode;
    let successer = delNode;
    let current = delNode.right;

    // 2.寻找节点
    while(current !== null) {
      successerParent = successer;
      successer = current;
      current = current.left;
    }

    // 3.如果后继节点不是删除节点的右节点
    if(successer != delNode.right) {
      successerParent.left = successer.right;
      successer.right = delNode.right;
      // successer.left = delNode.left;
    } 
    return successer;
  }
}
