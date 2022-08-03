import Solution from './lib/Solution';

/**
 * Time complexity: O(n)
 */

const solution: Solution = (gas, cost) => {
  let startAt = 0;
  let tank = 0;
  let need = 0;

  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];
    if (tank < 0) {
      need += -tank;
      tank = 0;
      startAt = i + 1;
    }
  }

  // If the gas inside the tank can supply the needed gas for the previous
  // stations, we will be able complete the circuit by starting at `startAt`.
  if (tank - need >= 0) {
    return startAt;
  }

  return -1;
};

export default solution;
