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
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  const returnValues = (arr, obj) => {
    if (obj && obj['val'] !== undefined) {
      arr.push(obj['val']);
      return returnValues(arr, obj['next']);
    } else {
      return;
    }
  }
  const inputObj = (resultList, initNodeList, limit, count) => {
    if (count === limit) {
      return;
    }
    if (initNodeList[count].val === undefined) {
      return;
    } else {
      resultList.val = initNodeList[count].val;
      if (initNodeList[count].val === arr[arr.length - 1]) {
        resultList.next = null;
      } else {
        resultList.next = {};
      }
      count++;
      inputObj(resultList.next, initNodeList, limit, count);
    }
  }
  const arr = [];
  returnValues(arr, head);

  const initNodeList = [];
  arr.sort((a, b) => a - b)
    .map((v, i) => {
      initNodeList.push(new ListNode(v, arr[i + 1]))
    })
  const resultList = {};

  let count = 0;
  inputObj(resultList, initNodeList, initNodeList.length, count);

  return resultList;
};
// 0 ~length - 1
// 1 ~length - 1
// 2 ~length - 1
// 3 ~length - 1
// 4 ~length - 1

// 1,1 dls


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
const obj2 = {
  "val": -1,
  "next": {
    "val": 5,
    "next": {
      "val": 3,
      "next": {
        "val": 4,
        "next": {
          "val": 0,
          "next": null
        }
      }
    }
  }
}
// - 1 -> 5 -> 3 -> 4 -> 0
console.log(sortList(obj2));
// 4->2->1->3
