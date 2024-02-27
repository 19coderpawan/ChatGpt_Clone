const { OpenAI } = require("openai");

const openai = new OpenAI({
    apiKey: "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"
});

// const completion =  openai.chat.completions.create({
//     model: "gpt-3.5-turbo-0613", // Specify the desired model (e.g., gpt-4.0 or text-davinci-003)
//     messages: [
//         { role: "user", content: "Hello, how are you?" },
//         { role: "assistant", content: "I'm doing well, thanks for asking! How can I help you today?" }
//     ],
//     temperature: 0.7, // Adjust creativity (0.0 to 1.0)
//     max_tokens: 150, // Maximum response length
// });

// console.log(completion.data.choices[0].message); // Output the AI's response
async function getChatCompletion() {
    try {
        const completion = await openai.chat.completions.create({
            // ... your request options
            model: "gpt-3.5-turbo-instruct", // Specify the desired model (e.g., gpt-4.0 or text-davinci-003)
    messages: [
        { role: "user", content: "Hello, how are you?" },
        { role: "assistant", content: "I'm doing well, thanks for asking! How can I help you today?" }
    ],
    temperature: 0.7, // Adjust creativity (0.0 to 1.0)
    max_tokens: 150, // Maximum response length
        });
        console.log(completion.data.choices[0].message);
    } catch (error) {
        // Handle error
        console.log(error);
    }
}
getChatCompletion();
