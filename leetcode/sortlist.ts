/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function pushList(head: ListNode, arr: number[]): any {
  if (!head.next) {
    arr.push(head.val);
    return;
  } else {
    arr.push(head.val);
    return pushList(head.next, arr);
  }
}

// 연결리스트의 마지막 노드 찾기
function findLastNode(head: ListNode | null): any {
  if (!head || !head.next) {
    return head;
  } else {
    return findLastNode(head.next);
  }
}

function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  const temp: number[] = [];
  pushList(head, temp); // 리스트 세팅 끝
  // //정렬
  temp.sort((a, b) => a - b); // 오름차순 정렬
  // // list 에 하나씩 다시 push
  const firstNode = new ListNode(temp[0]);
  for (let i = 1; i < temp.length; i++) {
    const last: any = findLastNode(firstNode);
    last.next = { val: temp[i], next: null }

  }
  return firstNode;
};

const temp = new ListNode(-1,
  new ListNode(5,
    new ListNode(3,
      new ListNode(4,
        new ListNode(0, null)
      )
    )
  )
);
const oneNode = new ListNode(1, null);
console.log(sortList(oneNode));

// -1->5->3->4->0