for (let i = 0; i < 3; i += 1) { // 0 1 2 출력
    setTimeout(() => {
        console.log(i);
    }, 100);
}

for (var i = 0; i < 3; i += 1) { // 3 3 3 출력
    setTimeout(() => {
        console.log(i);
    }, 100);
}