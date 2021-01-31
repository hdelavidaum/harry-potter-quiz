import { createContext, useContext, useState } from 'react';


export const AppContext = createContext({});
export const useAppContext = () => useContext(AppContext)

export const AppProvider: React.FC = ({children}: any) =>{
    const [playerName, setPlayerName] = useState<string>("");
    const [screenState, setScreenState] = useState<string>("LOADING");
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [answers, setAnswers] = useState<{question: number, answer: number}[]>([{question: 0, answer: 0}])
    const [selectedAnswer, setSelectedAnswer] = useState<number>(0)


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
        setSelectedAnswer
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}
