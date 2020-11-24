package main

import (
	"fmt"
)

func main() {
	var temp int
	var min int
	var minpos int
	arr := [5]int{5, 4, 3, 2, 1}

	for i := 0; i < len(arr); i++ {
		for j := i + 1; j < len(arr); j++ {
			if arr[j-1] > arr[j] {
				min = arr[j]
				minpos = j
			}
		}
		temp = arr[i]
		arr[minpos] = temp // 최소 값이 있던 곳
		arr[i] = min       // 최소 값 넣기
		fmt.Println(arr)
	}
	fmt.Println(arr)
}

// 배열을 돌면서 가장 작은 숫자를 찾는다.
// temp 값은 변경을 위한 값
// min 이라고 최소값 저장을 위한 변수를 선언한다.

// 가장 작은 숫자의 위치를 현재 숫자랑 바꾼다.
