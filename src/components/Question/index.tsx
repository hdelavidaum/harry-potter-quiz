import { Widget, Button, AnswerResult, AlternativesForm } from '../'
import { useAppContext } from '../../context'
import BackwardsArrow from './BackwardsArrow'


interface IQuestion {
    questionNumber: number,
    totalOfQuestions: number,
    onSubmitCallback: () => void,
    question: {
        title: string,
        description: string,
        image: string,
        alternatives: string[],
        answer: number
    }
}

const Question = ({ question, questionNumber, totalOfQuestions, onSubmitCallback }: IQuestion) => {
    const { setAnswers, setSelectedAnswer, selectedAnswer, isFormSubmited, setFormSubmission }: any = useAppContext()
    const questionID = `question__${questionNumber}`

    const handleOnSubmitQuestion = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setFormSubmission(true)
        
        
        questionNumber === 0
            ? question.answer === selectedAnswer 
                ? setAnswers([true])
                : setAnswers([false])
            : question.answer === selectedAnswer 
                ? setAnswers((prevState: []) => [...prevState, true])
                : setAnswers((prevState: []) => [...prevState, false])
        
        setTimeout(() => {
            setSelectedAnswer(null);
            setFormSubmission(false)
            onSubmitCallback();
        }, 1500)    
    }
    
    return (
        <Widget>
            <Widget.Header>
                <BackwardsArrow />
                {`Pergunta ${questionNumber + 1} de ${totalOfQuestions}`}
            </Widget.Header>
            
            <Widget.Image alt="" src={question.image}/>
            
            <Widget.Content>
                <h2>
                    {question.title}
                </h2>
                <p>
                    {question.description}
                </p>
                <AlternativesForm onSubmit={handleOnSubmitQuestion}>
                    {question.alternatives.map((item, key) => {
                        const alternativeId = `alternative__${key}`;
                        const isSelected = selectedAnswer === key;
                        const alternativeStatus = question.answer === selectedAnswer ? 'SUCCESS' : 'ERROR';

                        return (
                            <Widget.Topic
                                as="label"
                                key={alternativeId}
                                htmlFor={alternativeId}
                                data-selected={isSelected}
                                data-status={isFormSubmited && alternativeStatus}
                            >
                                <input 
                                    id={alternativeId}
                                    name={questionID}
                                    type="radio"
                                    onChange={() => setSelectedAnswer(key)}
                                    style={{display: "none"}}
                                />
                                {item}
                            </Widget.Topic>
                        )
                    })}

                    <Button type="submit" disabled={selectedAnswer === null}>
                        Confirm answer
                    </Button>
                </AlternativesForm>

                <div style={{minHeight: "40px"}}>
                {isFormSubmited &&
                    <AnswerResult>
                         {question.answer === selectedAnswer ? "Congrats! Você acertou" : "Você errou \"/"}
                    </AnswerResult>}

                </div>
            </Widget.Content>

        </Widget>
    )

}


export default Question