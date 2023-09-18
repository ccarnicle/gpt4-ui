import { ConversationChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
  MessagesPlaceholder,
} from "langchain/prompts";
import { BufferMemory, ChatMessageHistory } from "langchain/memory";
import { HumanMessage, AIMessage, SystemMessage } from "langchain/schema";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";

const tools = [
  new SerpAPI(process.env.SERPAPI_API_KEY, {
    location: "Austin,Texas,United States",
    hl: "en",
    gl: "us",
  }),
  new Calculator(),
];

//const openai = new OpenAIApi(configuration);

function transformConversation(conversation){
  return conversation.map(message => {
    if (message.role === 'user') {
      return new HumanMessage(message.content);
    } else if (message.role === 'assistant') {
      return new AIMessage(message.content);
    }
  });
}


export default async function getChat(req, res) {

    //console.log(req.body.messages)

    let userMsg = req.body.messages[req.body.messages.length - 1].content

    let pastMessages = transformConversation(req.body.messages);
    const chat = new ChatOpenAI({ temperature: 0 });

    // Return the current conversation directly as messages and insert them into the MessagesPlaceholder in the above prompt.
    const memory = new BufferMemory({
      //returnMessages: true,
        chatHistory: new ChatMessageHistory(pastMessages),
        memoryKey: "chat_history"
    });

    /* Use this for prompts with history
    const chatPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate(
        "The following is a friendly conversation between a human and an AI. The AI talks like a pirate and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know."
    ),
    new MessagesPlaceholder("chat_history"),
    HumanMessagePromptTemplate.fromTemplate("{input}"),
    ]);

  
    const chain = new ConversationChain({
        memory,
        prompt: chatPrompt,
        llm: chat,
        //verbose: true,
    });
    
    const result = await chain.call({
        input: userMsg,
    });

    */

     // Passing "chat-conversational-react-description" as the agent type
    // automatically creates and uses BufferMemory with the executor.
    // If you would like to override this, you can pass in a custom
    // memory option, but the memoryKey set on it must be "chat_history".
    const executor = await initializeAgentExecutorWithOptions(tools, chat, {
      agentType: "chat-conversational-react-description",
      memory,
      //pompt: chatPrompt,
      //verbose: true,
    });
    console.log("Loaded agent.");
  
    //const input0 = "hi, i am bob";
  
    const result = await executor.call({ input: userMsg });
  
    console.log(`Got output ${result.output}`);

    ///

    //console.log(result)

  res.status(200).json({ result: {
    role: 'assistant',
    content: result.output //this is differnet for chains and agents
  } })

}