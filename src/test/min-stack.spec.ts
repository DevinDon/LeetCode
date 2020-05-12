import { MinStack } from '../main/min-stack';

describe('Hello, world!', () => {

  let stack: MinStack;

  beforeAll(done => {
    stack = new MinStack();
    done();
  });

  it(`
输入：
["push","push","push","getMin","pop","top","getMin"]
[[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,-3,null,0,-2]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/min-stack
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
  `, done => {
    const tests = [
      { method: 'push', param: [-2], return: undefined },
      { method: 'push', param: [0], return: undefined },
      { method: 'push', param: [-3], return: undefined },
      { method: 'getMin', param: [], return: -3 },
      { method: 'pop', param: [], return: undefined },
      { method: 'top', param: [], return: 0 },
      { method: 'getMin', param: [], return: -2 }
    ];
    for (const item of tests) {
      expect(stack[item.method](...item.param)).toBe(item.return);
    }
    done();
  });

});
