import { createContext, useContext, useState } from 'react';

export const AppContext = createContext({});
export const useAppContext = () => useContext(AppContext)

export const AppProvider = ({children}: any) =>{
    const [playerName, setPlayerName] = useState("")


    const values ={
        playerName,
        setPlayerName
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}
