// { useState } 只要涉及畫面更新都需要用這個，這是一個 Hook
import React, { useState } from 'react';

type BtnProps = {
    currentNum: number
    onClickHandler: () => void
}

// 需要類型
const Btn: React.FC<BtnProps> = ({currentNum, onClickHandler}) => {
    return (
        <button onClick={onClickHandler}>
            加1，
            <span>目前總數：{currentNum}</span>
        </button>
    )
}
// props、state 應用
// App 是父的組件，<Btn /> 是子組件，父組件更新子組件也會更著更新
const App: React.FC = () => {
    // useState(0) 預設 0
    // setNum 是自己取名字的
    const [num, setNum] = useState(0)

    function btnClickHandler() {
        setNum(num + 1)
    }

    return <>
        <h1>計數器：{num}</h1>
        <Btn currentNum={num} onClickHandler={btnClickHandler} />
    </>
}

export default App;
