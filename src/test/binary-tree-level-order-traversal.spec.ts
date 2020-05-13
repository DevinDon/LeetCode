import { levelOrder } from '../main/binary-tree-level-order-traversal';

describe('102. 二叉树的层序遍历', () => {

  const tests = [
    { param: [[3, 9, 20, null, null, 15, 7]], return: [[3], [9, 20], [15, 7]] }
  ];

  for (const test of tests) {
    it(
      `input: ${JSON.stringify(test.param)}\toutput: ${JSON.stringify(test.return)}`,
      () => expect(levelOrder.apply(undefined, test.param as any)).toEqual(test.return)
    );
  }

});
