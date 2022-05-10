import React from 'react'

// 1. props state
// 2. 生命週期
// 3. this

type BtnProps = {
    clickHandler: () => void
}
type BtnState = {}

class Btn extends React.Component<BtnProps,BtnState>{
    constructor( props: BtnProps ){
        super(props)
    }

    // component 將要解除時
    componentWillUnmount() {
        console.log('畫面解除');
    }

    render(): React.ReactNode{
        return <button onClick={this.props.clickHandler}>+1</button>
    }
}

type AppProps = {}
type AppState = {
    count: number
}

class App extends React.Component<AppProps,AppState>{
    constructor( props: AppProps ){
        super(props)
        this.state = {
            count:0
        }

        // 保證 this 指向 App，因為點擊 button 會指到 window
        this.countClickHandler = this.countClickHandler.bind(this)
    }

    countClickHandler() {
        console.log(this);
        // 類似 setState
        // 拿到前一個狀態 ↓
        this.setState( (prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    // 生命週期
    // component 安裝
    componentsDidMount() {
        console.log('畫面第一次渲染');
    }

    // component 更新時
    componentDidUpdate() {
        console.log('畫面更新',this.state);
    }

    render(): React.ReactNode {
        return <>
            <h1>Count: {this.state.count}</h1>
            {this.state.count === 5 ? null : <Btn clickHandler={this.countClickHandler}/> }
        </>
    }

}

export default App