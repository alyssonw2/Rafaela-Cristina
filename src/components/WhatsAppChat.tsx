/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { MessageSquare, ArrowRight, Zap } from "lucide-react";

export default function WhatsAppChat() {
  const [isHovered, setIsHovered] = useState(false);
  const phone = "5531998495033";
  const defaultText = encodeURIComponent(
    "Olá, Nutricionista Rafaela! Acessei seu portal e gostaria de solicitar informações sobre valores e horários para agenciamento de consulta."
  );

  const handleOpenWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${defaultText}`, "_blank");
  };

  return (
    <div
      onClick={handleOpenWhatsApp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-40 flex items-center bg-[#25d366] text-white p-3.5 sm:p-4 rounded-full cursor-pointer shadow-xl shadow-[#25d366]/20 transition-all duration-300 transform active:scale-90 hover:scale-105"
      aria-label="Atendimento WhatsApp"
    >
      {/* Pulsing glow surround effect */}
      <div className="absolute inset-0 bg-[#25d366]/30 rounded-full animate-ping -z-10"></div>
      
      {/* Icon */}
      <div className="relative">
        {/* Lucide MessageSquare representing high-fidelity WhatsApp */}
        <MessageSquare className="w-6 h-6 fill-white text-[#25d366]" />
        
        {/* Busy / Active Status indicator badge */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border border-white"></span>
        </span>
      </div>

      {/* Slide-out text label on Hover / Micro-expansion */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-out flex items-center ${
          isHovered ? "max-w-[200px] ml-3 opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        <span className="whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-wider">
          Falar no WhatsApp
        </span>
        <Zap className="w-3 h-3 ml-1 text-white fill-white animate-pulse" />
      </div>
    </div>
  );
}
