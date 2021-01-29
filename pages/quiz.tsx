import {useRouter} from 'next/router'


const Quiz = () => {
    
    const router = useRouter()
    console.log(router.query['name'])

    return (
        <div>teste</div>
    )
}

export default Quiz