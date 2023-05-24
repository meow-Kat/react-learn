import React, { useEffect,useState } from 'react';

// 這種 props 效果不是很好
type Prop = {
    btnVisible: boolean
}

const B: React.FC<Prop> = ({ btnVisible }) => {
    return <>
        <p>B 組件</p>
        <C btnVisible={btnVisible}/>
    </>
}

const C: React.FC<Prop> = ({ btnVisible }) => {
    return <>
        <p>C 組件</p>
        <D btnVisible={btnVisible}/>
    </>
}

const D: React.FC<Prop> = ({ btnVisible }) => {
    console.log(btnVisible);
    
    return <button>D 按鈕</button>
}

const App:React.FC = () => {
    const [btnVisible, setBtnVisible] = useState(false)
  return <>
    <h1>APP</h1>
    <B btnVisible={btnVisible}/>
  </>
}

export default App
