/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ArrowRight, Instagram, MapPin } from "lucide-react";
import { gsap } from "gsap";

interface NavbarProps {
  onStartQuiz: () => void;
}

export default function Navbar({ onStartQuiz }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  // GSAP animation for opening the full-screen mobile menu
  useEffect(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      // Open Menu animation
      gsap.killTweensOf(menuRef.current);
      gsap.killTweensOf(".menu-link");

      gsap.fromTo(
        menuRef.current,
        { y: "-100%" },
        {
          y: "0%",
          duration: 0.6,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        ".menu-link",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    } else {
      // Close Menu animation
      gsap.killTweensOf(menuRef.current);
      gsap.to(menuRef.current, {
        y: "-100%",
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [isOpen]);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#f5f5f7]/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex items-center justify-between h-20">
          {/* Brand/Logo */}
          <div className="flex-shrink-0 flex flex-col">
            <span className="font-serif text-xl sm:text-2xl tracking-tight text-stone-900 font-bold">
              Rafaela Cristina
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#7c3aed] font-semibold">
              Nutricionista Clínica • CRN-7
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => handleLinkClick("#inicio")}
              className="text-stone-600 hover:text-[#7c3aed] font-medium text-sm transition-colors cursor-pointer relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#7c3aed] hover:after:w-full hover:after:transition-all hover:after:duration-300"
            >
              Início
            </button>
            <button
              onClick={() => handleLinkClick("#sobre")}
              className="text-stone-600 hover:text-[#7c3aed] font-medium text-sm transition-colors cursor-pointer relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#7c3aed] hover:after:w-full hover:after:transition-all hover:after:duration-300"
            >
              Sobre Mim
            </button>
            <button
              onClick={() => handleLinkClick("#metodologia")}
              className="text-stone-600 hover:text-[#7c3aed] font-medium text-sm transition-colors cursor-pointer relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#7c3aed] hover:after:w-full hover:after:transition-all hover:after:duration-300"
            >
              Método
            </button>
            <button
              onClick={() => handleLinkClick("#depoimentos")}
              className="text-stone-600 hover:text-[#7c3aed] font-medium text-sm transition-colors cursor-pointer relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#7c3aed] hover:after:w-full hover:after:transition-all hover:after:duration-300"
            >
              Depoimentos
            </button>
            <button
              onClick={() => handleLinkClick("#localizacao")}
              className="text-stone-600 hover:text-[#7c3aed] font-medium text-sm transition-colors cursor-pointer relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#7c3aed] hover:after:w-full hover:after:transition-all hover:after:duration-300"
            >
              Consultório
            </button>

            <button
              onClick={onStartQuiz}
              id="nav-cta"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#7c3aed] hover:bg-[#6d28d9] active:scale-95 transition-all duration-200 cursor-pointer shadow-md shadow-[#7c3aed]/15"
            >
              Análise de Perfil
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              ref={toggleBtnRef}
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-800 hover:text-[#7c3aed] p-2 focus:outline-none cursor-pointer"
              aria-label="Alternar Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Fullscreen Overlay */}
      <div
        ref={menuRef}
        id="mobile-navigation-overlay"
        className="fixed inset-x-0 top-0 h-screen bg-[#f5f5f7] text-stone-900 z-50 flex flex-col justify-between px-6 py-8 transform -translate-y-full md:hidden"
      >
        <div className="flex justify-between items-center border-b border-stone-200 pb-6">
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-tight text-stone-900 font-bold">
              Rafaela Cristina
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#7c3aed] font-semibold">
              Nutricionista Clínica • CRN-7
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone-800 hover:text-[#7c3aed] p-2 focus:outline-none cursor-pointer"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Link Options */}
        <div className="flex flex-col space-y-6 my-auto">
          {[
            { label: "Início", href: "#inicio" },
            { label: "Sobre Mim", href: "#sobre" },
            { label: "Método de Atendimento", href: "#metodologia" },
            { label: "Casos de Sucesso", href: "#depoimentos" },
            { label: "Nosso Consultório", href: "#localizacao" },
          ].map((item) => (
            <button
              key={item.href}
              onClick={() => handleLinkClick(item.href)}
              className="menu-link font-serif text-2xl tracking-wide text-left text-stone-800 hover:text-[#7c3aed] transition-colors focus:outline-none active:scale-95 cursor-pointer py-1"
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => {
              setIsOpen(false);
              onStartQuiz();
            }}
            className="menu-link w-full py-4 rounded-full bg-[#7c3aed] text-white font-serif font-semibold text-lg text-center tracking-wide shadow-lg shadow-[#7c3aed]/20 active:scale-95 transition-all cursor-pointer inline-flex items-center justify-center"
          >
            Fazer Análise de Perfil
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Footer info inside menu */}
        <div className="border-t border-stone-200 pt-6 flex flex-col space-y-3">
          <p className="font-mono text-[10px] text-stone-500 text-center">
            rafaelacrisnutricionista@hotmail.com
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/nutrirafa.a"
              target="_blank"
              rel="noreferrer"
              className="text-stone-600 hover:text-[#7c3aed] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://maps.app.goo.gl/cbc4pxh4TddzN4Mz8"
              target="_blank"
              rel="noreferrer"
              className="text-stone-600 hover:text-[#7c3aed] transition-colors flex items-center text-xs gap-1"
            >
              <MapPin className="w-4 h-4" /> Sete Lagoas, MG
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
