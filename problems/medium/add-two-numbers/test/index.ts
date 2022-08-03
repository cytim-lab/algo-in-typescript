import { assert } from 'chai';
import { Test } from '../../../../test/Test';
import ListNode from '../lib/ListNode';

class AddTwoNumbersTest extends Test {
  transformTestInputsForSolution = (l1: number[], l2: number[]) => {
    return [this.toLinkedList(l1), this.toLinkedList(l2)];
  };

  transformActualOutputForDisplay(actualOutput: ListNode | null) {
    return this.toArray(actualOutput);
  }

  assertEqual(actualOutput: ListNode | null, testOutput: number[]) {
    const transformedActualOutput = this.toArray(actualOutput);

    assert.sameOrderedMembers(transformedActualOutput, testOutput);
  }

  private toLinkedList(values: number[]): ListNode | null {
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
  }

  private toArray(head: ListNode | null): number[] {
    const arr: number[] = [];

    while (head) {
      arr.push(head.val);
      head = head.next;
    }

    return arr;
  }
}

const test = new AddTwoNumbersTest([
  {
    inputs: [
      [2, 4, 3],
      [5, 6, 4],
    ],
    output: [7, 0, 8],
  },
  {
    inputs: [[0], [0]],
    output: [0],
  },
  {
    inputs: [
      [9, 9, 9, 9, 9, 9, 9],
      [9, 9, 9, 9],
    ],
    output: [8, 9, 9, 9, 0, 0, 0, 1],
  },
]);

export default test;
