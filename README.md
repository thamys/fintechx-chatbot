# FinTechX Chatbot

Este projeto é uma aplicação de chatbot inteligente desenvolvida para aprimorar a comunicação e o suporte ao cliente da FinTechX, utilizando **React** com **Next.js 14**, **Ant Design**, **Tailwind CSS**, **Langchain**, **Pinecone**, e a **OpenAI API**.

## **Tecnologias Utilizadas**
- **React (Next.js 14)**: Framework de desenvolvimento web.
- **Ant Design**: Biblioteca de componentes de UI.
- **Tailwind CSS**: Framework utilitário para estilização.
- **Langchain**: Para gerenciamento de fluxos de conversa e interação com LLM.
- **Pinecone**: Serviço de indexação para consultas rápidas.
- **OpenAI API**: Utilizada para gerar respostas automáticas baseadas em linguagem natural.
- **Docker**: Para containerização e facilitação do ambiente de desenvolvimento e produção.

## **Configuração do Ambiente**

### **Variáveis de Ambiente**
O projeto utiliza as seguintes variáveis de ambiente. Crie um arquivo `.env.local` na raiz do projeto e defina os valores correspondentes:

```bash
OPENAI_API_KEY=
PINECONE_API_KEY=
```
### **Pré-requisitos**
- Node.js (versão 18.17.0 ou superior)
- NPM ou Yarn
- Docker

### **Instalação**

1. Clone este repositório:
```bash
git clone https://github.com/thamys/fintechx-chatbot.git
```
2. Navegue até o diretório do projeto:
```bash
cd fintechx-chatbot
````
3. Instale as dependências:
```bash
npm install
# ou
yarn install
```
4. Configure as variáveis de ambiente conforme descrito na seção anterior.

### **Rodando o Projeto**

#### **Com Docker**
1. Certifique-se de que o Docker está instalado e rodando no seu sistema.

2. Para construir a imagem do Docker:
```bash
docker build --pull --rm -t fintechx:latest .
```

3. Para rodar o container:
```bash
docker run --rm -d -p 3000:3000/tcp fintechx:latest
```

4. O projeto estará acessível em `http://localhost:3000`.

#### **Sem Docker**
Para rodar o projeto em ambiente de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

O projeto estará acessível em `http://localhost:3000`.

### **Build para Produção**

Para gerar a build de produção:

```bash
npm run build
# ou
yarn build
```

Para rodar a build:

```bash
npm start
# ou
yarn start
```

### **Deploy**
O projeto pode ser facilmente implantado em plataformas como **Vercel** ou **Netlify**. Siga a documentação das respectivas plataformas para mais detalhes sobre como fazer o deploy.

## **Funcionalidades Principais**

- **Chatbot Inteligente**: Respostas automáticas utilizando a OpenAI API para simulação de um atendimento eficiente e personalizado.

- **Interface Responsiva**: Desenvolvida utilizando Ant Design e Tailwind para oferecer uma experiência fluida em dispositivos móveis e desktop.

- **Integração com Pinecone e Langchain**: Implementação de um sistema de indexação rápida e gestão de fluxos de conversa, fornecendo uma experiência rica e dinâmica ao usuário.
