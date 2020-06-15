const React = (function() {
  let hooks = []
  let idx = 0
  function useState(initVal) {
    const state = hooks[idx] || initVal
    if(initVal === 1) {
      console.log(`initVal 1 ${state} idx ${idx}`); // idx = 0
    }
    if(initVal === 'name'){
      console.log(`initVal name ${state} idx ${idx}`); // idx = 1
    }
    const _idx = idx // 이 훅이 사용해야 하는 인덱스를 가둬둔다.
    const setState = newVal => {
      hooks[_idx] = newVal
    }
    idx++ // 다음 훅은 다른 인덱스를 사용하도록 한다.
    return [state, setState]
  }

  function render(Component) {
    idx = 0 // 랜더링 시 훅의 인덱스를 초기화한다.
    const C = Component()
    C.render()
    return C
  }

  return { useState, render }
})()

const { useState } = React;
function Component() {
  const [count, setCount] = useState(1) // React 의 idx 값이 0이다.
  const [value, setValue] = useState('name') // 리액트의 idx 값이 1이다.
  return {
    render: () => console.log(`count ${count} value ${value}`),
    click: () => {
      setCount(count + 1);
      setValue(value + 'mlml')
    },
  }
}

var App = React.render(Component) // 1
App.click()
var App = React.render(Component) // 2
App.click()
var App = React.render(Component) // 3
App.click()
var App = React.render(Component) // 4
// 여기까지는 1개의 state를 다루기
