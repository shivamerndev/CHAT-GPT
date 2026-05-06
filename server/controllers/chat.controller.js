import * as chatDao from "../dao/chat.dao.js";
import { getAIResponse, getTitle } from "../services/ai.service.js";


const generateTitle = async (userInput) => {

    const data = await getTitle({ message: userInput })
    const chat = await chatDao.createChat({ title: data.chatTitle, user: req.user.id })
    
    res.write(`title: ${JSON.stringify({ title: data.chatTitle, chatId: chat._id })}\n\n`)

    return chat
}

export const handleMessage = async (req, res) => {

    const userInput = req.body.input;

    const stream = await getAIResponse(userInput)

    let AIMessage = ""

    for await (const chunk of stream) {
        AIMessage += chunk[0].contentBlocks[0].text;
        console.log(AIMessage)
        // res.write(`stream: ${JSON.stringify({ text: chunk[0].contentBlocks[0].text })}\n\n`);
    }
    res.status(200).json({ AIMessage })
}