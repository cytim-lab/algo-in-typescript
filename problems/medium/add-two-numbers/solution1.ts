import ListNode from './lib/ListNode';
import Solution from './lib/Solution';
import { run } from './test/runner';

/**
 * Recursion
 */

const traverse = (
  l1: ListNode | null,
  l2: ListNode | null,
  carry: number
): ListNode | null => {
  if (l1 == null && l2 == null) {
    return carry ? new ListNode(carry) : null;
  }

  const sum = carry + ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0);
  const val = sum % 10;
  const next = traverse(l1 && l1.next, l2 && l2.next, sum >= 10 ? 1 : 0);

  return new ListNode(val, next);
};

const solution: Solution = (l1, l2) => traverse(l1, l2, 0);

run(solution);
