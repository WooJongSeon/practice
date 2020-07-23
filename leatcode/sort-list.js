function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const returnValues = (arr, obj) => {
  if (obj && obj['val'] !== undefined) {
    arr.push(obj['val']);
    return returnValues(arr, obj['next']);
  } else {
    return;
  }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  const arr = [];
  returnValues(arr, head);

  const initNodeList = [];
  arr.sort((a, b) => a - b)
    .map((v, i) => {
      initNodeList.push({ val: v === undefined ? 0 : v, next: arr[i + 1] === undefined ? null : arr[i + 1] })
    })

  const resultList = {};
  const f = (resultList, val) => {
    if (!resultList.val) {
      resultList.val = val;
      resultList.next = {};
    } else {
      if (val !== null) {
        f(resultList.next);
      }
    }
  }
  for (let i = 0; i < initNodeList.length; i++) {
    console.log(initNodeList[i].val)
    f(resultList, initNodeList[i].val);
  }

  console.log(resultList)

  // 0 ~length - 1
  // 1 ~length - 1
  // 2 ~length - 1
  // 3 ~length - 1
  // 4 ~length - 1

  // 1,1 dls

  // const makeObj = (resultList, obj) => {
  //   resultList.val = obj.val;
  //   resultList.next =
  //   return makeObj();
  // }
  // result.map((v) => {
  //   makeObj(v);
  // })
  return 'result';
};

new ListNode(4, 2);
new ListNode(2, 1);
new ListNode(1, 3);

const obj = {
  "val": 4,
  "next": {
    "val": 2,
    "next": {
      "val": 1,
      "next": {
        "val": 3,
        "next": null
      }
    }
  }
}

console.log(sortList(obj));
// 4->2->1->3
