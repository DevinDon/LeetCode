// 给定一个 N 叉树，返回其节点值的前序遍历。

// 返回其前序遍历: [1,3,5,6,2,4]。

// 说明: 递归法很简单，你可以使用迭代法完成此题吗?

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


interface Node<T = any> {
  val: T;
  children: Node<T>[];
}

class Solution {

  public result: number[] = [];

  public cursr(root?: Node<number>) {
    // 判断节点是否存在
    if (!root) { return; }
    // 节点值入栈
    this.result.push(root.val);
    // 前序遍历子节点
    for (const node of root.children) {
      this.cursr(node);
    }
  }

}

/**
 * N 叉树的前序遍历
 *
 * @param {Node<number>} root 根节点
 * @returns {number[]} 返回前序遍历结果
 */
export function preorder(root?: Node<number>): number[] {
  const solution = new Solution();
  solution.cursr(root);
  return solution.result;
}
