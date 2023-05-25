import React, { useEffect, useState, useMemo, useCallback } from 'react';

// useMemo 記憶陣列或物件
// useCallback 記憶一個 function

type Props = {}


const App:React.FC = () => {

    // // 如果每個用戶都和伺服器要資料就會很多次，只會呈現不變的內容，會希望 fetch 只要做一次就可以了
    // const [value, setValue] = useState(false)

    // useEffect(() => {
    //     fetch('...')
    // }, [value])

    const [value, setValue] = useState(false)
    const aa = 1000
    const obj = { name:'Meow', data:{} }

    // useMemo 適用在回傳 物件、陣列、Function
    const memoObj = useMemo(() => {
        const obj1 = { name:'Meow', data:{} }
        const arr = []
        const func = () => {}
        return obj1 // return 的結果都是一樣不會重新 render
    }, [])

    // useCallback 只適用在回傳 function
    const memoFunc1 = useCallback(function() {
        console.log('here');
    },[])

    // 淺比較
    useEffect(() => {
        console.log('useEffect callback');
        memoFunc1()
    // }, [aa])    // 這裡的 aa 不會變所以不會重新 render
    // }, [obj])    // 這裡的 obj 每次都會重新宣告存在不同記憶體位置就會重新 render
    // }, [memoObj])    // 使用 memoObj 非必要不會變化，有必要在變化
    }, [memoFunc1])    // 使用 memoFunc1 非必要不會變化，有必要在變化

  return <>
    <h1>APP</h1>
    <button onClick={() => { setValue(!value) }}>重新 render</button>
  </>
}

export default App

// const aa = 1000
// const bb = 1000

// console.log(aa === bb); // true

// const obj1 = {}
// const obj2 = {}

// console.log(obj1 === obj2); // false，JS 物件是在記憶體位置是兩個不同位置

// const func1 = () => {}
// const func2 = () => {}

// console.log(func1 === func2); // false，JS function 也是在記憶體位置是兩個不同位置