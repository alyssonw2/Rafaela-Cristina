/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { MapPin, Clock, Copy, Check, Navigation, Car, Landmark, ExternalLink } from "lucide-react";

export default function Location() {
  const [copied, setCopied] = useState(false);
  const addressString = "Rua Dr. Pedro Luiz, 210, sala 202, segundo andar, Centro, Sete Lagoas - MG, 35700-004, Brasil";

  const handleCopy = () => {
    navigator.clipboard.writeText(addressString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="localizacao" className="py-24 bg-[#f5f5f7] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#7c3aed] font-semibold border-b border-[#7c3aed]/20 pb-1.5 inline-block">
            CONSULTÓRIO E TELEMEDICINA
          </span>
          <h2 className="font-serif text-3xl sm:text-4.5xl text-stone-900 font-bold tracking-tight">
            Onde se Consultar em Sete Lagoas & Online
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Card left: Clinic details (5 columns or 6) */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-between space-y-8 bg-white p-8 md:p-10 rounded-[35px] border border-stone-200 shadow-xs">
            
            <div className="space-y-8 text-stone-850">
              
              {/* Item 1: Consultório */}
              <div className="space-y-2.5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#7c3aed] font-black block">
                  📍 CONSULTÓRIO PRESENCIAL
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                  Consultório Centro Sete Lagoas
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
                  Rua Dr. Pedro Luiz, 210, Sala 202, Centro - Sete Lagoas, MG. Edifício comercial de alto padrão em frente aos principais pontos comerciais e próximo à histórica Praça do CAT.
                </p>
                
                {/* Copy Button */}
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center space-x-1.5 text-[10px] font-bold font-mono uppercase tracking-wider text-[#7c3aed] hover:text-[#6d28d9] transition-all cursor-pointer bg-[#7c3aed]/5 hover:bg-[#7c3aed]/10 px-3 py-1.5 rounded-lg"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Endereço Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Endereço</span>
                    </>
                  )}
                </button>
              </div>

              {/* Item 2: Online */}
              <div className="space-y-2.5 border-t border-stone-100 pt-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#7c3aed] font-black block">
                  💻 TELEMEDICINA VÁLIDA
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                  Consulta de Alta Performance Online
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
                  Chamadas de vídeo interativas via Google Meet ou aplicativo oficial. Receituários digitais estruturados com QR Code e assinatura válidos em todas as redes de farmácias do Brasil.
                </p>
              </div>

              {/* Item 3: Contatos */}
              <div className="space-y-2 border-t border-stone-100 pt-6 font-light text-xs sm:text-sm text-stone-600">
                <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400 font-bold block mb-2">
                  ℹ️ CONTATOS OFICIAIS
                </span>
                <p>Supporte Direct: <strong className="text-stone-900 font-semibold font-mono">rafaelacrisnutricionista@hotmail.com</strong></p>
                <p>Instagram Ativo: <strong className="text-stone-900 font-semibold font-mono">@nutrirafa.a</strong></p>
              </div>

            </div>

            {/* Hours summary */}
            <div className="border-t border-stone-150 pt-5 space-y-2">
              <div className="flex items-center space-x-2.5 text-xs font-mono font-bold text-[#7c3aed] uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Horários: Seg a Sex: 08h às 19h • Sáb: 09h às 13h</span>
              </div>
            </div>

          </div>

          {/* Right Section: Architectural Mock up Map Component (7 columns) */}
          <div className="col-span-12 lg:col-span-7 relative rounded-3xl overflow-hidden border border-stone-200 bg-white shadow-sm min-h-[350px] lg:min-h-full flex items-center justify-center">
            
            {/* Elegant stylized mock of Google Maps displaying Sete Lagoas Central region */}
            <div className="absolute inset-0 bg-[#f5f5f7] p-2 sm:p-6 flex flex-col justify-between">
              
              {/* Map Header details */}
              <div className="bg-white/95 border border-stone-200 text-stone-950 p-4 rounded-2xl flex items-center justify-between shadow-sm z-12">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-[#7c3aed] flex-shrink-0 animate-bounce">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold leading-tight">Clínica Rafaela Cristina</h4>
                    <span className="text-[10px] font-mono text-[#7c3aed] font-medium">Rua Dr. Pedro Luiz, 210, Sala 202 - Centro</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 border border-stone-200 px-2 py-1 rounded bg-stone-50 text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block"></span> Aberto
                </div>
              </div>

              {/* Graphic Mock of Sete Lagoas Central Area Streets */}
              <div className="relative flex-grow flex items-center justify-center overflow-hidden my-4 border border-stone-200 bg-[#f0f0f4] rounded-2xl pattern-grid px-8 text-center select-none">
                
                {/* Simulating streets */}
                <div className="absolute inset-x-0 h-4 bg-white/70 top-1/4"></div>
                <div className="absolute inset-x-0 h-4 bg-white/70 bottom-1/4"></div>
                <div className="absolute inset-y-0 w-4 bg-white/70 left-1/3"></div>
                <div className="absolute inset-y-0 w-4 bg-white/70 right-1/4"></div>
                
                {/* Neighbor landmarks overlay */}
                <div className="absolute top-8 left-4 bg-white rounded-sm px-2 py-1 text-[9px] font-mono border border-stone-200 text-stone-600">
                  Praça do CAT
                </div>
                <div className="absolute bottom-12 right-24 bg-white rounded-sm px-2 py-1 text-[9px] font-mono border border-stone-200 text-stone-600">
                  R. Senhor dos Passos
                </div>

                {/* Sete Lagoas Lake mock graphic (Lagoa Paulino) */}
                <div className="absolute bottom-4 left-6 w-32 h-20 bg-sky-200/50 rounded-full border border-sky-300 opacity-90 flex items-center justify-center font-serif text-[10px] text-sky-700 font-semibold select-none">
                  Lagoa Paulino
                </div>

                <div className="relative p-6 bg-white/95 border border-stone-200 rounded-3xl z-10 shadow-md max-w-xs space-y-4">
                  <span className="inline-block p-2 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] border border-[#7c3aed]/20">
                    <Navigation className="w-6 h-6 animate-pulse" />
                  </span>
                  <p className="font-serif text-sm font-bold text-stone-900 leading-snug">
                    Consultório localizado no Centro Comercial Principal de Sete Lagoas.
                  </p>
                  <p className="text-xs text-stone-500 leading-normal">
                    Fácil acesso via ônibus ou carro vindo de qualquer região da cidade. Sala 202, segundo andar.
                  </p>
                </div>

              </div>

              {/* Map Footer interaction and link */}
              <a
                href="https://maps.app.goo.gl/cbc4pxh4TddzN4Mz8"
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 bg-[#7c3aed] hover:bg-[#6d28d9] hover:shadow-lg transition-all rounded-2xl text-white text-center font-serif font-semibold text-sm tracking-wide z-12 cursor-pointer inline-flex items-center justify-center shadow-md shadow-[#7c3aed]/20"
              >
                Abrir Rota no Google Maps
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
