import React, { useEffect,useState } from 'react';
import { BtnProvider, useBtnContext } from './context/BtnContext'

type Prop = {}

const B: React.FC<Prop> = () => {
    return <>
        <p>B 組件</p>
        <C />
    </>
}

const C: React.FC<Prop> = () => {
    return <>
        <p>C 組件</p>
        <D />
    </>
}

const D: React.FC<Prop> = () => {
    const data = useBtnContext()
    console.log(data.btnVisible);   // false
    
    return <button>D 按鈕</button>
}

const App:React.FC = () => {
    return <BtnProvider>
        <h1>APP</h1>
        <B />
    </BtnProvider>
}

export default App
