// import * as openai from 'openai';

// create an async function which will call the API
// export async function SendMsgtoOpenAi(message) {
//   const response = await openai.Completion.create({
//     engine: 'text-davinci-003',  // 'model' has been replaced with 'engine'
//     prompt: message,
//     temperature: 0.7,
//     max_tokens: 256,
//     top_p: 1,
//     frequency_penalty: 0,
//     presence_penalty: 0,
//     api_key: "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", // Include your API key here
//   });

//   return response.choices[0].text;
// }

import { Configuration, OpenAIApi } from 'openai';

const config = new Configuration({ apikey: "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" });
const openapi = new OpenAIApi(config);

export async function SendMsgtoOpenAi(message) {
  const res = await openapi.createCompletion({
    engine: 'gpt-3.5-turbo-instruct',
    prompt: message,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return res.choices[0].text;
}

