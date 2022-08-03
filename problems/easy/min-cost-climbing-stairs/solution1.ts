import Solution from './lib/Solution';

/**
 * Dynamic Programming (top-down)
 */

const climb = (
  cost: number[],
  i: number,
  memo: Record<number, number>
): number => {
  switch (cost.length - (i + 1)) {
    case 1:
      return 0;
    case 2:
      return Math.min(cost[i + 1], cost[i + 2]);
    default:
      const step2 = i + 2;
      const step1 = i + 1;
      memo[step2] = memo[step2] ?? cost[step2] + climb(cost, step2, memo);
      memo[step1] = memo[step1] ?? cost[step1] + climb(cost, step1, memo);
      return Math.min(memo[step2], memo[step1]);
  }
};

const solution: Solution = (cost) => {
  return climb(cost, -1, {});
};

export default solution;
