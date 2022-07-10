import Solution from './lib/Solution';
import TreeNode from './lib/TreeNode';
import { run } from './test/runner';

/**
 * Iteration with Stack
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 */

const solution: Solution = (root) => {
  const output: number[] = [];
  const stack: TreeNode[] = [];

  let current = root;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop() as TreeNode;
    output.push(current.val);

    current = current.right;
  }

  return output;
};

run(solution);
