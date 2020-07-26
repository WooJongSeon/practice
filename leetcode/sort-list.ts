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
function makeAnswer(arr: any, node: any): ListNode {
  while (arr.length) {
    arr.shift()
  }
  return makeAnswer(new ListNode(arr[0]))
}
function solution(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return null;
  }
  const temp: number[] = [];
  pushList(head, temp); // 리스트 세팅 끝
  //정렬
  temp.sort((a, b) => a - b); // 오름차순 정렬 완료
  // list 에 하나씩 다시 push

  console.log(temp);
  return null;
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
console.log(solution(temp));

// -1->5->3->4->0