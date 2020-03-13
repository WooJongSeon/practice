# coding=utf-8
# 가장 많이 나눠줄 수 있는 예산을 작성한다
# 이분 탐색의 최대 값은 예산중에서 가장 큰 값이다.
# 가장 작은 범위는 1까지다. 1이 예산으로 줄 수 있는 최소 금액


def solution(budgets, M):
    budgets.sort()  # 정렬을 해줘야 아래 반복문에서 순차적으로 진행된다
    r = budgets[-1]  # 가장 큰 값을 저장한다
    l = 1  # 가장 작은 값을 지정한다
    answer = 0
    while l <= r:  # 이분 탐색을 하는 동안
        mid = ((r + l) / 2)  # 중간 값을 저장한다
        sum = 0
        for budget in budgets:  # 얘산 배열을 돌면서
            if mid <= budget:  # 중간값이 예산보다 작다면
                sum += mid  # 중간 값을 저장한다
            else:  # 아니라면
                sum += budget  # 예산을 저장한다
        if sum > M:  # 합계가 더 크다면 -> 편성 예산이 작아져야 한다
            r = mid - 1  # 최대 값을 중간값 -1로 해서 줄인다
        else:
            if answer <= mid:
                answer = mid
            l = mid + 1
            # answer = mid  # 답을 저장한다
            # l = mid + 1  # 최소 값을 중간값 + 1로 한다
    # 이게 왜 답이 아닐까? 뭔가 테스트 케이스를 생각 못한것 같은데..
    print(answer)
    return int(answer)


solution([120, 110, 140, 150], 485)
