import styled from 'styled-components'

import db from '../db.json';
import { Widget, 
  QuizLogo,
  QuizBackground,
  Footer,
  GithubCorner,
  NameForm
} from '../src/components'

// const Title = styled.h1`
//   color: red;
//   font-size: 50px;
// `

// export default function Home() {
//   return <Title>My page</Title>
// }



// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 17%;

  /* display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  place-content: center center; */

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg} theme={db.theme}>
      <QuizContainer>
        <QuizLogo />
        <Widget theme={db.theme} >
          <Widget.Header theme={db.theme}>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content theme={db.theme}>
            <p>{db.description}</p>
            <NameForm />
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content theme={db.theme}>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GithubCorner projectUrl="https://github.com/hdelavidaum" />
    </QuizBackground>
  );
}