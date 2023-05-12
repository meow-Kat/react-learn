import React, { useEffect,useState } from 'react';

// 初始化的全域變數
let interval: NodeJS.Timeout | null  = null
let num = 0

const App:React.FC = () => {

  const [counter, setCounter] = useState(0)
  useEffect(() => {
    interval = setInterval(() => {
      num++
      console.log(num);
      
    }, 1000)

    // 要把每次點擊之後的 setInterval 消失不然會一直疊上去
    return () => {
      if(interval !== null) clearInterval(interval)
      num = 0
    }

  }, [counter])

  function clickHandler() {
    setCounter(counter + 1)
  }

  return <>
    <h1>計時器: {counter}</h1>
    {/* 按了很多次會一直執行疊加上去會跑多次的 setCounter 再重新渲染 setInterval 也就是按了幾次按鈕就會產生 setInterval */}
    <button onClick={clickHandler}>+1</button>
  </>
}

export default App