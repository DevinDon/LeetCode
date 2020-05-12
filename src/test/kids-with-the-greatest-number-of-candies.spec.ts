import { kidsWithCandies } from '../main/kids-with-the-greatest-number-of-candies';

interface Test {
  param: [number[], number];
  return: boolean[];
}

describe('拥有最多糖果的孩子', () => {

  const tests: Test[] = [
    { param: [[2, 3, 5, 1, 3], 3], return: [true, true, true, false, true] },
    { param: [[4, 2, 1, 1, 2], 1], return: [true, false, false, false, false] },
    { param: [[12, 1, 12], 10], return: [true, false, true] }
  ];

  for (const test of tests) {
    it(`input: ${JSON.stringify(test.param)}\toutput: ${JSON.stringify(test.return)}`, () => expect(kidsWithCandies.apply(undefined, test.param)).toEqual(test.return));
  }

});
