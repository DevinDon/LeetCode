import { TreeNode } from "./tree";

// 给定一个二叉树，返回它的前序遍历。

// 示例:

// 输入: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// 输出: [1,2,3]
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/binary-tree-preorder-traversal
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


// 解法一：辅助缓存
class Solution {

  /** 辅助缓存 */
  public result: number[] = [];

  public cursr(root?: TreeNode) {
    // 判断节点是否存在
    if (!root) { return; }
    // 当前节点值入栈
    this.result.push(root.val);
    // 前序遍历左子树
    this.cursr(root.left);
    // 前序遍历右子树
    this.cursr(root.right);
  }

}

export function preorderTraversal(root?: TreeNode): number[] {
  const solution = new Solution();
  solution.cursr(root);
  return solution.result;
}

/**
 * 二叉树的前序遍历
 *
 * @param {TreeNode<number>} root 根节点
 * @returns {number[]} 返回前序遍历结果
 */
export function preorderTraversalWithSelfCache(root?: TreeNode<number>): number[] {
  let result: number[] = [];
  if (!root) { return result; }
  result.push(root.val);
  return result.concat(
    preorderTraversalWithSelfCache(root.left),
    preorderTraversalWithSelfCache(root.right)
  );
}
