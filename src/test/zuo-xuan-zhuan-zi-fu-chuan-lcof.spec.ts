import { reverseLeftWords } from '../main/zuo-xuan-zhuan-zi-fu-chuan-lcof';

interface Test {
  param: [string, number];
  return: string;
}

describe('左旋转字符串', () => {

  const tests: Test[] = [
    { param: ['abcdefg', 2], return: 'cdefgab' },
    { param: ['hhhi', 1], return: 'hhih' },
    { param: ['ptg', 2], return: 'gpt' },
    { param: ['abcdef', 5], return: 'fabcde' }
  ];

  for (const test of tests) {
    it(
      `input: ${JSON.stringify(test.param)}\toutput: ${JSON.stringify(test.return)}`,
      () => expect(reverseLeftWords.apply(undefined, test.param)).toBe(test.return)
    );
  }

});
