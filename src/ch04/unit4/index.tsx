import React, { useEffect,useState } from 'react';

const App:React.FC = () => {

  // 1. mount
  // ( callback function, 陣列 )
  // useEffect(() => {
  //   console.log(123);
  // } , []) // 後端資料放這個陣列執行一次

  const [counter, setCounter] = useState(0)
  const [text, setText] = useState('偶數')

  // 兩個狀態互相影響的時候使用 useEffect
  useEffect(() => {
    console.log('counter變化',counter);
    if(counter % 2 === 0){
      setText('偶數')
    }else{
      setText('奇數')
    }
  },[counter]) // 監聽 counter 變化

  // 避免一直重複渲染
  // setText('xxx') // 這邊跟第 12 行有關


  const handleClick = () => {
    setCounter(counter + 1)
  }

  return <>
    <h1>count: {counter}</h1>
    <button onClick={handleClick}>+1</button>
    <p>{text}</p>
  </>
}

export default App