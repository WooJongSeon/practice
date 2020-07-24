var sortList = function (head) {
  if (!head || !head.next) return head

  let slow = head;
  let fast = head;
  let splitList = {};

  while (fast && fast.next) {
    splitList = slow;
    slow = slow.next;
    fast = fast.next.next
  }

  splitList.next = null
  return merge(sortList(head), sortList(slow))
};

function merge(a, b) {
  let curr = {}
  const head = curr
  while (a && b) {
    if (a.val < b.val) {
      curr.next = a
      a = a.next
    } else {
      curr.next = b
      b = b.next
    }
    curr = curr.next
  }

  while (a) {
    curr.next = a
    a = a.next
    curr = curr.next
  }

  while (b) {
    curr.next = b
    b = b.next
    curr = curr.next
  }

  return head.next
}


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
console.log(sortList(obj2));
