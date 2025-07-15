import { useState } from "react";

const ChatReceitas = () => {
  const [mensagens, setMensagens] = useState([
    {
      id: 1,
      text: "Olá! Sou seu assistente de receitas, como posso ajudar você hoje?",
      remetent: "bot",
    },
    {
      id: 2,
      text: "frango assado",
      remetent: "usuario",
    },
    {
      id: 3,
      text: `Frango Assado Simples e Suculento
Essa receita foca em um frango inteiro bem temperado e assado até ficar dourado por fora e suculento por dentro.

Ingredientes
1 frango inteiro (aproximadamente 1,5 kg a 2 kg)
2 colheres de sopa de manteiga (em temperatura ambiente ou derretida)
4 dentes de alho picados ou amassados
1 colher de chá de sal (ou a gosto)
1/2 colher de chá de pimenta-do-reino moída (ou a gosto)
1 colher de chá de páprica doce (opcional, para cor e sabor)
1/2 colher de chá de alecrim seco (ou 1 ramozinho fresco)
1/2 colher de chá de tomilho seco (ou 1 ramozinho fresco)
1 limão (suco e rodelas)
1 cebola média cortada em 4 partes (opcional, para rechear)
Batatas e cenouras picadas em pedaços grandes (opcional, para assar junto)`,
      remetent: "bot",
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-gray-50 to-esmerald-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-esmerald-600 text-transparent bg-clip-text mb-2">
            Dev Chef
          </h1>
          <p className="text-gray-600 text-lg">
            Seu assistente pessoal para receitas deliciosas
          </p>
        </header>
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl"></div>
        asd
      </div>
    </div>
  );
};

export default ChatReceitas;
