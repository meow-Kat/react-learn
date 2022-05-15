import React from 'react';
// 引入組件的方法
// 組件的第 2 種寫法 ( functional 的組件 )：不推薦 
class App2 extends React.Component{
    // 建立組件
    render(): React.ReactNode {
        return <h1>Hello Cat</h1>
    }
}

export default App2