import React, { useRef ,useState } from 'react';

// useRef 不觸發重新渲染

// useState 涉及畫面更新

const App:React.FC = () => {

  const [hidden, setHidden] = useState(false)

  const sunRef = useRef(0)

  // let sum = 0
  // sunRef 是一個 obj 取值：sunRef.current
  console.log(sunRef.current);
  
  function click() {
    // 記憶當前狀態，橫跨每次渲染
    sunRef.current = sunRef.current + 1
    console.log(sunRef.current);

    // 如果 sum === 5 就會重新渲染 又要從 0 開始算
    if(sunRef.current === 5) {
      setHidden(true)
    }else if(sunRef.current > 15){
      setHidden(false)
    }
  }

  return <>
    <h1>Ref</h1>
    <button onClick={click}>+1</button>
    {/* hidden === true 右邊會顯示 */}
    {hidden && <div>被隱藏區塊</div>}
  </>
}

export default App

// 使用服務 JSONPlaceholder 