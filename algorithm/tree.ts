class BinaryTreeNode {
  val: number;
  leftNode: BinaryTreeNode;
  rightNode: BinaryTreeNode;

  constructor(val: number, leftNode: BinaryTreeNode | null, rightNode: BinaryTreeNode | null) {
    this.val = val;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
  }
  add(val: number): BinaryTreeNode {
    if (this.val < val) { // 추가하려는 값이 더 큰 경우

    }
    if (this.val > val) { // 추가 하려는 값이 더 작은 경우
      return new BinaryTreeNode(val, this, null);
    }
  }
}

const main = new BinaryTreeNode(3, null, null);

console.log(main); // main node 1

const node = main.add(2);

console.log(node);

const node2 = node.add(1);

console.log(node2);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//               1 루트            1층  2의 0제곱
//       2       ,       3        2층  2의 1제곱
//    4  , 5     ,    6  ,  7     3층  2의 2제곱
// 8, 9  10 11     12 13   14 15  4층  2의 3제곱


