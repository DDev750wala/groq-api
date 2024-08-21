import { Groq } from "groq-sdk";

const groq = new Groq({ apiKey: "API_KEY" });

export async function main() {
    const chatCompletion = await getGroqChatCompletion();
    console.log(chatCompletion.choices[0]?.message?.content || "");
}

export async function getGroqChatCompletion() {
    return await groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: "Prove 'Hell World' is better than 'Hello World'",
            },
        ],
        model: "llama3-8b-8192",
    });
}

main();
