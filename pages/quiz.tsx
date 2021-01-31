import { useRouter } from 'next/router'

import db from '../db.json'
import {
    Widget,
    QuizBackground,
    Footer,
    GithubCorner,
    QuizContainer,
    QuizLogo
} from '../src/components'


const Quiz = () => {
    
    const router = useRouter()
    console.log(router.query['name'])

    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <QuizLogo />
                <Widget>
                    <Widget.Header>
                        Teste
                    </Widget.Header>
                    <Widget.Content>
                        Teste
                    </Widget.Content>
                </Widget>
                <Footer />
            </QuizContainer>
            <GithubCorner projectUrl="https://github.com/hdelavidaum/harry-potter-quiz"/>
        </QuizBackground>
    )
}

export default Quiz