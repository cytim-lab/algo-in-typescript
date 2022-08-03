import ListNode from './lib/ListNode';
import Solution from './lib/Solution';

/**
 * Iteration
 */

const solution: Solution = (l1, l2) => {
  const head = new ListNode();
  let tail = head;
  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = carry;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = sum >= 10 ? 1 : 0;

    tail.next = new ListNode(sum % 10);
    tail = tail.next;
  }

  return head.next;
};

export default solution;
