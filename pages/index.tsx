import db from '../db.json';
import { Widget, 
  QuizLogo,
  QuizBackground,
  Footer,
  GithubCorner,
  NameForm,
  QuizContainer
} from '../src/components'




export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget nameForm>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <NameForm />
          </Widget.Content>
        </Widget>

        <Widget quizesDaGalera>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <ul>
              {db.external.map((link, key) => {
                const [projectName, githubUser] = link.replace(/\//g, '').replace('.vercel.app','').replace('https:','').split('.');
                console.log(projectName, githubUser);

                return (<li>
                  <Widget.Topic href={link} key={key}>
                    {`${projectName}/${githubUser}`}
                  </Widget.Topic>
                </li>)
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer quizesDaGalera />
      </QuizContainer>
      <GithubCorner projectUrl="https://github.com/hdelavidaum/harry-potter-quiz" />
    </QuizBackground>
  );
}