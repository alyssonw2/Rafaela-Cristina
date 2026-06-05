import React from "react";
import { Compass, ArrowRight } from "lucide-react";

interface ProfileQuizIntroProps {
  onStartQuiz: () => void;
}

export default function ProfileQuizIntro({ onStartQuiz }: ProfileQuizIntroProps) {
  return (
    <section id="descobrir-perfil" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        
        {/* Caption */}
        <div className="space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#7c3aed] font-semibold border-b border-[#7c3aed]/20 pb-1.5 inline-block">
            DESCOBRA SEU PERFIL DE SAÚDE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold tracking-tight">
            Identifique Seu Perfil de Prática Nutricional
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            O preenchimento leva no máximo 1 minuto. Responder a essas perguntas nos permite estimar sua taxa metabólica inicial e estruturar as orientações ideais para a sua consulta no WhatsApp de maneira automatizada.
          </p>
        </div>

        {/* Central interactive card resembling screenshot */}
        <div className="bg-[#fcfbf9] border border-stone-200/80 rounded-[40px] p-8 md:p-12 hover:shadow-lg transition-all duration-300 relative overflow-hidden group max-w-2xl mx-auto flex flex-col items-center">
          
          {/* Target/Compass Floating Icon */}
          <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center border border-stone-200 text-[#7c3aed] mb-6 group-hover:scale-105 transition-transform duration-350">
            <Compass className="w-8 h-8 animate-pulse text-[#7c3aed]" />
          </div>

          <div className="space-y-3 mb-8">
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Iniciar Questionário Pré-Análise
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-light">
              Responda a 4 perguntas simples em tela cheia sobre seu objetivo, identificação, sua idade e modalidade de preferência, sem solicitar dados de contato adicionais.
            </p>
          </div>

          {/* Solid deep button */}
          <button
            onClick={onStartQuiz}
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-serif font-bold text-sm tracking-wide transition-all shadow-md active:scale-95 cursor-pointer text-center group"
          >
            FAZER DIAGNÓSTICO DE PERFIL
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>

      </div>
    </section>
  );
}
