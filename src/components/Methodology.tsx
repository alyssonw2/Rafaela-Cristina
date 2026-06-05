/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Flame, Dumbbell, Apple, Heart, Activity, ShieldCheck, Check } from "lucide-react";

export default function Methodology() {
  const cards = [
    {
      title: "Emagrecimento Saudável",
      desc: "Protocolos voltados à redução de gordura corporal de maneira sustentável, respeitando sua individualidade e focado em manter a massa magra intacta.",
      icon: Flame,
      features: ["Aceleração metabólica", "Sem dietas restritivas extremas", "Foco em saciedade duradoura"]
    },
    {
      title: "Hipertrofia & Performance",
      desc: "Evolução física direcionada de forma limpa. Prescrição focada em ganho de massa muscular, aumento de força e melhoria de desempenho na academia ou esporte.",
      icon: Dumbbell,
      features: ["Periodização do consumo de carboidrato", "Suplementação inteligente com base científica", "Definição corporal estruturada"]
    },
    {
      title: "Reeducação Alimentar",
      desc: "Transformação profunda na relação com a comida. Esqueça o terrorismo nutricional e aprenda a desfrutar de momentos sociais sem culpa.",
      icon: Apple,
      features: ["Cardápios fáceis com ingredientes reais", "Adaptação do apetite por doces", "Organização de compras práticas"]
    },
    {
      title: "Saúde Gastrointestinal",
      desc: "Tratamento de disbiose, refluxo, gastrite e síndrome do intestino irritável. Um sistema digestivo saudável é a chave para a absorção e a felicidade física.",
      icon: Activity,
      features: ["Redução de inchaço abdominal", "Protocolo FODMAPs (se necessário)", "Restabelecimento da flora benéfica"]
    },
    {
      title: "Nutrição Preventiva",
      desc: "Estratégia alimentar para o controle de exames laboratoriais como colesterol alto, glicose, esteatose hepática (gordura no fígado) e melhora do sono.",
      icon: Heart,
      features: ["Equilíbrio de triglicerídeos", "Prevenção de diabetes tipo II", "Aumento drástico na disposição diária"]
    },
    {
      title: "Alergias e Intolerâncias",
      desc: "Planejamento alimentício substitutivo de segurança para portadores de doença celíaca, intolerância ao glúten, lactose ou sensibilidades variadas.",
      icon: ShieldCheck,
      features: ["Substitutos saborosos e fáceis", "Orientação de rótulos nos mercados", "Recuperação de carências nutricionais"]
    }
  ];

  return (
    <section id="metodologia" className="py-24 bg-[#FAF9F6] border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block Section */}
        <div className="space-y-4 mb-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#7c3aed] font-semibold border-b border-[#7c3aed]/20 pb-1.5 inline-block">
            PROTOCOLOS DE ALTA PERFORMANCE E SAÚDE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4.5xl text-stone-900 font-bold tracking-tight">
              Áreas de Atuação & Metodologia
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
              Tratamentos focados na individualidade bioquímica. Cada plano alimentar é único e desenvolvido para se adaptar perfeitamente ao seu paladar e realidade financeira.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-5 shadow-xs max-w-sm">
              <p className="text-stone-700 text-xs sm:text-sm leading-normal font-light">
                ✨ <strong className="text-[#7c3aed]">Sem suplementos caros obrigatórios:</strong> Usamos comida de verdade de fácil acesso nos supermercados e feiras de Sete Lagoas.
              </p>
            </div>
          </div>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-[35px] border border-stone-200/80 shadow-xs hover:shadow-md hover:border-[#7c3aed]/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-[#7c3aed]/10 text-[#7c3aed] flex items-center justify-center border border-[#7c3aed]/10 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-5 h-5 text-[#7c3aed]" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-[#7c3aed] transition-colors leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-stone-500 text-xs sm:text-sm leading-relaxed font-light">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Sub features Bullet lists from screenshot */}
                <div className="border-t border-stone-100 mt-6 pt-5 space-y-2">
                  {card.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2 text-stone-600 text-xs sm:text-sm font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]/70"></span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Horizontal Status Pill */}
        <div className="flex justify-center">
          <div className="inline-flex items-center space-x-2 bg-stone-900 px-6 py-3 rounded-full text-white text-xs sm:text-sm font-light tracking-wide shadow-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Atendimento nos formatos presencial e por telemedicina segura</span>
          </div>
        </div>

      </div>
    </section>
  );
}
