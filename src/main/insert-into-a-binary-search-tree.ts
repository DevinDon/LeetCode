import { TreeNode } from './tree';

// 给定二叉搜索树（BST）的根节点和要插入树中的值，将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。 保证原始二叉搜索树中不存在新值。

// 注意，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。 你可以返回任意有效的结果。

// 例如

// 给定二叉搜索树:

//         4
//        / \
//       2   7
//      / \
//     1   3

// 和 插入的值: 5
// 你可以返回这个二叉搜索树:

//          4
//        /   \
//       2     7
//      / \   /
//     1   3 5
// 或者这个树也是有效的:

//          5
//        /   \
//       2     7
//      / \
//     1   3
//          \
//           4

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/insert-into-a-binary-search-tree
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * 搜索二叉树的插入操作
 *
 * @param {TreeNode<number>} root
 * @param {number} val
 * @return {TreeNode}
 */
export function insertIntoBST(root: TreeNode<number>, val: number): TreeNode<number> {
  if (!root) { return { val }; }
  if (val < root.val) {
    root.left ? insertIntoBST(root.left, val) : root.left = { val };
  } else {
    root.right ? insertIntoBST(root.right, val) : root.right = { val };
  }
  return root;
}

// class Solution {

//   constructor(private parent: TreeNode<number>) { }

//   public recur(node: TreeNode<number>, val: number) {
//     if (!node) { this.parent.}
//   }

// }
