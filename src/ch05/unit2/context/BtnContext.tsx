import React, { createContext, useState, useContext } from 'react';

// 先設定一個預設的值，如果 BtnContext.Provider 不在此作用域就不會被調用
const defaultValue = {
    btnVisible: false
}

const BtnContext = createContext(defaultValue)

// 設定值時調用
export const BtnProvider: React.FC<{children:any}>  = ({ children }) => {
    const [btnVisible, setBtnVisible] = useState(false)

    return <>
        <BtnContext.Provider 
            value={{ 
                btnVisible
            }}
        >
            {children}
        </BtnContext.Provider>
    </>
}

// 取值時調用
export const useBtnContext = () => {
    return useContext(BtnContext)
}