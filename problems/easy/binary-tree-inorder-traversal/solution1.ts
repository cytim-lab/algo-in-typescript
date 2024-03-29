import Solution from './lib/Solution';
import TreeNode from './lib/TreeNode';

/**
 * Recursion
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 */

const traverse = (root: TreeNode | null, output: number[]) => {
  if (!root) {
    return output;
  }

  traverse(root.left, output);
  output.push(root.val);
  traverse(root.right, output);

  return output;
};

const solution: Solution = (root) => traverse(root, []);

export default solution;
