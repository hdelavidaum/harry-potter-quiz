// import styled from 'styled-components'
import { useEffect } from 'react'
import { useAppContext } from '../../context'
import { Widget, Loading } from '../'

interface IFinalResult {
    playerName: string
}

const FinalResult = ({playerName}: IFinalResult) => {
    const {answers, isLoading, setLoading}: any = useAppContext()

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [])

    return (
        isLoading
            ? <Loading result />
            : <Widget>
                <Widget.Header>
                    {`${playerName}, você acertou ${answers.filter((ans: boolean) => ans).length} questões!`}
                </Widget.Header>
                <Widget.Content>
                    {answers.map((item: boolean, key: number) => {
                        return <div key={key}>{`A questão #${key} você: ${item ? "acertou" : "errou"}`}</div>
                    })}
                </Widget.Content>
            
            </Widget>
    )
}

export default FinalResult