import { Test } from '../../../../test/Test';

class MinCostClimbingStairsTest extends Test {}

const test = new MinCostClimbingStairsTest([
  {
    inputs: [[10, 15, 20]],
    output: 15,
  },
  {
    inputs: [[1, 100, 1, 1, 1, 100, 1, 1, 100, 1]],
    output: 6,
  },
]);

export default test;
