import ListNode from '../lib/ListNode';
import Solution from '../lib/Solution';

const tests = [
  {
    input: [
      [2, 4, 3],
      [5, 6, 4],
    ],
    output: [7, 0, 8],
  },
  {
    input: [[0], [0]],
    output: [0],
  },
  {
    input: [
      [9, 9, 9, 9, 9, 9, 9],
      [9, 9, 9, 9],
    ],
    output: [8, 9, 9, 9, 0, 0, 0, 1],
  },
];

const toLinkedList = (values: number[]): ListNode | null => {
  if (!values.length || values[0] == null) {
    return null;
  }

  const head = new ListNode();
  let tail = head;

  for (const val of values) {
    tail.next = new ListNode(val);
    tail = tail.next;
  }

  return head.next;
};

const toArray = (head: ListNode | null): number[] => {
  const arr: number[] = [];

  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  return arr;
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
    console.log(`Input:           [[${test.input[0]}],[${test.input[1]}]]`);
    console.log(`Expected Output: [${test.output}]`);

    const l1 = toLinkedList(test.input[0]);
    const l2 = toLinkedList(test.input[1]);

    let output;
    try {
      const result = solution(l1, l2);
      output = toArray(result);
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
