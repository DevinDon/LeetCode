import { TreeNode } from './tree';

// 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

// 一般来说，删除节点可分为两个步骤：

// 首先找到需要删除的节点；
// 如果找到了，删除它。
// 说明： 要求算法时间复杂度为 O(h)，h 为树的高度。

// 示例:

// root = [5,3,6,2,4,null,7]
// key = 3

//     5
//    / \
//   3   6
//  / \   \
// 2   4   7

// 给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。

// 一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。

//     5
//    / \
//   4   6
//  /     \
// 2       7

// 另一个正确答案是 [5,2,6,null,4,null,7]。

//     5
//    / \
//   2   6
//    \   \
//     4   7

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/delete-node-in-a-bst
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 搜索二叉树的删除操作
 *
 * @param {TreeNode<number>} root
 * @param {number} key
 * @return {TreeNode<number>}
 */
export function deleteNode(root: TreeNode<number>, key: number): TreeNode<number> {
  const solution = new Solution();
  return solution.recur(root, key)!;
}

class Solution {

  private next(node: TreeNode<number>) {
    let nextNode = node.right!;
    while (nextNode.left) {
      nextNode = nextNode.left;
    }
    return nextNode;
  }

  private previous(node: TreeNode<number>) {
    let previousNode = node.left!;
    while (previousNode.right) {
      previousNode = previousNode.right;
    }
    return previousNode;
  }

  public recur(node: TreeNode<number> | undefined, key: number) {
    if (!node) { return undefined; }
    if (key < node.val) {
      // 搜索左子树
      node.left = this.recur(node.left, key);
    } else if (key > node.val) {
      // 搜索右子树
      node.right = this.recur(node.right, key);
    } else {
      // 找到节点
      if (node.right) {
        // 有更大的值
        node.val = this.next(node).val;
        // 从左子树中移除被升为节点的子叶
        node.right = this.recur(node.right, node.val);
      } else if (node.left) {
        // 有更小的值
        node.val = this.previous(node).val;
        // 从右子树中移除被升为节点的子叶
        node.left = this.recur(node.left, node.val);
      } else {
        // 直接移除子叶
        node = undefined;
      }
    }
    return node;
  }

}
