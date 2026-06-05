/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Instagram, Mail, MapPin, ExternalLink, Calendar, Milestone } from "lucide-react";

interface FooterProps {
  onStartQuiz: () => void;
}

export default function Footer({ onStartQuiz }: FooterProps) {
  return (
    <footer className="bg-[#f5f5f7] text-stone-900 pt-20 pb-12 border-t border-stone-200 relative overflow-hidden">
      
      {/* Decorative gradient flare */}
      <div className="absolute -top-32 left-1/3 w-80 h-80 bg-[#7c3aed]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper call-to-action box */}
        <div className="border-b border-stone-200 pb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-stone-900">
              Pronto para construir hábitos inabaláveis?
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm">
              Sua transformação real começa com uma análise detalhada. Realize o diagnóstico agora ou fale diretamente conosco.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-end">
            <button
              onClick={onStartQuiz}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-xs font-semibold uppercase tracking-wider font-serif shadow-lg shadow-[#7c3aed]/15 transition-all text-center cursor-pointer"
            >
              Fazer Análise de Perfil
            </button>
            <a
              href="https://www.instagram.com/nutrirafa.a"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-stone-300 hover:border-[#7c3aed] text-stone-700 hover:bg-[#7c3aed]/5 text-xs font-semibold uppercase tracking-wider font-mono text-center cursor-pointer"
            >
              <Instagram className="w-4 h-4 mr-2" /> Seguir no Instagram
            </a>
          </div>
        </div>

        {/* Middle block grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-16">
          
          {/* Col 1: Bio */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-tight font-black text-stone-900">
                Rafaela Cristina
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#7c3aed] font-bold">
                Nutricionista Clínica • CRN-7
              </span>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-sm">
              Tratamento individualizado com foco em hipertrofia, emagrecimento sustentável e qualidade de vida. Atendimentos de alta performance em Sete Lagoas e consultorias à distância.
            </p>
          </div>

          {/* Col 2: Shortcuts */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#7c3aed]">
              Acesso Rápido
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-stone-600">
              <li>
                <a href="#inicio" className="hover:text-[#7c3aed] transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#7c3aed] transition-colors">Sobre Dra. Rafaela</a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-[#7c3aed] transition-colors">Metodologia de Sucesso</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#7c3aed] transition-colors">Resultados e Prova Social</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#7c3aed] transition-colors">Localização Centro</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct contact */}
          <div className="md:col-span-4 space-y-4 text-stone-600">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#7c3aed]">
              Contato Direto
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm leading-normal">
              <li className="flex items-start space-x-2.5">
                <Mail className="w-4 h-4 text-[#7c3aed] mt-0.5 flex-shrink-0" />
                <span className="break-all text-stone-600">rafaelacrisnutricionista@hotmail.com</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#7c3aed] mt-0.5 flex-shrink-0" />
                <span className="text-stone-600">
                  R. Dr. Pedro Luiz, 210, Sala 202, Centro <br />
                  Sete Lagoas - MG, 35700-004
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower copyright disclaimer banner */}
        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center text-center gap-4 text-stone-500 font-mono text-[10px] sm:text-xs">
          <div>
            &copy; {new Date().getFullYear()} Rafaela Cristina. Todos os direitos reservados.
          </div>
          <div>
            CRN-7 Atendimento Credenciado • Conselho Regional de Nutricionistas
          </div>
          <div>
            Nutrição de Resultados Reais • Desenvolvido com Sofisticação Clínico-Quântica
          </div>
        </div>

      </div>
    </footer>
  );
}
