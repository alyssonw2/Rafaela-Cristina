/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowRight } from "lucide-react";
import nutriRafaela from "../assets/images/nutri_rafaela_1780679480888.png";

interface HeroProps {
  onStartQuiz: () => void;
}

export default function Hero({ onStartQuiz }: HeroProps) {
  const handleScrollToAbout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("sobre");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative pt-16 pb-20 md:pt-36 md:pb-40 overflow-hidden bg-cover bg-center md:bg-[right_-100px_center] lg:bg-[right_-150px_center] bg-no-repeat bg-[#faf9f6]"
      style={{ backgroundImage: `url(${nutriRafaela})` }}
    >
      
      {/* Premium Gradient overlays for supreme text contrast and visual sophistication */}
      {/* On small devices: we have a solid overlay with minor transparency so the text is fully readable */}
      <div className="absolute inset-0 bg-white/85 md:hidden pointer-events-none z-0"></div>
      {/* On md+ devices: we have an elegant gradient that flows from left to right, fading seamlessly from off-white/beige to fully transparent */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#faf9f6] via-[#faf9f6]/75 to-transparent pointer-events-none z-0"></div>
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#faf9f6] from-25% via-[#faf9f6]/55 via-45% to-transparent pointer-events-none z-0"></div>
      
      {/* Decorative organic background shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#7c3aed]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-2 w-96 h-96 bg-stone-200/40 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Copy Area (7 columns) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Display Title - replica of screenshot's elegant font pairing and italic */}
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6.5xl text-stone-900 font-bold tracking-tight leading-[1.12]">
                Descomplique a alimentação e conquiste o seu{" "}
                <span className="italic font-normal font-serif text-[#7c3aed] relative inline-block">
                  peso ideal
                </span>{" "}
                de forma definitiva.
              </h1>
              
              {/* Copy paragraph directly aligned with screenshot */}
              <p className="text-stone-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-light">
                Sem dietas restritivas absurdas ou terrorismo alimentar. Eu ajudo você a mudar sua relação com a comida, redefinir sua rotina metabólica e alcançar as suas metas físicas com um protocolo 100% individualizado.
              </p>
            </div>

            {/* Action Buttons in pill layout matching the screenshot */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onStartQuiz}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-serif font-bold text-base hover:shadow-xl transition-all duration-200 cursor-pointer text-center group"
              >
                Fazer Diagnóstico de Perfil
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={handleScrollToAbout}
                className="inline-flex items-center justify-center px-6 py-4 rounded-full border border-stone-300 hover:border-[#7c3aed] hover:bg-[#7c3aed]/5 text-stone-700 text-sm font-semibold tracking-wide transition-all cursor-pointer text-center"
              >
                Conhecer a Dra. Rafaela
              </button>
            </div>

            {/* Premium Stats row matching the layout of the screenshot */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-stone-200">
              <div className="space-y-1">
                <span className="block font-serif text-3xl sm:text-4xl text-stone-900 font-bold">
                  +900
                </span>
                <span className="block font-mono text-[9px] uppercase tracking-wider text-stone-500 font-semibold leading-normal">
                  Pacientes Atendidos
                </span>
              </div>
              
              <div className="space-y-1 border-l border-stone-200 pl-4 sm:pl-6">
                <span className="block font-serif text-3xl sm:text-4xl text-stone-900 font-bold">
                  5 Estrelas
                </span>
                <span className="block font-mono text-[9px] uppercase tracking-wider text-stone-500 font-semibold leading-normal">
                  No Google & Doctoralia
                </span>
              </div>

              <div className="space-y-1 border-l border-stone-200 pl-4 sm:pl-6">
                <span className="block font-serif text-3xl sm:text-4xl text-stone-900 font-bold">
                  CRN-7
                </span>
                <span className="block font-mono text-[9px] uppercase tracking-wider text-stone-500 font-semibold leading-normal">
                  Conselho Ativo
                </span>
              </div>
            </div>

          </div>

          {/* This column is intentionally kept clear to give the background portrait of Dra. Rafaela complete prominence */}
          <div className="lg:col-span-5 h-[200px] lg:h-auto"></div>

        </div>
      </div>
    </section>
  );
}
