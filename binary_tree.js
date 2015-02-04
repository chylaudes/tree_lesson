function BinTree(value){
  this.left = null;
  this.right = null;
  this.value = value;
};


BinTree.prototype.max = function(){

  if (this.right !== null) {
  // recursive condition
    return this.right.max(); 
  } else {
  // terminal condition
    return this.value;
  }
};

BinTree.prototype.insert = function (newVal) {
  if (newVal <= this.value) {
    if (this.left === null) {
      this.left = new BinTree(newVal);
    } else {
      this.left.insert(newVal);
    }
  } else {
    if (this.right === null) {
      this.right = new BinTree(newVal);
    } else {
      this.right.insert(newVal);
    }
  }
  return this;
};


BinTree.prototype.height = function (){
  var maxHeight = 0;
  if (this.left) {
    var leftHeight = 1 + this.left.height();
     if (leftHeight > maxHeight) {
      maxHeight = leftHeight;
     }
  }

 if  (this.right) {
  var rightHeight = 1 + this.right.height();
  if (rightHeight > maxHeight) {
    maxHeight = rightHeight
  }
 }


  return maxHeight;
};


BinTree.prototype.search = function (val) {
  if (this.value === val) {
    return true;
  } else if (this.value > val && this.left){
    return this.left.search(val);
  } else if (this.value < val && this.right) {
    return this.right.search(val);
  }
  return false;
};



if (typeof module !== "undefined") {
  module.exports = BinTree;
}
