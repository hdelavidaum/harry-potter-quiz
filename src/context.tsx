import { createContext, useContext, useState } from 'react';


export const AppContext = createContext({});
export const useAppContext = () => useContext(AppContext)

export const AppProvider: React.FC = ({children}: any) =>{
    const [playerName, setPlayerName] = useState<string>("");
    const [screenState, setScreenState] = useState<string>("LOADING");
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [answers, setAnswers] = useState<boolean[]>([])
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const [isFormSubmited, setFormSubmission] = useState<boolean>(false)
    const [isLoading, setLoading] = useState<boolean>(true)


    const values ={
        playerName,
        setPlayerName,
        screenState,
        setScreenState,
        currentQuestion,
        setCurrentQuestion,
        answers,
        setAnswers,
        selectedAnswer,
        setSelectedAnswer,
        isFormSubmited,
        setFormSubmission,
        isLoading,
        setLoading
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}
