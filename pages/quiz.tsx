import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAppContext } from '../src/context'
import db from '../db.json'
import {
    QuizBackground,
    Footer,
    GithubCorner,
    QuizContainer,
    QuizLogo,
    Question,
    Loading
} from '../src/components'

const screenStates = {
    LOADING: "LOADING",
    QUIZ: "QUIZ",
    RESULT: "RESULT",
}

const Quiz = () => {
    const {
        screenState,
        setScreenState,
        currentQuestion,
        setCurrentQuestion,
        answers
    }: any = useAppContext();
    const totalOfQuestions: number = db.questions.length;
    
    // const router = useRouter();
    // console.log(router.query['name']);

    const handleSubmitFn = () => {
        console.log("enviando o forms")
        const nextQuestion = currentQuestion+1

        nextQuestion < totalOfQuestions ?
         setCurrentQuestion(nextQuestion):
         setScreenState(screenStates.RESULT)
    }

    useEffect(() => {
        setTimeout(() => {
            setScreenState(screenStates.QUIZ)
        }, 1500)
    }, [])

    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <QuizLogo />
                {screenState === "LOADING" && <Loading />}
                {screenState === "QUIZ" && <Question
                    questionNumber={currentQuestion}
                    totalOfQuestions={totalOfQuestions}
                    question={db.questions[currentQuestion]}
                    onSubmitCallback={handleSubmitFn}
                />}
                {screenState === "RESULT" && <div>Hora de mostrar o resultado</div>}
                <Footer />
            </QuizContainer>
            <GithubCorner projectUrl="https://github.com/hdelavidaum/harry-potter-quiz"/>
        </QuizBackground>
    )
}

export default Quiz