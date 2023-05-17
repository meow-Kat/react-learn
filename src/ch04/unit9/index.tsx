import React, { useRef ,useState, useEffect } from 'react';

const App:React.FC = () => {

  // useRef DOM 操作
  // 預設 null，沒有寫會變 undifinded
  const h1Ref = useRef<HTMLHeadingElement>(null)

  // useEffect 全部組件渲染完之後 才會觸發
  useEffect(() => {
    // // 一般 DOM 操作，如果第三方套件沒有支援只能用這個方式做
    // const ele = document.querySelector('#h1')
    // console.log(ele); // null

    console.log(h1Ref.current);
  })

  return <>
    {/* <h1 id="h1">Ref</h1> */}
    <h1 ref={h1Ref}>Ref</h1>
  </>
}

export default App