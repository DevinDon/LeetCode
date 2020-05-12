import { MinStack } from '../main/min-stack';

describe('Min stack', () => {

  const tests = [
    { method: 'push', param: [-2], return: undefined },
    { method: 'push', param: [0], return: undefined },
    { method: 'push', param: [-3], return: undefined },
    { method: 'getMin', param: [], return: -3 },
    { method: 'pop', param: [], return: undefined },
    { method: 'top', param: [], return: 0 },
    { method: 'getMin', param: [], return: -2 }
  ];

  let stack: MinStack = new MinStack();

  for (const test of tests) {
    it(
      `method: ${JSON.stringify(test.method)}\tinput: ${JSON.stringify(test.param)}\toutput: ${JSON.stringify(test.return)}`,
      () => expect(stack[test.method](...test.param)).toBe(test.return)
    );
  }

});
