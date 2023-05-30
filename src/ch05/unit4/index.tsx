import React, { useEffect, useState, useMemo, useCallback, memo } from 'react';

type Props = {}

// 使用 useMemo, useCallback, memo 防止組件執行無意義 render
// 利用 memo 包起來 num 被更新才會 render
// 使用限制 如果是物件就一定會重新 render，解法就是用上個章節的 useMemo 解
// 使用前提看看這個消耗性能多大是否需要使用

type PropsB = {
  num: number;
  obj:{ name: string }
}

const B: React.FC<PropsB> = memo(({ num,obj }) => {
  console.log('render B', num);
  return <p>B {num} {obj.name}</p>
})

const App:React.FC = () => {
  console.log('render App');
  const [value, setValue] = useState(false)
  const [num, setNum] = useState(0)
  const [obj, setObj] = useState({ name:'' })

  const memoObj = useMemo(() => {
    return obj
  }, [obj.name])

  return <>
    <h1>APP</h1>
    <B num={num} obj={memoObj} />
    <button onClick={() => { setValue(!value) }}>重新 render</button>
    <button onClick={() => { setNum(100) }}>設定顯示數字</button>
    <button onClick={() => { setObj({ name:'Meow' }) }}>設定顯示文字</button>
  </>
}

export default App