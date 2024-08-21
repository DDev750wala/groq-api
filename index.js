import { Groq } from "groq-sdk";

const groq = new Groq({ apiKey: "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" });

export async function main() {
    const chatCompletion = await getGroqChatCompletion();
    // Print the completion returned by the LLM.
    console.log(chatCompletion.choices[0]?.message?.content || "");
}

export async function getGroqChatCompletion() {
    return await groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: "Explain the importance of fast language models",
            },
        ],
        model: "llama3-8b-8192",
    });
}

// Call the main function to execute it
main();
