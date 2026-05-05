import { useEffect } from 'react'
import useChat from '../hooks/useChat'
import SideNav from '../components/SideNav'
import Messages from '../components/Messages'
import InputBar from '../components/InputBar'

const Home = () => {

    const { handleAiResponse } = useChat()

    useEffect(() => {
        handleAiResponse()
    }, [])

    return (
        <div className='h-screen flex gap-8 w-full text-white bg-zinc-800'>
            <SideNav />
            <div className='flex-1 flex flex-col justify-between gap-4 p-4'>
            <Messages />
            <InputBar />
            </div>
        </div>
    )
}

export default Home