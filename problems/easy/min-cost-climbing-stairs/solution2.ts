import Solution from './lib/Solution';

/**
 * Dynamic Programming (bottom-up)
 */

const solution: Solution = (cost) => {
  const memo: Record<number, number> = {
    [cost.length - 1]: cost[cost.length - 1],
    [cost.length - 2]: cost[cost.length - 2],
  };

  for (let i = cost.length - 3; i >= 0; i--) {
    memo[i] = cost[i] + Math.min(memo[i + 1], memo[i + 2]);
  }

  return Math.min(memo[0], memo[1]);
};

export default solution;
