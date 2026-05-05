import { getAiResponse } from "../services/chat.service";

const useChat = () => {

    const handleAiResponse = () => {
        getAiResponse()
    }

    return {handleAiResponse}
}

export default useChat;