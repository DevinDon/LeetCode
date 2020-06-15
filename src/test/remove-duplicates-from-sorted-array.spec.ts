import { removeDuplicates } from '../main/remove-duplicates-from-sorted-array';

describe('Remove Duplicates\n删除排序数组中的重复项', () => {

  const tests = [
    { param: [[1, 1, 2]], return: 2 },
    { param: [[0, 1, 2, 3, 3]], return: 4 },
    { param: [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]], return: 5 }
  ];

  for (const test of tests) {
    it(
      `input: ${JSON.stringify(test.param)}\toutput: ${JSON.stringify(test.return)}`,
      () => expect(removeDuplicates.apply(undefined, test.param as any)).toBe(test.return)
    );
  }

});
