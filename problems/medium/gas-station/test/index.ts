import { Test } from '../../../../test/Test';

class GasStationTest extends Test {}

const test = new GasStationTest([
  {
    inputs: [
      [1, 2, 3, 4, 5],
      [3, 4, 5, 1, 2],
    ],
    output: 3,
  },
  {
    inputs: [
      [2, 3, 4],
      [3, 4, 3],
    ],
    output: -1,
  },
]);

export default test;
