const foo = () => {
    bar();
    console.log('foo');
}
const bar = () => {
    for (let i = 0; i < 1000000000; i++) {
    }
    console.log('bar');      
}

foo();

// bar가 callstack 에서 오래 걸리면 foo가 실행이 늦게된다
// 단일 스레드로 callstack을 쓰면 한번에 1개씩 밖에 못한다.

// 일반 함수는 callstack 에서 처리
// set timeout, async 작업은 api 를 타고 처리한다.
// 처리 한 다음에는 콜백을 태스크 큐에 담는다.
// callstack이 비어있고 task queue에 콜백이 들어있으면
// 이벤트 루프가 태스크 큐에서 콜백을 stack 으로 가져온다.
// callstack에 있는 함수를 실행한다.
 