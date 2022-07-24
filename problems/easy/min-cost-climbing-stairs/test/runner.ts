import Solution from '../lib/Solution';

const tests = [
  {
    input: [10, 15, 20],
    output: 15,
  },
  {
    input: [1, 100, 1, 1, 1, 100, 1, 1, 100, 1],
    output: 6,
  },
];

export const run = (solution: Solution) => {
  for (const i in tests) {
    const test = tests[i];

    console.log(`[Test Case #${i}]`);
    console.log(`Input:           [${test.input}]`);
    console.log(`Expected Output: ${test.output}`);

    let output;
    try {
      output = solution(test.input);
      console.log(`Actual Output:   ${output}`);
    } catch (e) {
      throw new Error(`Failed to run the solution: ${e}`);
    }

    if (test.output !== output) {
      throw new Error(
        'Test case failed: The actual output does not match the expected output'
      );
    }

    console.log();
  }

  console.log('All test cases passed!');
};
