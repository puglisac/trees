/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
  min() {
    let depth=1;
    let toVisitQueue = [this];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      if (!current.left | ! current.right) {
        return depth;
      }
      depth+=1;
      toVisitQueue.push(current.left);
      toVisitQueue.push(current.right);
    }    
  }

  minDepthHelper() {
    if (this.left === null && this.right === null) return 1;
    if (this.left === null) return this.right.minDepthHelper() + 1;
    if (this.right === null) return this.left.minDepthHelper() + 1;
    return (
      Math.min(this.left.minDepthHelper(), this.right.minDepthHelper()) + 1
    );
  }

  maxDepthHelper() {
    if (this.left === null && this.right === null) return 1;
    if (this.left === null) return this.right.maxDepthHelper() + 1;
    if (this.right === null) return this.left.maxDepthHelper() + 1;
    return (
      Math.max(this.left.maxDepthHelper(), this.right.maxDepthHelper()) + 1
    );
  }

  findNextLarger(target){
    let stack=[this];
    let result=null;

    while(stack.length){
      let current=stack.pop()
      const shouldChange = current.val<result||result==null
      if(shouldChange && current.val>target){
        result=current.val
      }
      if (current.left) stack.push(current.left);
      if (current.right) stack.push(current.right);
    }
    return result;
  }

}
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    return (this.root ? this.root.minDepthHelper() : 0);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    return (this.root ? this.root.maxDepthHelper() : 0);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    // return (this.root ? this.root.maxSumHelper() : 0);
    let result = 0;

    function maxSumHelper(node) {
      if (node === null) return 0;
      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);
      result = Math.max(result, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    maxSumHelper(this.root);
    return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    return (this.root ? this.root.findNextLarger(lowerBound) : null);
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
