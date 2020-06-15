const React = (function() {
  let _val;
  function useState(initVal) {
    const state = _val || initVal;
    const setState = newVal => {
      _val = newVal
    }
    return [state, setState]
  }


  function render(Component) {
    const C = Component()
    C.render()
    return C
  }

  function useEffect(callback) {

  }

  return { useState, render, useEffect }
})()

const { useState } = React;
function Component() {
  const [count, setCount] = useState(1)
  return {
    render: () => console.log(count),
    click: () => setCount(count + 1),
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
