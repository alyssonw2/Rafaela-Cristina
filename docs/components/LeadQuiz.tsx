/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import {
  X,
  Target,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  Flame,
  CheckCircle2,
  Users2,
  Calendar,
  Activity,
  MapPin,
  Clock,
  ExternalLink,
  Globe
} from "lucide-react";
import { gsap } from "gsap";

interface LeadQuizProps {
  isOpen: boolean;
  onClose: () => void;
}

// Configurable Clinic Phone Number (WhatsApp ready, Sete Lagoas 31)
const CLINIC_WHATSAPP = "5531998495033"; 

export default function LeadQuiz({ isOpen, onClose }: LeadQuizProps) {
  const [step, setStep] = useState(0); // 0: Welcome, 1: Goal, 2: Gender, 3: Age, 4: Activity, 5: Location, 6: Diagnostic/Results
  const [objective, setObjective] = useState("");
  const [gender, setGender] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [activity, setActivity] = useState("");
  const [consultation, setConsultation] = useState("");

  const containerRef = useRef<HTMLDivElement>(null);
  const stepContainerRef = useRef<HTMLDivElement>(null);

  // Auto redirect timer for WhatsApp
  const [countdown, setCountdown] = useState(5);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize and exit GSAP animations for the main full-screen modal
  useEffect(() => {
    if (!containerRef.current) return;

    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scroll
      gsap.fromTo(
        containerRef.current,
        { y: "100%", opacity: 1 },
        { y: "0%", duration: 0.6, ease: "power4.out" }
      );
      setStep(0);
      setObjective("");
      setGender("");
      setAgeGroup("");
      setActivity("");
      setConsultation("");
      setIsTimerActive(false);
      setCountdown(5);
    } else {
      document.body.style.overflow = "";
      gsap.to(containerRef.current, {
        y: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  // GSAP animations for step-by-step content sliding
  useEffect(() => {
    if (!stepContainerRef.current) return;
    
    // Smooth fade and slide horizontal shift
    gsap.fromTo(
      stepContainerRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.45, ease: "power2.out" }
    );
  }, [step]);

  // Trigger countdown when final diagnostic is reached
  useEffect(() => {
    if (step === 6) {
      setIsTimerActive(true);
      setCountdown(5);
    } else {
      setIsTimerActive(false);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  }, [step]);

  // Countdown timer logic
  useEffect(() => {
    if (!isTimerActive) return;

    timerRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          handleWhatsAppRedirect();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerActive, objective, gender, ageGroup, activity, consultation]);

  const handleNextStep = (currentValue: string, setter: (val: string) => void) => {
    if (!currentValue) return;
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  // Compile WhatsApp message with full epidemiological markers and diagnostic summary
  const getCompiledMessage = () => {
    const header = `💎 *Análise de Perfil Nutricional Preliminar* 💎\nNutricionista Rafaela Cristina\n\nOlá Rafaela! Acabei de realizar a minha análise prévia de perfil no seu portal e gostaria de agendar uma consulta. Seguem meus dados clínicos preliminares:\n\n`;
    
    const body = `🎯 *Objetivo Principal:* ${objective}\n` +
                 `🧬 *Gênero Biológico:* ${gender}\n` +
                 `🎂 *Faixa Etária:* ${ageGroup}\n` +
                 `⚡ *Nível de Atividade:* ${activity}\n` +
                 `📍 *Preferência de Atendimento:* ${consultation}\n\n`;
                 
    const footer = `📋 Gostaria de formalizar meu atendimento clínico para iniciar minha transformação com foco em resultados reais!`;
    
    return encodeURIComponent(header + body + footer);
  };

  const handleWhatsAppRedirect = () => {
    const url = `https://api.whatsapp.com/send?phone=${CLINIC_WHATSAPP}&text=${getCompiledMessage()}`;
    window.open(url, "_blank");
  };

  // Dynamic clinical recommendations based on user selections
  const getMetabolicAnalysis = () => {
    let ageText = "";
    switch (ageGroup) {
      case "Menos de 20 anos":
        ageText = "A taxa metabólica basal está em pico biológico. O foco ideal recai sobre a modulação hormonal e formatação de hábitos alimentares sustentáveis, garantindo densidade nutricional adequada.";
        break;
      case "20 a 35 anos":
        ageText = "Taxa metabólica biologicamente madura e altamente eficiente. Momento ápice para otimização da composição corporal, com excelente resposta fisiológica a planos alimentares calculados com macro e micronutrientes específicos.";
        break;
      case "36 a 50 anos":
        ageText = "Sinais de desaceleração metabólica natural e oscilações hormonais finas. Crucial dar ênfase a estratégias anti-inflamatórias, regulação do ciclo circadiano, controle do estresse inflamatório e preservação de tecido muscular ativo.";
        break;
      case "Mais de 50 anos":
        ageText = "Indicações para preservação de massa muscular esquelética (combate à sarcopenia) e saúde celular global. Estratégias que otimizam a absorção de nutrientes chaves (cálcio, vitamina D, antioxidantes) e aporte proteico altamente controlado.";
        break;
      default:
        ageText = "Análise metabólica personalizada conforme biotipo.";
    }

    let goalText = "";
    let hydration = "35ml por kg de peso corporal ao dia";
    let keyTip = "";

    switch (objective) {
      case "Emagrecimento / Queima de Gordura":
        goalText = "Estratégia recomendada de déficit calórico inteligente e progressivo, evitando privação extrema para prevenir crises de rebote. Ênfase no controle de respostas glicêmicas e saciedade.";
        hydration = "35ml a 40ml por kg de peso corporal ao dia";
        keyTip = "Manter o consumo proteico regular para blindar a musculatura ativa e focar em fontes ricas de fibras solúveis antes das refeições principais.";
        break;
      case "Ganho de Massa Muscular / Hipertrofia":
        goalText = "Necessidade de superávit calórico limpo, associado à distribuição simétrica proteica ao longo do dia. Otimização das janelas de alimentação pré e pós-treino.";
        hydration = "40ml a 45ml por kg de peso corporal ao dia";
        keyTip = "Consumir carboidratos de digestão gradual para suprir energia muscular e fracionar o aporte de aminoácidos essenciais a cada 3-4 horas.";
        break;
      case "Melhora da Saúde e Vitalidade":
        goalText = "Conduta focada em saúde mitocondrial e reequilíbrio gastrointestinal. Introdução de fitoquímicos e alimentos funcionais altamente anti-inflamatórios.";
        hydration = "35ml por kg de peso corporal ao dia";
        keyTip = "Aumentar a variedade cromática das refeições com vegetais crucíferos, gorduras insaturadas nobres e eliminar alimentos ultraprocessados.";
        break;
      case "Tratamento de Patologias / Reeducação":
        goalText = "Programação individualizada para controle de parâmetros metabólicos (glicemia, perfil lipídico e marcadores hepáticos). Foco em alimentos de carga glicêmica baixa e modulação do microbioma.";
        hydration = "35ml por kg de peso corporal ao dia";
        keyTip = "Acompanhamento preciso para descobrir alergias ou sensibilidades alimentares ocultas através do diário clínico personalizado.";
        break;
    }

    return { ageText, goalText, hydration, keyTip };
  };

  if (!isOpen) return null;

  const analysis = getMetabolicAnalysis();

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-[#f5f5f7] text-stone-900 flex flex-col justify-between overflow-y-auto"
    >
      {/* Top Header Controls */}
      <div className="border-b border-stone-250 bg-white/95 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#7c3aed] animate-pulse"></span>
            <span className="font-mono text-xs text-stone-600 tracking-wider uppercase font-semibold">
              Diagnóstico de Perfil Clínico
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-stone-500 hover:text-stone-900 rounded-full bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer"
            aria-label="Save and Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="flex-grow flex items-center justify-center py-12 px-6">
        <div className="w-full max-w-2xl bg-white rounded-3xl border border-stone-200 p-6 md:p-10 shadow-lg shadow-stone-200/50 my-auto">
          
          {/* Progress Indicators (Hidden on Intro and Results screen) */}
          {step > 0 && step < 6 && (
            <div className="mb-8">
              <div className="flex justify-between items-center text-xs text-stone-500 font-mono mb-2">
                <span>Passo {step} de 5</span>
                <span>{Math.round((step / 5) * 100)}% concluído</span>
              </div>
              <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#7c3aed] h-full transition-all duration-300"
                  style={{ width: `${(step / 5) * 100}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Stepper Content Pane animates via GSAP */}
          <div ref={stepContainerRef}>
            
            {/* STEP 0: Welcome / Presentation screen */}
            {step === 0 && (
              <div className="text-center space-y-6">
                <div className="inline-flex p-3 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#7c3aed] mb-2">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h1 className="font-serif text-3xl md:text-4xl text-stone-900 font-bold tracking-tight">
                  Descubra o Caminho para o Seu Resultado Real
                </h1>
                <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-lg mx-auto font-light">
                  Sem barreiras cadastrais invasivas. Responda a 5 perguntas científicas rápidas sobre o seu biotipo e rotina para receber uma pré-análise clínica personalizada da Nutricionista Rafaela Cristina.
                </p>
                <div className="pt-4 flex flex-col items-center justify-center space-y-3">
                  <button
                    onClick={() => setStep(1)}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-serif font-bold text-lg hover:shadow-lg hover:shadow-[#7c3aed]/15 transition-all duration-200 cursor-pointer w-full sm:w-auto"
                  >
                    Iniciar Análise Prévia
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest font-semibold">
                    Leva menos de 1 minuto • Otimizado Clinical UX
                  </span>
                </div>
              </div>
            )}

            {/* STEP 1: Main Goal */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl md:text-3xl text-stone-900 font-bold leading-tight">
                    Qual o seu foco primordial hoje?
                  </h2>
                  <p className="text-stone-500 text-sm">
                    Isso guiará a composição metabólica dos seus macronutrientes chaves.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 pt-2">
                  {[
                    "Emagrecimento / Queima de Gordura",
                    "Ganho de Massa Muscular / Hipertrofia",
                    "Melhora da Saúde e Vitalidade",
                    "Tratamento de Patologias / Reeducação"
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setObjective(option);
                        handleNextStep(option, setObjective);
                      }}
                      className={`flex items-center justify-between p-5 rounded-2xl border text-left cursor-pointer transition-all ${
                        objective === option
                          ? "border-[#7c3aed] bg-[#7c3aed]/5 text-[#7c3aed]"
                          : "border-stone-200 hover:border-[#7c3aed]/40 text-stone-600 hover:text-[#7c3aed] hover:bg-stone-50"
                      }`}
                    >
                      <span className="font-semibold text-sm md:text-base">{option}</span>
                      <Target className={`w-5 h-5 ${objective === option ? "text-[#7c3aed]" : "text-stone-400"}`} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: Gender biological */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl md:text-3xl text-stone-900 font-bold leading-tight">
                    Qual o seu gênero biológico?
                  </h2>
                  <p className="text-stone-500 text-sm">
                    Necessário para o cálculo adequado da Taxa Metabólica de repouso.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {[
                    { label: "Feminino", desc: "Perfil hormonal estrogênio/progesterona" },
                    { label: "Masculino", desc: "Perfil hormonal testosterona dominante" }
                  ].map((option) => (
                    <button
                      key={option.label}
                      onClick={() => {
                        setGender(option.label);
                        handleNextStep(option.label, setGender);
                      }}
                      className={`flex flex-col p-6 rounded-2xl border text-left cursor-pointer transition-all ${
                        gender === option.label
                          ? "border-[#7c3aed] bg-[#7c3aed]/5 text-[#7c3aed]"
                          : "border-stone-200 hover:border-[#7c3aed]/40 text-stone-600 hover:text-[#7c3aed] hover:bg-stone-50"
                      }`}
                    >
                      <Users2 className={`w-8 h-8 mb-4 ${gender === option.label ? "text-[#7c3aed]" : "text-stone-400"}`} />
                      <span className="font-serif text-lg font-semibold">{option.label}</span>
                      <span className="text-xs text-stone-400 mt-1">{option.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: Age Range */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl md:text-3xl text-stone-900 font-bold leading-tight">
                    Qual a sua faixa etária atual?
                  </h2>
                  <p className="text-stone-500 text-sm">
                    A idade determina flutuações enzimáticas e adaptações metabólicas basais.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  {[
                    "Menos de 20 anos",
                    "20 a 35 anos",
                    "36 a 50 anos",
                    "Mais de 50 anos"
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setAgeGroup(option);
                        handleNextStep(option, setAgeGroup);
                      }}
                      className={`flex flex-col items-center justify-center p-6 rounded-2xl border text-center cursor-pointer transition-all ${
                        ageGroup === option
                          ? "border-[#7c3aed] bg-[#7c3aed]/5 text-[#7c3aed]"
                          : "border-stone-200 hover:border-[#7c3aed]/40 text-stone-600 hover:text-[#7c3aed] hover:bg-stone-50"
                      }`}
                    >
                      <Calendar className={`w-6 h-6 mb-2 ${ageGroup === option ? "text-[#7c3aed]" : "text-stone-400"}`} />
                      <span className="font-semibold text-xs md:text-sm">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 4: Physical Activity level */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl md:text-3xl text-stone-900 font-bold leading-tight">
                    Qual seu nível de atividade física?
                  </h2>
                  <p className="text-stone-500 text-sm">
                    Relevante para estipular o Gasto Energético Diário Total (GET).
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 pt-2">
                  {[
                    { label: "Sedentário", desc: "Trabalho sentado, sem rotina de exercícios físicos regulares." },
                    { label: "Moderado (1-3x por semana)", desc: "Caminhadas leves, treinos musculares ocasionais." },
                    { label: "Ativo (4-5x por semana)", desc: "Musculação intensa, corrida ou esportes bem estruturados." },
                    { label: "Atleta/Intenso", desc: "Rotina profissional ou treino diário de alta performance." }
                  ].map((option) => (
                    <button
                      key={option.label}
                      onClick={() => {
                        setActivity(option.label);
                        handleNextStep(option.label, setActivity);
                      }}
                      className={`flex items-start p-5 rounded-2xl border text-left cursor-pointer transition-all ${
                        activity === option.label
                          ? "border-[#7c3aed] bg-[#7c3aed]/5 text-[#7c3aed]"
                          : "border-stone-200 hover:border-[#7c3aed]/40 text-stone-600 hover:text-[#7c3aed] hover:bg-stone-50"
                      }`}
                    >
                      <Activity className={`w-5 h-5 mr-4 mt-0.5 flex-shrink-0 ${activity === option.label ? "text-[#7c3aed]" : "text-stone-400"}`} />
                      <div>
                        <span className="font-serif text-base font-semibold block">{option.label}</span>
                        <span className="text-xs text-stone-400 mt-1 block leading-normal">{option.desc}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 5: Consultation Preferred location */}
            {step === 5 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl md:text-3xl text-stone-900 font-bold leading-tight">
                    Como prefere ser acompanhado(a)?
                  </h2>
                  <p className="text-stone-500 text-sm">
                    Dispomos de infraestrutura presencial de ponta e teleatendimento online internacional.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {[
                    { label: "Presencial em Sete Lagoas", desc: "Clínica Centro - Bioimpedância avançada inclusa", icon: MapPin },
                    { label: "Online / Teleconsulta", desc: "Videoconferência criptografada e suporte via app", icon: Globe }
                  ].map((option) => {
                    const IconComp = option.icon === MapPin ? MapPin : Globe;
                    return (
                      <button
                        key={option.label}
                        onClick={() => {
                          setConsultation(option.label);
                          handleNextStep(option.label, setConsultation);
                        }}
                        className={`flex flex-col p-6 rounded-2xl border text-left cursor-pointer transition-all ${
                          consultation === option.label
                            ? "border-[#7c3aed] bg-[#7c3aed]/5 text-[#7c3aed]"
                            : "border-stone-200 hover:border-[#7c3aed]/40 text-stone-600 hover:text-[#7c3aed] hover:bg-stone-50"
                        }`}
                      >
                        <IconComp className={`w-8 h-8 mb-4 ${consultation === option.label ? "text-[#7c3aed]" : "text-stone-400"}`} />
                        <span className="font-serif text-lg font-semibold">{option.label}</span>
                        <span className="text-xs text-stone-400 mt-1 leading-relaxed">{option.desc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 6: Finished / Generated Dynamic Premium Diagnosis Report */}
            {step === 6 && (
              <div className="space-y-6">
                <div className="text-center space-y-2 border-b border-stone-200 pb-6">
                  <div className="inline-flex p-3 rounded-full bg-emerald-50 border border-emerald-250 text-emerald-600">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 animate-bounce" />
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl text-stone-900 font-bold leading-tight">
                    Análise Formulada com Sucesso!
                  </h2>
                  <p className="text-stone-500 text-xs font-mono uppercase tracking-wider font-semibold">
                    Perfil Otimizado • Nutricionista Rafaela Cristina
                  </p>
                </div>

                {/* Analysis Cards */}
                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-4 text-left">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-[#7c3aed]/10 text-[#7c3aed] text-[10px] font-mono uppercase font-bold tracking-widest mb-2">
                      <Flame className="w-3.5 h-3.5" /> Fisiopatologia de Idade ({ageGroup})
                    </span>
                    <p className="text-xs leading-relaxed text-stone-600">
                      {analysis.ageText}
                    </p>
                  </div>

                  <div className="border-t border-stone-200/80 pt-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-stone-200 text-stone-700 text-[10px] font-mono uppercase font-bold tracking-widest mb-2">
                      📍 Linha Dietoterápica ({objective})
                    </span>
                    <p className="text-xs leading-relaxed text-stone-600">
                      {analysis.goalText}
                    </p>
                  </div>

                  <div className="border-t border-stone-200/80 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#7c3aed] font-bold block mb-1">
                        Hidratação Recomendada
                      </span>
                      <span className="text-sm font-semibold font-serif text-stone-900">
                        {analysis.hydration}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-stone-550 font-bold block mb-1">
                        Canal Favoritável
                      </span>
                      <span className="text-sm font-semibold font-serif text-stone-900 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#7c3aed]" /> {consultation.split(" ")[0]}
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#7c3aed]/5 border-l-2 border-[#7c3aed] p-3 text-xs italic text-stone-700 leading-normal">
                    <strong>Diretriz Ápice:</strong> {analysis.keyTip}
                  </div>
                </div>

                {/* Automation Link Call Out */}
                <div className="p-4 rounded-xl bg-[#7c3aed]/5 border border-[#7c3aed]/15 text-center space-y-3">
                  <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-stone-900">
                    <Clock className="w-4 h-4 text-[#7c3aed] animate-spin" />
                    <span>Redirecionando para agendamento no WhatsApp em <strong className="text-[#7c3aed] text-base">{countdown}s</strong>...</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="flex-1 py-3.5 px-6 rounded-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-sm font-semibold font-serif inline-flex items-center justify-center hover:shadow-[#7c3aed]/15 active:scale-95 transition-all cursor-pointer shadow-md shadow-[#7c3aed]/10"
                    >
                      Ir para WhatsApp Agora
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setIsTimerActive(false)}
                      className="py-3 px-4 rounded-full border border-stone-250 hover:border-stone-400 text-stone-600 hover:text-stone-950 text-xs font-mono transition-colors cursor-pointer"
                    >
                      Pausar Envio
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Stepper Navigation buttons (Only when inside steps 1 to 5) */}
          {step > 0 && step < 6 && (
            <div className="mt-8 pt-6 border-t border-stone-200 flex items-center justify-between">
              <button
                onClick={handlePrevStep}
                className="inline-flex items-center text-xs sm:text-sm font-mono text-stone-500 hover:text-stone-900 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 mr-1" /> Voltar
              </button>
              <div className="text-xs text-stone-450 font-mono">
                {step === 5 ? "Configurando resultados" : "Selecione uma opção"}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
