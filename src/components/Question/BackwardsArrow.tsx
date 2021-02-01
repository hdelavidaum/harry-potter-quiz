import { useRouter } from 'next/router'
import { useAppContext } from '../../context'

const BackwardsArrow = () => {
    const router = useRouter()
    const {setPlayerName}: any = useAppContext()
    const style = {
        marginRight: "10px",
        height: "100%",
        display: "flex",
        placeContent: "center center",
        justifyContent: "flex-start"
    }
    
    const handleReturnHome = (e: React.SyntheticEvent) =>{
        e.preventDefault()
        setPlayerName("")
        router.push("/")
    }
    
    return (
        <div style={style} onClick={handleReturnHome}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8.354 1.646a.5.5 0 010 .708L2.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z" clipRule="evenodd"></path><path fillRule="evenodd" d="M12.354 1.646a.5.5 0 010 .708L6.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z" clipRule="evenodd"></path></svg>
        </div>
    )
}

export default BackwardsArrow