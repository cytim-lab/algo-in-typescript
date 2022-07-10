import Solution from '../lib/Solution';
import TreeNode from '../lib/TreeNode';

const tests = [
  {
    input: [1, null, 2, 3],
    output: [1, 3, 2],
  },
  {
    input: [],
    output: [],
  },
  {
    input: [1],
    output: [1],
  },
];

const toTree = (values: (number | null)[]): TreeNode | null => {
  if (!values.length || values[0] == null) {
    return null;
  }

  const root = new TreeNode(values.shift() as number);
  const queue = [root];

  while (queue.length) {
    const current = queue.shift() as TreeNode;

    const left = values.shift();
    if (left != null) {
      current.left = new TreeNode(left);
      queue.push(current.left);
    }

    const right = values.shift();
    if (right != null) {
      current.right = new TreeNode(right);
      queue.push(current.right);
    }
  }

  return root;
};

const isMatch = (x: number[], y: number[]): boolean => {
  if (x.length !== y.length) {
    return false;
  }

  for (const i in x) {
    if (x[i] !== y[i]) {
      return false;
    }
  }

  return true;
};

export const run = (solution: Solution) => {
  for (const i in tests) {
    const test = tests[i];

    console.log(`[Test Case #${i}]`);
    console.log(`Input:           [${test.input}]`);
    console.log(`Expected Output: [${test.output}]`);

    const root = toTree(test.input);

    let output;
    try {
      output = solution(root);
      console.log(`Actual Output:   [${output}]`);
    } catch (e) {
      throw new Error(`Failed to run the solution: ${e}`);
    }

    if (!isMatch(test.output, output)) {
      throw new Error(
        'Test case failed: The actual output does not match the expected output'
      );
    }

    console.log();
  }

  console.log('All test cases passed!');
};
