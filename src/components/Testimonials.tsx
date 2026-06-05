/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Star, CheckCircle, ExternalLink } from "lucide-react";

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState("todos");

  const reviews = [
    {
      id: 1,
      name: "Fabio Teixeira",
      source: "Google Reviews",
      role: "Local Guide · 4 avaliações · 38 fotos",
      title: "Atendimento sensacional! Pode ir sem medo.",
      text: "Atendimento sensacional! Pode ir sem medo. Super profissional.",
      stars: 5,
      date: "um ano atrás",
      verified: true,
      category: "reeducacao",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 2,
      name: "Márcia Masferrer",
      source: "Google Reviews",
      role: "2 avaliações · 1 foto",
      title: "Consistência e progresso a cada dia.",
      text: "A minha experiência está sendo cada dia mais surpreendente. A cada consulta um progresso e graças a essa profissional incrível e muito competente. Estou amando e tenho certeza que os resultados vão ser ainda mais progressivos. Obrigada Rafaela pelo incentivo e aprendizado.",
      stars: 5,
      date: "um ano atrás",
      verified: true,
      category: "reeducacao",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 3,
      name: "Jéssica Nayara",
      source: "Google Reviews",
      role: "10 avaliações",
      title: "Comida de verdade que cabe no orçamento.",
      text: "Excelente profissional. Amo o atendimento dela, passa cardápios que cabem no nosso orçamento. Nos ensina a comer comida de verdade. Nada daquelas dietas super restritivas.",
      stars: 5,
      date: "um ano atrás",
      verified: true,
      category: "reeducacao",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 4,
      name: "Tatiane Alves",
      source: "Google Reviews",
      role: "6 avaliações",
      title: "Nutri flexível voltada à nossa rotina.",
      text: "Rafa é uma nutri flexível que adapta o plano alimentar à nossa rotina e preferências. Vc emagrece comendo bem! Super indico.",
      stars: 5,
      date: "2 anos atrás",
      verified: true,
      category: "emagrecimento",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 5,
      name: "Pâmella Andrade",
      source: "Google Reviews",
      role: "2 avaliações · 1 foto",
      title: "Consulta inovadora, completa e dinâmica.",
      text: "Minha experiência foi incrível, a nutri Rafaela é muito atenciosa, faz uma consulta completa. O que mais me chamou atenção é que sua reeducação alimentar é fácil de se adaptar e também super acompanha no dia a dia.",
      stars: 5,
      date: "5 anos atrás",
      verified: true,
      category: "reeducacao",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
      reply: "Nossa, que linda! Obrigada!! Estou sempre aqui 😍❤️"
    },
    {
      id: 6,
      name: "Tais Oliveira",
      source: "Google Reviews",
      role: "4 avaliações",
      title: "Tratamento satisfatório e individual.",
      text: "Melhor nutri. Trata o pacient conforme sua particularidade. Uma experiência satisfatória durante a consulta e também durante todo o processo até o retorno. Recomendo muito.",
      stars: 5,
      date: "2 anos atrás",
      verified: true,
      category: "reeducacao",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 7,
      name: "Alaiz Oliveira",
      source: "Google Reviews",
      role: "4 avaliações",
      title: "Chegar ao objetivo de forma leve e natural.",
      text: "Excelente profissional 👏🏻👏🏻👏🏻, te ajuda a chegar no seu objetivo de forma leve!!! ambiente agradável, aconchegante! Super recomendo 😍😍😍",
      stars: 5,
      date: "2 anos atrás",
      verified: true,
      category: "emagrecimento",
      avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 8,
      name: "Renato Mattos",
      source: "Google Reviews",
      role: "3 avaliações",
      title: "Amor pela nutrição impresso na consulta.",
      text: "Foi uma experiência mágica, uma profissional excelente, uma educação encantadora. A gente percebe no olhar dela a vontade em ver nosso objetivo conquistado. Uma pessoa que coloca todo seu amor pela profissão, em cada palavra dita, que faz agente acreditar no nosso potencial.",
      stars: 5,
      date: "5 anos atrás",
      verified: true,
      category: "hipertrofia",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
      reply: "Muito obrigada! Chegaremos juntos no objetivo! Conta comigoooo! 😍"
    },
    {
      id: 9,
      name: "Vanelly Silva",
      source: "Google Reviews",
      role: "9 avaliações",
      title: "Acompanhamento atencioso com leveza.",
      text: "Excelente profissional! Atenciosa durante todo o processo e faz com que a forma de se alimentar saudável seja mais leve!",
      stars: 5,
      date: "5 anos atrás",
      verified: true,
      category: "emagrecimento",
      avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=150&h=150&q=80",
      reply: "Obrigada 😍 estou sempre aqui !! ❤️"
    }
  ];

  const filteredReviews = activeTab === "todos" 
    ? reviews 
    : reviews.filter(r => r.category === activeTab);

  return (
    <section id="depoimentos" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#7c3aed] font-semibold border-b border-[#7c3aed]/20 pb-1.5 inline-block">
            HISTÓRIAS REAIS, MUDANÇAS REAIS
          </span>
          <h2 className="font-serif text-3xl sm:text-4.5xl text-stone-900 font-bold tracking-tight">
            O que dizem os pacientes da Dra. Rafaela Cristina
          </h2>
        </div>

        {/* Central Broad Google Rating Summary Card */}
        <div className="bg-stone-50 border border-stone-200 rounded-[40px] p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Big Score (3 cols) */}
          <div className="md:col-span-3 text-center md:text-left space-y-2">
            <span className="block text-5xl sm:text-6.5xl font-serif font-black text-stone-900 leading-none">
              5.0
            </span>
            <div className="flex justify-center md:justify-start space-x-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-stone-500 font-bold">
              Nota Geral (Excelente) <br />
              Baseado em +120 avaliações
            </p>
          </div>

          {/* Pillars List (5 cols) */}
          <div className="md:col-span-5 space-y-3.5 border-y md:border-y-0 md:border-x border-stone-200 py-6 md:py-2 md:px-8">
            <div className="flex items-center space-x-2.5 text-stone-700 text-sm font-light">
              <span className="text-[#7c3aed] font-bold">✓</span>
              <span>Foco em Nutrição Científica e Humanizada</span>
            </div>
            <div className="flex items-center space-x-2.5 text-stone-700 text-sm font-light">
              <span className="text-[#7c3aed] font-bold">✓</span>
              <span>Suporte diário via WhatsApp Individual</span>
            </div>
            <div className="flex items-center space-x-2.5 text-stone-700 text-sm font-light">
              <span className="text-[#7c3aed] font-bold">✓</span>
              <span>Avaliação Corporal de Alta Precisão</span>
            </div>
          </div>

          {/* Verification (4 cols) */}
          <div className="md:col-span-4 flex flex-col items-center md:items-end justify-center text-center md:text-right space-y-4">
            <div>
              <span className="block text-xs uppercase font-mono tracking-widest text-[#7c3aed] font-bold">
                PÁGINA OFICIAL GOOGLE BUSINESS
              </span>
              <p className="text-stone-500 text-xs font-light mt-1">
                Metodologia avaliada com excelência máxima por pacientes locais.
              </p>
            </div>
            
            <a
              href="https://maps.app.goo.gl/KkR2SShhWtaGfH3Z9"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-serif font-bold text-xs tracking-wide transition-all shadow-xs cursor-pointer"
            >
              Verificar Mais no Google
              <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Filter Pills (Tabs Layout) */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { id: "todos", label: "Todas as Avaliações" },
            { id: "emagrecimento", label: "Emagrecimento" },
            { id: "hipertrofia", label: "Hipertrofia" },
            { id: "reeducacao", label: "Reeducação Alimentar" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider font-mono transition-all cursor-pointer border ${
                activeTab === tab.id
                  ? "bg-[#7c3aed] text-white border-[#7c3aed]"
                  : "bg-stone-50 hover:bg-stone-100 text-stone-600 border-stone-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-stone-50/55 p-8 rounded-[35px] border border-stone-150 shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-6">
                
                {/* Review Header Card */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    {/* User Circular Avatar with real person fallback */}
                    {rev.avatar ? (
                      <img
                        src={rev.avatar}
                        alt={rev.name}
                        className="w-10 h-10 rounded-full object-cover border border-white shadow-sm"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-stone-200 text-stone-700 font-serif font-bold flex items-center justify-center border border-white shadow-xs">
                        {rev.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h4 className="font-serif text-base font-bold text-stone-900 leading-tight">
                        {rev.name}
                      </h4>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-stone-400 font-bold block">
                        {rev.role}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono text-[9px] uppercase tracking-widest font-black text-[#7c3aed] bg-[#7c3aed]/10 px-2.5 py-1 rounded-sm">
                    {rev.role.includes("Local Guide") ? "Local Guide" : "Google ✅"}
                  </span>
                </div>

                {/* Stars and Title */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-0.5">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <h5 className="font-serif text-base sm:text-lg font-bold text-stone-900 italic leading-snug">
                    "{rev.title}"
                  </h5>
                </div>

                {/* Text Description */}
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
                  "{rev.text}"
                </p>

                {/* Owner Reply Speech Balloon */}
                {rev.reply && (
                  <div className="mt-4 p-4 bg-stone-100 rounded-[24px] border border-stone-200 relative">
                    {/* Speech balloon arrow tail styling */}
                    <div className="absolute -top-2 left-6 w-4 h-4 bg-stone-100 border-t border-l border-stone-200 transform rotate-45"></div>
                    <div className="space-y-1">
                      <p className="font-mono text-[9px] font-black uppercase text-stone-500 tracking-wider">
                        Resposta da Nutricionista
                      </p>
                      <p className="text-stone-700 text-xs leading-normal font-sans italic font-light">
                        "{rev.reply}"
                      </p>
                    </div>
                  </div>
                )}

              </div>

              {/* Verified Badge Footer */}
              <div className="border-t border-stone-100 mt-6 pt-5 flex justify-between items-center font-mono text-[10px] text-stone-400 font-semibold uppercase">
                <span>{rev.date}</span>
                <span className="flex items-center text-emerald-600">
                  <CheckCircle className="w-3.5 h-3.5 mr-1 text-emerald-500 fill-emerald-500/10" />
                  Paciente Verificado
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
