import React from 'react';

const App: React.FC = () => {
    const time = new Date().getSeconds()
    // 這樣包就會輸出變數了，但是需要實時更新，所以要去 index.tsx 處理
    return <h1>{time}</h1>
}

export default App;
