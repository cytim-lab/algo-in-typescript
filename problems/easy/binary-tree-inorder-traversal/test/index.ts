import { assert } from 'chai';
import { Test } from '../../../../test/Test';
import TreeNode from '../lib/TreeNode';

class BinaryTreeInorderTraversalTest extends Test {
  transformTestInputsForSolution(inputs: any[]) {
    const values: (number | null)[] = inputs[0];
    return [this.toTree(values)];
  }

  assertEqual(actualOutput: number[], testOutput: number[]) {
    assert.sameOrderedMembers(actualOutput, testOutput);
  }

  private toTree(values: (number | null)[]): TreeNode | null {
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
  }
}

const test = new BinaryTreeInorderTraversalTest([
  {
    inputs: [[1, null, 2, 3]],
    output: [1, 3, 2],
  },
  {
    inputs: [[]],
    output: [],
  },
  {
    inputs: [[1]],
    output: [1],
  },
]);

export default test;
