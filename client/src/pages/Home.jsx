import React, { useState } from 'react'
import { useChat } from '../hooks/useChat'
import { useSelector } from 'react-redux'
import SideNav from '../components/SideNav'

const Home = () => {

    const { handleGetAIResponse } = useChat()
    const tempMessages = useSelector((state) => state.chat?.tempMessages ?? [])
    const currentChatId = useSelector((state) => state.chat?.currentChatId ?? null)
    const chats = useSelector((state) => state.chat?.chats ?? {})
    const currentChat = chats[currentChatId]

    const [message, setMessage] = useState("")

    return (
        <div className="bg-zinc-800 text-white h-screen w-full flex">
            <SideNav />
            <div className="flex flex-col flex-1 h-full">

                {/* Chat Messages Area */}
                <div className="flex-1 overflow-y-auto px-8 py-6 space-y-4 bg-zinc-800">

                    {/* <div className="flex justify-end">
                        <div className="bg-sky-600 px-4 py-2 rounded-lg max-w-xs">
                            <span>{message}</span>
                        </div>
                    </div> */}

                    <div className="flex justify-start">
                        <div className=" flex-1">
                            {
                                tempMessages.map((message) => (
                                    <div key={message.timestamp}>
                                        <div className={" flex flex-col  w-fit  max-w-xs" + (message.role === "user" ? " ml-auto" : "")}>
                                            <span className='bg-sky-600 px-4 py-2 rounded-lg '>{message.role}</span>
                                            <p className='bg-zinc-700 px-4 py-2 rounded-lg'>{message.content}</p>
                                        </div>
                                    </div>
                                ))
                            }
                            {/* <h1 style={{ color: "red" }} >actual chat message</h1> */}
                            {
                                currentChat?.messages?.map((message) => (
                                    <div key={message.timestamp}>
                                        <p>{message.role}</p>
                                        <p>{message.content}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
                {/* Chat Input Area */}
                <div className="px-8 py-4 border-t border-zinc-700 bg-zinc-900">
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        handleGetAIResponse({
                            message,
                            chatId: null //TODO: implement chat id
                        })
                    }}
                        className="flex gap-2">
                        <input
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            type="text"
                            placeholder="Type a message..."
                            className="px-4 py-2 rounded-lg bg-zinc-700 border border-zinc-600 text-white placeholder-zinc-400 focus:outline-none focus:border-blue-500 flex-1"
                        />
                        <button type="submit" className="px-6 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-medium transition-colors">
                            📩
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home
