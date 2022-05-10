import './App.css'
import Header from './components/Header'

console.log('App 組件')

const Body : React.FC = () =>{
    {/* 或是 使用 fragment ( 以下 ) */}
    return <>
        <h1 className="color-blue">Meow</h1>
        <p>YA</p>
        <img src="/logo512.png" alt="" srcSet=""/>
    </>
}

const App: React.FC = () =>{
    {/* 只能一次 return 一個元素 */}
    // return <div>
    //     {/* prop -> 屬性 */}
    //     <h1 className="color-blue">Meow</h1>
    //     <p>YA</p>
    //     <img src="/logo512.png" alt="" srcSet=""/>
    // </div>

    return <>
        <Header />
        <Body />
    </>

}

export default App