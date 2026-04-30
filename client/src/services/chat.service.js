const getAiResponse = async (message, chatId) => {

    const res = fetch("/api/chats", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: message, chatId
        })
    })

    const stream = res.body;

    const decoder = new TextDecoder();


    for await (const chunk of stream) {
        console.log(decoder.decode(chunk))
    }
}

export {getAiResponse}