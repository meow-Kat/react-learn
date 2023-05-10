import React from 'react';
import styled from 'styled-components'

type BtnType = { colorStatus: boolean }

// CSS in jsx
const Button = styled.button<BtnType>`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: ${props => props.colorStatus === false ? '#000' : 'palevioletred'} ;
    margin: 0 1em;
    padding: 0.25em 1em;
`

const H1 = styled.h1`
    color:blue;
`

// // 宣告 style
// const AppStyle1 = {
//     color: 'blue'
// }

// const AppStyle2 = {
//     color: 'red'
// }

const App: React.FC = () => {
    // const status = false
    // // inline style
    // return <h1 style={ status ? AppStyle1 : AppStyle2 }>Unit6</h1>
    return <>
        <H1>YA</H1>
        <Button colorStatus={false}>button</Button>
    </>
}

export default App