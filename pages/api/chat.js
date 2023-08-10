// Make sure to add OPENAI_API_KEY as a secret

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  organization: "org-AtGsHf3BNZB5SjKkil2wEhRM"

});

const openai = new OpenAIApi(configuration);

export default async function getChat(req, res) {
  const completion = await openai.createChatCompletion({
    // Replace `gpt-4` with `gpt-3.5-turbo` if you don't have early access to GPT-4
    model: "gpt-4",
    messages: [{ "role": "system", "content": "You are a helpful assistant." }].concat(req.body.messages)

  });
  res.status(200).json({ result: completion.data.choices[0].message })

}