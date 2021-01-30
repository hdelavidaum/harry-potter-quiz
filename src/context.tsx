import { createContext, useContext, useState } from 'react';

export const AppContext = createContext({});
export const useAppContext = () => useContext(AppContext)

export const AppProvider: React.FC = ({children}: any) =>{
    const [playerName, setPlayerName] = useState<IPlayerName>("");


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
