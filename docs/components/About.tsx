/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Sparkles, Award, Shield, Utensils, Heart } from "lucide-react";
import nutriRafaela from "../assets/images/nutri_rafaela_1780679480888.png";

export default function About() {
  const handleScrollToQuiz = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("descobrir-perfil");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Visual Showcase (5 columns) */}
          <div className="relative col-span-12 lg:col-span-5 mb-16 lg:mb-0 flex justify-center">
            
            {/* Elegant Background Card Design */}
            <div className="absolute -inset-4 bg-[#7c3aed]/5 rounded-[40px] transform rotate-3 scale-95 md:scale-100"></div>
            <div className="absolute inset-0 bg-stone-50 rounded-[40px] border border-stone-200 transform -rotate-1"></div>
            
            {/* Nutritionist Photo Wrapper */}
            <div className="relative border-4 border-white rounded-[40px] overflow-hidden shadow-xl max-w-sm sm:max-w-md group">
              <img
                src={nutriRafaela}
                alt="Nutricionista Rafaela Cristina"
                className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Gold/Brass Clinical Ribbon Tag overlaid inside */}
              <div className="absolute top-4 left-4 bg-stone-900 text-white py-1.5 px-3.5 rounded-full text-[10px] font-mono uppercase tracking-widest font-black shadow-lg border border-stone-800">
                🚀 REGISTRO OFICIAL CRN-7
              </div>
              
              {/* Dynamic Bottom Tag */}
              <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md p-5 rounded-3xl border border-stone-150 text-center shadow-lg">
                <p className="font-serif text-xl font-bold text-stone-900 leading-none">Rafaela Cristina</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#7c3aed] font-bold mt-1.5">
                  Nutricionista de Alta Performance Sete Lagoas
                </p>
              </div>
            </div>

          </div>

          {/* Interactive Content (7 columns) */}
          <div className="col-span-12 lg:col-span-7 space-y-8 lg:pl-4">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#7c3aed] font-semibold border-b border-[#7c3aed]/20 pb-1.5 inline-block">
                SUA PARCEIRA NA JORNADA DE SAÚDE
              </span>
              <h2 className="font-serif text-3xl sm:text-4.5xl text-stone-900 font-bold tracking-tight">
                Quem é a Dra. Rafaela Cristina?
              </h2>
              <p className="font-mono text-xs uppercase tracking-wider text-stone-500 font-bold">
                Nutricionista Clínica Especializada em Emagrecimento, Hipertrofia e Metabolismo
              </p>
            </div>

            <blockquote className="border-l-4 border-[#7c3aed] pl-5 italic text-stone-700 font-serif text-lg leading-relaxed py-3 bg-[#7c3aed]/5 border border-[#7c3aed]/10 rounded-r-2xl max-w-2xl">
              "Acredito que comer bem não deve ser sinônimo de autopunição ou restrição severa. Minha missão é guiar você na reconstrução de hábitos inteligentes, descobrindo o real poder dos alimentos."
            </blockquote>

            <div className="text-stone-600 space-y-4 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Como especialista em nutrição clínica aplicada ao metabolismo, compreendo que dietas de gaveta falham de forma cruel porque ignoram a individualidade bioquímica de cada organismo.
              </p>
              <p>
                Por isso, desenvolvo estratégias nutricionais verdadeiramente personalizadas combinando exames laboratoriais, avaliação física aprofundada e a realidade do seu paladar. Isso cria uma rotina sustentável e resultados de alto padrão que permanecem de forma inabalável de ano em ano.
              </p>
            </div>

            {/* Checkmark Bullets replicating the inspired screenshot */}
            <div className="space-y-3.5 pt-2 border-t border-stone-150">
              <div className="flex items-center space-x-3 text-stone-800 text-sm sm:text-base font-light">
                <span className="w-5 h-5 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] flex items-center justify-center font-mono text-xs font-black leading-none">✓</span>
                <span>Prescrições minuciosas embasadas em exames de sangue recentes</span>
              </div>
              <div className="flex items-center space-x-3 text-stone-800 text-sm sm:text-base font-light">
                <span className="w-5 h-5 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] flex items-center justify-center font-mono text-xs font-black leading-none">✓</span>
                <span>Acompanhamento real do seu metabolismo sem terrorismo alimentar</span>
              </div>
              <div className="flex items-center space-x-3 text-stone-800 text-sm sm:text-base font-light">
                <span className="w-5 h-5 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] flex items-center justify-center font-mono text-xs font-black leading-none">✓</span>
                <span>Suporte contínuo individualizado no WhatsApp para retirar dúvidas</span>
              </div>
              <div className="flex items-center space-x-3 text-stone-800 text-sm sm:text-base font-light">
                <span className="w-5 h-5 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] flex items-center justify-center font-mono text-xs font-black leading-none">✓</span>
                <span>Acesso a receitas práticas e adaptadas ao seu orçamento local</span>
              </div>
            </div>

            {/* In-content CTA to match style */}
            <div className="pt-4">
              <a
                href="#descobrir-perfil"
                onClick={handleScrollToQuiz}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-serif font-bold text-sm tracking-wide transition-all shadow-md cursor-pointer"
              >
                Preencher Pré-Diagnóstico Clínico
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
