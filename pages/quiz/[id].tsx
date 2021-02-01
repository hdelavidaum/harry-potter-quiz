const QuizDaGalera = () =>{
    return <div>Desafio do Quiz da Galera</div>
}


export async function getServerSideProps(context: any) {
    console.log(context)
    return {
      props: {}, // will be passed to the page component as props
    }
  }


export default QuizDaGalera