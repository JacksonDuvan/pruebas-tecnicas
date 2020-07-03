import React, { useState, createContext } from 'react'


export const Context = createContext({})

export const Provider = ({ children }) => {
    const [inputValue, setInputValue] = useState([])
    const [inputValue2, setInputValue2] = useState([])

    return <Context.Provider 
        value={{
            inputValue, 
            setInputValue, 
            inputValue2, 
            setInputValue2
        }}>
        {children}
    </Context.Provider>
}

