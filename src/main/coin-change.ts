// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 - 1。



// 示例 1:

// 输入: coins = [1, 2, 5], amount = 11
// 输出: 3
// 解释: 11 = 5 + 5 + 1
// 示例 2:

// 输入: coins = [2], amount = 3
// 输出: -1


// 说明:
// 你可以认为每种硬币的数量是无限的。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/coin-change
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

const cache = {};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
export function coinChange(coins: number[], amount: number): number {

  if (amount < 0) { return -1; }
  if (amount === 0) { return 0; }
  if (cache[amount]) { return cache[amount]; }
  let sum = Number.MAX_VALUE;

  for (const coin of coins) {
    const sub = coinChange(coins, amount - coin);
    if (sub === -1) { continue; }
    sum = Math.min(sum, sub + 1);
  }

  cache[amount] = sum === Number.MAX_VALUE ? -1 : sum;
  return cache[amount];

}

const result = coinChange([2], 3);
console.log(result);
