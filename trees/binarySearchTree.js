// BST class with some special methods

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null
  }

  insert(val, currentNode=this.root) {
    if(this.root === null) {
      this.root = new TreeNode(val)
      return;
    }

    if(val > currentNode.val) {
      if(currentNode.right === null) {
        currentNode.right = new TreeNode(val)
        return;
      }
      this.insert(val, currentNode.right)
    } else if(val < currentNode.val) {
      if(currentNode.left === null) {
        currentNode.left = new TreeNode(val)
        return;
      }
      this.insert(val, currentNode.left)
    }
  }

  search(val) {
    if(this.root === null) return false;
    let currentNode = this.root;
    
    while(currentNode !== null) {
      if(val === currentNode.val) return true;

      if(val > currentNode.val) {
        currentNode = currentNode.right
      } else {
        currentNode = currentNode.left
      }
    }

    return false
  }


  preOrderTraversal(currentNode = this.root) {
    if(currentNode === null) return;
    console.log(currentNode.val)
    
    this.preOrderTraversal(currentNode.left)
    this.preOrderTraversal(currentNode.right)
  }


  inOrderTraversal(currentNode = this.root) {
   if (currentNode!==null) {  
     this.inOrderTraversal(currentNode.left)
     console.log(currentNode.val);
     this.inOrderTraversal(currentNode.right)
   }
  }


  postOrderTraversal(currentNode = this.root) {
    if (currentNode!==null) {  
     this.postOrderTraversal(currentNode.left)
     this.postOrderTraversal(currentNode.right)
     console.log(currentNode.val)
   }
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    let array = [this.root]
    while(array.length > 0) {
      let currentNode = array[0]
      console.log(currentNode.val)
      if(currentNode.left !== null) {
        array.push(currentNode.left)
      }
      if(currentNode.right !== null) {
        array.push(currentNode.right)
      }
      array.shift();
    }

  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() { 
    let stack = [this.root]

    while(stack.length > 0) {
      let node = stack.pop()
      console.log(node.val)

      if(node.left !== null) {
        stack.push(node.left)
      }

      if(node.right !== null) {
        stack.push(node.right)
      }
    }
  }
}