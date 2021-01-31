import { useRouter } from 'next/router'

const BackwardsArrow = () => {
    const router = useRouter()
    const style = {
        marginRight: "10px",
        height: "100%",
        display: "flex",
        placeContent: "center center",
        justifyContent: "flex-start"
    }
    
    
    return (
        <div style={style} onClick={() => router.push("/")}>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 010 .708L2.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 010 .708L6.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z" clip-rule="evenodd"></path></svg>
        </div>
    )
}

export default BackwardsArrow