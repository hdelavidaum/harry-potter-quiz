import { useRouter } from 'next/router'
// import { useState } from 'react'
import { useAppContext } from '../../../context'


const NameForm = () => {
  const router = useRouter()
  const {playerName, setPlayerName}: any = useAppContext()
  
  const handleSubmit = (e: React.SyntheticEvent) =>{
    e.preventDefault();
    
    router.push(`/quiz?name=${playerName}`)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Insert your name" onChange={(e) => {setPlayerName(e.target.value); console.log(router)}} />
      <input type="submit" value={`Hey ${playerName}, send it!`} disabled={playerName.length === 0} />
    </form>
  )
}      

export default NameForm