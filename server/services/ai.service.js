import { ChatMistralAI } from "@langchain/mistralai";
import { createAgent, toolStrategy } from "langchain"
import z from "zod";

const model = new ChatMistralAI({ model: "mistral-medium-latest" });

const agent = createAgent({ model, tools: [] })

const titleAgent = createAgent({
    model,
    tools: [],
    responseFormat: toolStrategy(z.object({
        chatTitle: z.string().describe("A concise title for the given message")
    }))
})

const getAIResponse = async (userInput) => await agent.stream({ messages: [{ role: "user", content: userInput }] }, { streamMode: "messages" })

const getTitle = async (userInput) => await titleAgent.invoke({
    messages: [{
        role: "user", 
        content: `Generate a concise title for the following message: ${userInput}`
    }]
})

export { getAIResponse, getTitle }