# coding=utf-8
import heapq  # heapq.heappop 하면 알아서 제일 작은 것을 리턴한다


def sol():
    arr = [1, 2, 3, 4, 5]
    heapq.heapify(arr)
    heapq.heappush(arr, 10)
    print(arr)
    heapq.heappush(arr, 3)
    print(arr)
    heapq.heappush(arr, 5)
    print(arr)
    heapq.heappush(arr, 2)

    print(arr)

    print(arr)


sol()
