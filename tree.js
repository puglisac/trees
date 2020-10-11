/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
  sum(sumArr=[]){
    sumArr.push(this.val);
    if(this.children.length){
      for(let children of this.children){
        children.sum(sumArr);
      }
    }
    const total = sumArr.reduce((a,b)=>a+b);
    return total;
  }
  evensCounter(total={counter: 0}){
    if(this.val%2==0){
      total.counter+=1;
    }
    if(this.children.length){
      for(let children of this.children){
        children.evensCounter(total);
      }
    }
    return total.counter
  }
  numsAboveCounter(bound, total={counter:0}){
    if(this.val>bound){
      total.counter+=1
    }
    if(this.children.length){
      for(let children of this.children){
        children.numsAboveCounter(bound, total);
      }
    }
    return total.counter
  }
}


class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    return (this.root ? this.root.sum() : 0);
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    return (this.root ? this.root.evensCounter() : 0);
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    return (this.root ? this.root.numsAboveCounter(lowerBound) : 0);
  }
}

module.exports = { Tree, TreeNode };
