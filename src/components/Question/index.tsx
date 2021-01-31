import { Widget, Button } from '../'
import BakcwardsArrow from './BackwardsArrow'
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
        alternatives: string[]
    }
}

const Question = ({ question, questionNumber, totalOfQuestions, onSubmitCallback }: IQuestion) => {
    const { setAnswers, setSelectedAnswer, selectedAnswer }: any = useAppContext()
    const questionID = `question__${questionNumber}`

    const handleOnSubmitQuestion = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(selectedAnswer)
        
        questionNumber === 0 ?
            setAnswers([{question: questionNumber, answer: selectedAnswer}]):
            setAnswers((prevState: []) => 
            [...prevState, {question: questionNumber, answer: selectedAnswer}])
        
        onSubmitCallback();
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
                <form onSubmit={handleOnSubmitQuestion}>
                    {question.alternatives.map((item, key) => {
                        const alternativeId = `alternative__${key}`
                        return (
                            <Widget.Topic
                                as="label"
                                key={alternativeId}
                                htmlFor={alternativeId}
                            >
                                <input 
                                    id={alternativeId}
                                    name={questionID}
                                    type="radio"
                                    onChange={() => setSelectedAnswer(key)}
                                />
                                {item}
                            </Widget.Topic>
                        )
                    })}
                    <Button type="submit">
                        Confirm answer
                    </Button>
                </form>
            </Widget.Content>
        </Widget>
    )

}


export default Question