import { ConversationalRetrievalQAChain, RetrievalQAChain, loadQAStuffChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
  MessagesPlaceholder,
} from "langchain/prompts";
import { PuppeteerWebBaseLoader } from "langchain/document_loaders/web/puppeteer";
import { BufferMemory, ChatMessageHistory } from "langchain/memory";
import { HumanMessage, AIMessage, SystemMessage } from "langchain/schema";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";
import { resumeDocs } from "../../lib/constants";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
//import { RetrievalQAChain } from "langchain/chains";
import { PromptTemplate } from "langchain/prompts";
import { HtmlToTextTransformer } from "langchain/document_transformers/html_to_text";
import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";

const textSplitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 0,
});

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

  let userMsg = req.body.messages[req.body.messages.length - 1].content

  let pastMessages = transformConversation(req.body.messages);

  const chat = new ChatOpenAI({ 
    temperature: 0,
    modelName: "gpt-4",
  });


  /**
   * Loader uses `page.evaluate(() => document.body.innerHTML)`
   * as default evaluate function
   **/
  //const loader = new PuppeteerWebBaseLoader(
  const loader = new CheerioWebBaseLoader(
    //"https://sports.yahoo.com/nba-dfs-picks-yahoo-plays-085800222.html", // did not work
        //"https://www.msn.com/en-us/sports/nba/draftkings-fanduel-daily-fantasy-basketball-picks-121323-todays-top-nba-dfs-lineups/ar-AA1lrsY5", //did not work
    //"https://www.cbssports.com/nba/news/nba-dfs-draftkings-fanduel-daily-fantasy-basketball-picks-for-thursday-dec-14-include-jarrett-allen/", //worked - cbs
    //"https://dknetwork.draftkings.com/fantasy-advice/2023/12/14/24001342/fantasy-basketball-picks-today-top-draftkings-nba-dfs-targets-values-for-december-14-sga-vucevic" //worked - dk network
    "https://www.fantasylabs.com/articles/nba-dfs-picks-breakdown-on-draftkings-and-fanduel-thursday-dec-14/" // worked - fantasy labs
  );

  const docs = await loader.load();

  const splitter = RecursiveCharacterTextSplitter.fromLanguage("html");
  const transformer = new HtmlToTextTransformer();

  const sequence = splitter.pipe(transformer);

  let newDocuments = await sequence.invoke(docs);

  const loader_2 = new CheerioWebBaseLoader(
    //"https://sports.yahoo.com/nba-dfs-picks-yahoo-plays-085800222.html", // did not work
        //"https://www.msn.com/en-us/sports/nba/draftkings-fanduel-daily-fantasy-basketball-picks-121323-todays-top-nba-dfs-lineups/ar-AA1lrsY5", //did not work
    //"https://www.cbssports.com/nba/news/nba-dfs-draftkings-fanduel-daily-fantasy-basketball-picks-for-thursday-dec-14-include-jarrett-allen/", //worked - cbs
    "https://dknetwork.draftkings.com/fantasy-advice/2023/12/14/24001342/fantasy-basketball-picks-today-top-draftkings-nba-dfs-targets-values-for-december-14-sga-vucevic" //worked - dk network
    //"https://www.fantasylabs.com/articles/nba-dfs-picks-breakdown-on-draftkings-and-fanduel-thursday-dec-14/" // worked - fantasy labs
  );

  const docs_2 = await loader_2.load();
  const newDocuments_2 = await sequence.invoke(docs_2);

  const loader_3 = new CheerioWebBaseLoader(
    //"https://sports.yahoo.com/nba-dfs-picks-yahoo-plays-085800222.html", // did not work
        //"https://www.msn.com/en-us/sports/nba/draftkings-fanduel-daily-fantasy-basketball-picks-121323-todays-top-nba-dfs-lineups/ar-AA1lrsY5", //did not work
    "https://www.cbssports.com/nba/news/nba-dfs-draftkings-fanduel-daily-fantasy-basketball-picks-for-thursday-dec-14-include-jarrett-allen/", //worked - cbs
    //"https://dknetwork.draftkings.com/fantasy-advice/2023/12/14/24001342/fantasy-basketball-picks-today-top-draftkings-nba-dfs-targets-values-for-december-14-sga-vucevic" //worked - dk network
    //"https://www.fantasylabs.com/articles/nba-dfs-picks-breakdown-on-draftkings-and-fanduel-thursday-dec-14/" // worked - fantasy labs
  );

  const docs_3 = await loader_3.load();
  const newDocuments_3 = await sequence.invoke(docs_3);

  newDocuments = newDocuments.concat(newDocuments_2,newDocuments_3)

  //vector store
  //const splitDocs = await textSplitter.splitDocuments(resumeDocs);
  //console.log(splitDocs)

  const embeddings = new OpenAIEmbeddings();

  const vectorStore = await MemoryVectorStore.fromDocuments(newDocuments, embeddings);

  const chain = RetrievalQAChain.fromLLM(chat, vectorStore.asRetriever());

  let response = await chain.call({
    query: `With the context provided - write an blog post about the Best Picks for NBA DFS for Thursday December 14th, 2023 (12/14/23). Please to not mention the writer of the article (i.e. Mike McClure)
    Please struture the blog post like this 

    Intro
    Point Guards - Power pick: Shai Gilgeous-Alexander, Value Pick: Colin Sexton,
    Forwards - Power pick: Kawhi Leonard, Value Pick: Simone Fontecchio,
    Center - Power pick: Nikola Vucivic, Value pick: Jarrett Allen
    outro
    `,
  });
  
  console.log(response);
/*
  const promptTemplate = `Use the following article to write an blog post about the Best Picks for NBA DFS using the date in the question.
  {context}
  Date: {question}
  Blog Post: `;
    
  const prompt = PromptTemplate.fromTemplate(promptTemplate)

  const chain = new RetrievalQAChain({
    combineDocumentsChain: loadQAStuffChain(chat, { prompt }),
    retriever: vectorStore.asRetriever(),
  }); */
  /*
// Return the current conversation directly as messages and insert them into the MessagesPlaceholder in the above prompt.
const memory = new BufferMemory({
  //returnMessages: true,
    chatHistory: new ChatMessageHistory(pastMessages),
    memoryKey: "chat_history"
});


let response = await chain.call({
  query: userMsg
});

console.log(response);
*/


  //console.log(req.body.messages)
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

  /*

    // Return the current conversation directly as messages and insert them into the MessagesPlaceholder in the above prompt.
    const memory = new BufferMemory({
      //returnMessages: true,
        chatHistory: new ChatMessageHistory(pastMessages),
        memoryKey: "chat_history"
    });

  const executor = await initializeAgentExecutorWithOptions(tools, chat, {
    agentType: "chat-conversational-react-description",
    memory,
    //pompt: chatPrompt,
    //verbose: true,
  });
  console.log("Loaded agent.");

  //const input0 = "hi, i am bob";

  response = await executor.call({ input: userMsg });

  console.log(`Got output ${response.output}`);*/

  ///

  //console.log(result)

  res.status(200).json({ result: {
    role: 'assistant',
    content: response.text //for agents: response.text, for chains: response.text
  } })

}