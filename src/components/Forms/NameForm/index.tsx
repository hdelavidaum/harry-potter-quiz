import { useRouter } from 'next/router'
// import { useState } from 'react'
import { useAppContext } from '../../../context'
import { Input, Button } from './styles'


const NameForm = () => {
  const router = useRouter()
  const {playerName, setPlayerName}: any = useAppContext()
  
  const handleSubmit = (e: React.SyntheticEvent) =>{
    e.preventDefault();
    
    router.push(`/quiz?name=${playerName}`)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" placeholder="Insert your name here:" onChange={(e) => {setPlayerName(e.target.value); console.log(router)}} />
      <Button type="submit" disabled={playerName.length === 0} >
        {`Start quiz!`}
      </Button>
    </form>
  )
}      

export default NameForm