import { useEffect } from "react";
import { useRef } from "react";

import Mensagem from "./Mensagem";

const ListaMensagem = ({ mensagens, loading }) => {
  const mensagemRef = useRef();

  const scrollBaixo = () => {
    mensagemRef.current.scrollintoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollBaixo();
  }, [mensagens]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {mensagens.map((mensagem) => (
        <Mensagem key={mensagem.id} mensagem={mensagem} />
      ))}

      {loading && (
        <div className="flex justify-start">
          <div className="bg-gray-50 rounded-2xl rounded-bl-none shadow-md border-gray-200">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse delay-100"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      )}

      <div ref={mensagemRef}></div>
    </div>
  );
};

export default ListaMensagem;
