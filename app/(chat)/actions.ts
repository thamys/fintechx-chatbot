"use server";

import { Pinecone } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { ChatOpenAI } from "@langchain/openai";
import path from "path";
import fs from "fs";
import { PromptTemplate } from "@langchain/core/prompts";

// Inicializando o cliente Pinecone
const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!
});

// Função para carregar o JSON
async function loadJsonData() {
  const filePath = path.resolve(process.cwd(), "public", "FAQ.json");

  // Carregar e parsear o arquivo JSON
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const documents = JSON.parse(fileContent);

  
  // Transformar os documentos em formato adequado para Pinecone
  const formattedDocuments = documents.map((item: any) => ({
    pageContent: `Pergunta: ${item.Pergunta}\nResposta: ${item.Resposta}`,
  }));

  return formattedDocuments;
}

// Função para gerar embeddings e configurar o banco de dados no Pinecone
async function setupDB(documents: any[]) {
  const embeddings = new OpenAIEmbeddings();

  // Indexando documentos no Pinecone
  const vectors = await Promise.all(
    documents.map(async (doc, index) => {
      const embedding = await embeddings.embedQuery(doc.pageContent);
      return {
        id: `doc-${index}`, // Usar um ID único baseado no índice
        values: embedding,
        metadata: { pageContent: doc.pageContent }, // Adicionar metadados para buscar depois
      };
    })
  );

  const index = pinecone.Index("fintechx-chatbot"); // Nome do índice no Pinecone (crie no dashboard Pinecone)
  await index.upsert(vectors);

  return index;
}

// Função principal que será usada como server action
export async function generateResponse(message: string) {
  // Carregar os dados do JSON e configurar o banco de dados no Pinecone
  const documents = await loadJsonData();
  const index = await setupDB(documents);

  // Função para buscar a informação no Pinecone
  const embeddings = new OpenAIEmbeddings();
  const queryEmbedding = await embeddings.embedQuery(message);
  const queryResult = await index.query({
    vector: queryEmbedding,
    topK: 3,
    includeMetadata: true, // Incluir metadados para recuperar o conteúdo
  });

  const conhecimento = queryResult.matches
    .map((match) => match.metadata?.pageContent || "")
    .join("\n");

  // Configurando o modelo ChatGPT com a OpenAI API
  const llm = new ChatOpenAI({
    temperature: 0,
    modelName: "gpt-3.5-turbo",
  });

  const template = `
    Você é um assistente virtual de uma FinTech chamada FinTechX. Sua função é responder perguntas frequentes sobre o serviço de forma respeitosa.
    Vou lhe passar um FAQ e você deve responder as perguntas com base nas respostas do FAQ.
    Se a pergunta não estiver totalmente coberta pela base de conhecimento, use o que sabe para responder da melhor maneira possível, mas não invente informações.
    Caso não consiga responder com base na base de conhecimento, você deve responder "Desculpe, não sei a resposta para essa pergunta."

    Aqui está uma mensagem recebida de um cliente ou possível cliente:
    {message}

    Forneça uma resposta detalhada, usando a seguinte base de conhecimento:
    "{conhecimento}"

    Escreva a melhor resposta que responda à pergunta do cliente de forma mais objetiva, resumida e educada possível.
  `;

  const prompt = new PromptTemplate({
    inputVariables: ["message", "conhecimento"],
    template,
  });

  const chain = prompt.pipe(llm);
  const response = await chain.invoke({ message, conhecimento });

  // Retornar o texto da resposta gerada pelo modelo
  return response.content;
}
