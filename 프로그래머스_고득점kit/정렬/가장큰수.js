function solution(numbers) {
  var answer = numbers.sort((a, b) => {
    if (a < 10) {
      if (b < 10) {
        return b - a;

      } else if (b >= 10 && b < 100) {
        const temp = b / 10;
        if (temp < a) { return a - b; }
        else if (temp > a) { return b - a; }
        else {
          const sub = b % 10;
          if (sub < a) return a - b;
          else if (sub > a) { return b - a; }
          else { b - a; }
        }

      } else if (b >= 100 && b < 1000) {
        const temp = b / 100;
        if (temp < a) { return a - b; }
        else if (temp > a) { return b - a; }
        else {
          const sub = b % 100;
          if (sub < a) return a - b;
          else if (sub > a) { return b - a; }
          else { b - a; }
        }
      } else {
        return a - 1;
      }
    }
    else if (a >= 10 && a < 100) {
      if (b < 10) {
        const tempA = a / 10;
        if (tempA < b) {
          return a - b;
        } else if (tempA > b) {
          return b - a;
        } else {
          const subA = a % 10;
          if (subA < b) return a - b;
          else if (subA > b) { return b - a; }
          else { return b - a; }
        }
      } else if (b >= 10 && b < 100) {
        const tempA = a / 10;
        const tempB = b / 10;
        if (tempA < tempB) {
          return a - b;
        } else if (tempA > tempB) {
          return b - a;
        } else {
          const subA = a % 10;
          const subB = b % 10;
          if (subA < subB) return a - b;
          else if (subA > subB) { return b - a; }
          else { return b - a; }
        }
      } else if (b >= 100 && b < 1000) {
        const tempA = a / 10;
        const tempB = b / 100;
        if (tempA < tempB) {
          return a - b;
        } else if (tempA > tempB) {
          return b - a;
        } else {
          const subA = a % 10;
          const subB = b % 100;
          if (subA < subB) return a - b;
          else if (subA > subB) { return b - a; }
          else { return b - a; }
        }
      } else {
        return a - 1;
      }
    }
    else if (a >= 100 && a < 1000) {
      if (b < 10) {
        const tempA = a / 100;
        if (tempA < b) {
          return a - b;
        } else if (tempA > b) {
          return b - a;
        } else {
          const subA = a % 100;
          if (subA < b) return a - b;
          else if (subA > b) { return b - a; }
          else { return b - a; }
        }
      } else if (b >= 10 && b < 100) {
        const tempA = a / 100;
        const tempB = b / 10;
        if (tempA < tempB) {
          return a - b;
        } else if (tempA > tempB) {
          return b - a;
        } else {
          const subA = a % 100;
          const subB = b % 10;
          if (subA < subB) return a - b;
          else if (subA > subB) { return b - a; }
          else { return b - a; }
        }
      } else if (b >= 100 && b < 1000) {
        const tempA = a / 100;
        const tempB = a / 100;
        if (tempA < tempB) {
          return a - b;
        } else if (tempA > tempB) {
          return b - a;
        } else {
          const subA = a % 100;
          const subB = b % 100;
          if (subA < subB) return a - b;
          else if (subA > subB) { return b - a; }
          else { return b - a; }
        }
      } else {
        return a - 1;
      }
    } else {
      return a - 1;
    }
    // 1의 자리가 큰 순서대로 정렬하고 join()
  }).join('')
  return answer
}
// 배열에서 만들어 낼 수 있는 가장 큰 수
// [6,10,2] => 6210
const result = solution([9, 90, 534, 52, 910]);
console.log(result);
