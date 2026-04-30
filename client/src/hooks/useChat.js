import React from 'react'
import { getAiResponse } from "../services/chat.service.js"

const useChat = () => {


    const handleGetAiRes = async (message, chatId) => {
        let res = await getAiResponse(message, chatId)
    }

    return { handleGetAiRes }
}

export default useChat