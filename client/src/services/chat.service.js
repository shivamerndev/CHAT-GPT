export const getAiResponse = async (input = "Hey what's your name?") => {

    const res = await fetch("/api/chats", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({input})
    })

    console.log(res)
}