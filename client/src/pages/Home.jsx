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

    const chatMessages = currentChat?.messages ?? []
    const hasMessages = tempMessages.length > 0 || chatMessages.length > 0
    const currentTitle = currentChat?.title ?? (hasMessages ? "New conversation" : "Start a conversation")

    const getMessageContent = (chatMessage) => chatMessage.content ?? chatMessage.message?.content ?? ""

    const renderMessageBubble = (chatMessage, key) => {
        const isUser = chatMessage.role === "user"
        const content = getMessageContent(chatMessage)

        return (
            <div key={key} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                <div
                    className={
                        "max-w-[88%] rounded-[26px] border px-4 py-3 shadow-lg backdrop-blur-sm sm:max-w-[72%] " +
                        (isUser
                            ? "border-sky-400/30 bg-sky-500/15 text-sky-50 shadow-sky-950/30"
                            : "border-zinc-700/80 bg-zinc-900/90 text-zinc-100 shadow-black/30")
                    }
                >
                    <div className="mb-2 flex items-center gap-3">
                        <span
                            className={
                                "inline-flex h-8 w-8 items-center justify-center rounded-full border text-[11px] font-semibold uppercase tracking-[0.18em] " +
                                (isUser
                                    ? "border-sky-300/30 bg-sky-400/15 text-sky-100"
                                    : "border-emerald-300/20 bg-emerald-400/10 text-emerald-200")
                            }
                        >
                            {isUser ? "You" : "AI"}
                        </span>
                        <span className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${isUser ? "text-sky-200" : "text-emerald-200"}`}>
                            {isUser ? "Your message" : "Assistant reply"}
                        </span>
                    </div>
                    <p className="whitespace-pre-wrap break-words text-sm leading-7 sm:text-[15px]">
                        {content || <span className="text-zinc-400">Thinking...</span>}
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="flex h-screen w-full overflow-hidden bg-zinc-950 text-white">
            <div className="relative shrink-0">
                <SideNav />
            </div>

            <div className="relative flex min-w-0 flex-1 flex-col overflow-hidden">
                <div className="pointer-events-none absolute left-10 top-0 h-56 w-56 rounded-full bg-sky-500/15 blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 right-12 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
                    <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-6 px-4 py-6 sm:px-6 lg:px-8">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300/80">
                                AI Workspace
                            </p>
                            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                                {currentTitle}
                            </h1>
                            <p className="mt-2 max-w-2xl text-sm text-zinc-400">
                                A cleaner chat view for live responses, previous messages, and quick follow-up prompts.
                            </p>
                        </div>

                        <div className="hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right sm:block">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                                Status
                            </p>
                            <p className="mt-1 text-sm font-medium text-zinc-100">
                                {tempMessages.length > 0 ? "Generating response" : hasMessages ? "Conversation active" : "Waiting for prompt"}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
                    <div className="mx-auto flex w-full max-w-5xl flex-col gap-4">
                        {!hasMessages && (
                            <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20">
                                <div className="flex items-center gap-3">
                                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-200">
                                        AI
                                    </span>
                                    <div>
                                        <h2 className="text-lg font-semibold text-white">Start your first message</h2>
                                        <p className="mt-1 text-sm text-zinc-400">
                                            Ask a question, explore an idea, or draft something quickly. Your chat stream will appear here.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {tempMessages.map((chatMessage, index) =>
                            renderMessageBubble(chatMessage, `temp-${chatMessage.timestamp ?? index}`)
                        )}

                        {chatMessages.map((chatMessage, index) =>
                            renderMessageBubble(chatMessage, `chat-${chatMessage.timestamp ?? index}`)
                        )}
                    </div>
                </div>

                <div className="relative border-t border-white/10 bg-zinc-950/80 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
                    <div className="mx-auto w-full max-w-5xl">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault()
                                handleGetAIResponse({
                                    message,
                                    chatId: null //TODO: implement chat id
                                })
                            }}
                            className="rounded-[28px] border border-white/10 bg-zinc-900/90 p-2 shadow-2xl shadow-black/25"
                        >
                            <div className="flex items-center gap-3">
                                <input
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    type="text"
                                    placeholder="Type a message..."
                                    className="h-14 flex-1 rounded-[22px] bg-transparent px-4 text-sm text-white placeholder-zinc-500 outline-none"
                                />
                                <button
                                    type="submit"
                                    aria-label="Send message"
                                    className="inline-flex h-14 w-14 items-center justify-center rounded-[20px] bg-sky-500 text-white shadow-lg shadow-sky-950/40 transition-colors hover:bg-sky-400"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="h-5 w-5"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20 20 4m0 0-6 16-4-6-6-4 16-6Z" />
                                    </svg>
                                </button>
                            </div>
                        </form>

                        <p className="mt-3 px-2 text-xs text-zinc-500">
                            The underlying chat logic is unchanged. This update only improves the presentation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
