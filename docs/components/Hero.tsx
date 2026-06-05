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
    <section id="inicio" className="relative pt-12 pb-20 md:py-28 overflow-hidden bg-[#faf9f6]">
      
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

          {/* Photograph frame replicate: double round design with text bubble below */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Background circular ornaments */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-80 h-72 sm:h-80 rounded-full border border-dotted border-[#7c3aed]/20 animate-[spin_40s_linear_infinite]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#7c3aed]/5 -z-10 blur-xl"></div>
            
            {/* Main Picture Portrait Card - revised layout to give supreme prominence to the photograph */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] bg-white rounded-[40px] p-4 shadow-xl border border-stone-200/85 flex flex-col group">
              
              {/* Profile Image - Magnified Portrait cutout with premium rounded corners to highlight the amazing photo context */}
              <div className="relative w-full aspect-[4/4.6] rounded-[32px] overflow-hidden shadow-sm bg-stone-50 border border-stone-100">
                <img
                  src={nutriRafaela}
                  alt="Dra. Rafaela Cristina"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Status Overlay Bubble inspired by screenshot's info bubble */}
              <div className="w-full bg-stone-50/80 rounded-[28px] p-4 border border-stone-100/60 shadow-xs flex flex-col items-center text-center space-y-1 mt-4">
                <div className="flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Atendimento Ativo</span>
                </div>
                <p className="text-stone-900 font-serif text-sm font-bold leading-none">
                  Sete Lagoas & Online
                </p>
                <p className="text-[#7c3aed] font-mono text-[10px] tracking-widest font-black uppercase">
                  @nutrirafa.a
                </p>
              </div>

              {/* Floating Green WhatsApp Bubble indicator exactly corresponding to image, styled elegantly */}
              <a
                href="https://wa.me/5531998495033"
                target="_blank"
                rel="noreferrer"
                className="absolute -right-3 top-1/3 p-3 bg-emerald-500 hover:bg-emerald-600 rounded-full text-white shadow-lg cursor-pointer transform hover:scale-110 active:scale-95 transition-all z-20"
                id="hero-whatsapp-bubble"
              >
                <svg className="w-5.5 h-5.5 fill-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.591 2.016 14.133.991 11.6.991c-5.442 0-9.87 4.372-9.874 9.802-.001 1.73.468 3.424 1.356 4.935L2.073 21.05l5.574-1.46c.15.08.1.05.001 0z" />
                </svg>
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
