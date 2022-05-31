import { useState } from 'react'

// // 1. useState 基本認識
// const App: React.FC = () => {

//   // 沒有涉及畫面更新
//   // let counter = 0

//   // 有涉及畫面更新           // 這邊會自動抓類型，如果需要改變類型，使用泛型 useState<number | null>()
//   const [counter, SetCounter] = useState(0)

//   function counterHandler() {
//     SetCounter(counter + 1)
    
//     // 沒有涉及畫面更新畫面不會動
//     // counter++
//     // console.log(counter);
    
//   }
  
//   return <>
//     <h1>Counter: {counter}</h1>
//     <button onClick={counterHandler}>+1</button>
//   </>
// }

// export default App

// // 2.
// const Parent: React.FC = () => {
//   let [count, setCount] = useState(0)
//   return (
//     <div onClick= {() => setCount(prev => prev + 1)}>
//       Parent click {count} times
//       <Child />
//     </div>
//   )
// }

// const Child:React.FC = () => {
//   let [count, setCount] = useState(0)
//   return (
//     <button onClick= {() => setCount(count + 1)}>
//       Child click {count} times
//     </button>
//   )
// }

// export default Parent

// 3.
const Counter: React.FC = () => {
  const [counter,setCounter] = useState(0)

  const handleClick = () => {
    // 這邊會拿到前一個狀態前一個狀態是 0，這邊確實做了兩次
    // setCounter(counter + 1)
    // setCounter(counter + 1)


    // // 若要連續 + 需要傳入 callback function
    function cb(prev: number) {
      return prev + 1
    }
    // 這邊下面才會有意義
    setCounter(cb)
    setCounter(cb)
  }
  return (
    <div className="App">
      <h1>Counter 組件</h1>
      <div>counter:{counter}</div>
      <br />
      <button onClick={handleClick}>Click me !</button>
    </div>
  )
}

export default Counter