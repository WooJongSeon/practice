// 지연 평가 함수 모음
const L = {}

L.map = function* (f, iter) {
    for (let item of iter) {
        yield f(item)
    }
}

L.filter = function* (f, iter) {
    for (let item of iter) {
        if (f(item)) yield item
    }
}

L.take = function* (limit, iter) {
    for (let item of iter) {
        yield item
        if (!--limit) break
    }
}

// 엄격한 평가 함수 모음
const _ = {}

_.take = function (limit, iter) {
    const result = []
    for (let item of iter) {
        result.push(item)
        if (result.length === limit) return result
    }
}
const arr = [0, 1, 2, 3, 4, 5]
const result1 = arr.map(num => num + 10).filter(num => num % 2).slice(0, 2)

console.log(result1) // [11, 13]

const result2 = _.take(2,
    L.filter(num => num % 2,
        L.map(num => num + 10, arr)))

console.log(result2) // [11, 13]