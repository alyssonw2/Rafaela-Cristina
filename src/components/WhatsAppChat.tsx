/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

export default function WhatsAppChat() {
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
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center bg-[#25d366] hover:bg-[#20ba5a] text-white w-14 h-14 rounded-full cursor-pointer shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
      aria-label="Atendimento WhatsApp"
    >
      {/* Sleek, official minimalistic WhatsApp Icon */}
      <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.591 2.016 14.133.991 11.6.991c-5.442 0-9.87 4.372-9.874 9.802-.001 1.73.468 3.424 1.356 4.935L2.073 21.05l5.574-1.46c.15.08.1.05.001 0z" />
      </svg>
    </div>
  );
}
