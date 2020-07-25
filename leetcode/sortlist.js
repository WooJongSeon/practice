const merge = (h1, h2) => {
  const dummy = {};
  let cur = dummy;
  while (h1 && h2) {
    h1.val < h2.val
      ? ((cur.next = h1), (h1 = h1.next))
      : ((cur.next = h2), (h2 = h2.next));
    cur = cur.next;
  }
  cur.next = h1 || h2;
  return dummy.next;
};
const sortList = head => {
  if (!head || !head.next) return head;
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  fast = slow.next;
  slow.next = null;
  return merge(sortList(head), sortList(fast));
};

const obj2 = {
  val: -1,
  next: {
    val: 5,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 0,
          next: null
        }
      }
    }
  }
}
// - 1 -> 5 -> 3 -> 4 -> 0
console.log(sortList([]));
