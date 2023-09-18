// Make sure to add OPENAI_API_KEY as a secret

import { Configuration, OpenAIApi } from "openai";
import { resumeData } from "../../lib/constants";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Replace with your actual API key

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
  organization: "org-AtGsHf3BNZB5SjKkil2wEhRM"

});

const openai = new OpenAIApi(configuration);

const url = 'https://api.openai.com/v1/embeddings';
const headers = {
  'Authorization': `Bearer ${OPENAI_API_KEY}`,
  'Content-Type': 'application/json'
};

const data = {
  input: resumeData,
  model: 'text-embedding-ada-002'
};

async function fetchEmbeddings() {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error:', error);
  }
}


export default async function getChat(req, res) {

    let embeddingObj = await fetchEmbeddings() //not ideal to get an embedding every chat, move this to a database or at least once when the application is loaded.

    console.log(embeddingObj)

    const completion = await openai.createChatCompletion({
        // Replace `gpt-4` with `gpt-3.5-turbo` if you don't have early access to GPT-4
        model: "gpt-4",
        messages: [{ "role": "system", "content": "You are a helpful assistant." }].concat(req.body.messages)

    });
    res.status(200).json({ result: completion.data.choices[0].message })

}