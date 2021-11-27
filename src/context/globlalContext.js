import {createContext,useContext} from 'react'


const StateContext = createContext()

export default function globalContext ({children}) {

    const name = false

    return (
        <StateContext.Provider value= {{ name }}>
            {children}
        </StateContext.Provider>
    )
}

export const GlobalState = () => useContext(StateContext)