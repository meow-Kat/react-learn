import React, { useRef ,useState, useEffect } from 'react';

const App:React.FC = () => {

  const [accountVal, setAccountVal] = useState('')
  const [passwordVal, setPasswordVal] = useState('')

  function login() {
    // const account = document.querySelector('#account') as HTMLInputElement
    // const password = document.querySelector('#password') as HTMLInputElement
    // console.log(account,password);
    console.log(accountVal,passwordVal);
    
  }

  function onChangeAccountHandler(event: React.FormEvent<HTMLInputElement>) {
    if(event.currentTarget){
      // console.log(event.currentTarget.value);
      setAccountVal(event.currentTarget.value)
    }
  }

  function onChangePasswordHandler(event: React.FormEvent<HTMLInputElement>) {
    if(event.currentTarget){
      setPasswordVal(event.currentTarget.value)
    }
  }

  return <>
    <h1>Form</h1>
    <p>帳號</p>
    {/* 這裡的 value 雙向綁定了上面的渲染機制 ( useState ) */}
    <input type="text" name='' value={accountVal} id='account' onInput={onChangeAccountHandler} />
    {/* 輸入的內容就可以長在這邊不需要 querySelector */}
    <p>你輸入的帳號：{accountVal}</p>
    <p>密碼</p>
    <input type="text" name='' id='password' onInput={onChangePasswordHandler} />
    <div>
      <button onClick={login}>登入</button>
    </div>
  </>
}

export default App