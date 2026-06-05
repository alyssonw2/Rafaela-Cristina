/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProfileQuizIntro from "./components/ProfileQuizIntro";
import Methodology from "./components/Methodology";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import Footer from "./components/Footer";
import WhatsAppChat from "./components/WhatsAppChat";
import LeadQuiz from "./components/LeadQuiz";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const handleStartQuiz = () => {
    setIsQuizOpen(true);
  };

  const handleCloseQuiz = () => {
    setIsQuizOpen(false);
  };

  useEffect(() => {
    // Register the ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Create a GSAP context for clean, scoped triggers and automatic memory cleanup
    const ctx = gsap.context(() => {
      
      // --- SECTION 1: HERO (#inicio) ---
      // Runs immediately with a beautiful staggered sequence on page load
      const heroTl = gsap.timeline();
      heroTl.fromTo(
        "#inicio .inline-flex",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        "#inicio h1",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        "#inicio p",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        "#inicio .flex-col.sm\\:flex-row",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        "#inicio .grid-cols-2", // benefits features block
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        "#inicio .lg\\:col-span-5", // photograph frame side
        { opacity: 0, x: 40, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: "back.out(1.15)" },
        "-=0.7"
      );

      // Hero Scroll Exit behavior: Elegant out-transition as patient scrolls down
      gsap.to("#inicio > div", {
        scrollTrigger: {
          trigger: "#inicio",
          start: "top top",
          end: "bottom 30%",
          scrub: true,
        },
        opacity: 0,
        y: 40,
        scale: 0.98,
      });

      // --- SECTION 2, 3, 4, 5: ENTER/EXIT TRIGGER TEMPLATES ---
      const sections = [
        {
          id: "#sobre",
          left: "#sobre .lg\\:col-span-5",
          right: "#sobre .lg\\:col-span-7 > *",
        },
        {
          id: "#metodologia",
          header: "#metodologia .text-center > *",
          cards: "#metodologia .grid > div",
        },
        {
          id: "#depoimentos",
          header: "#depoimentos .max-w-2xl > *",
          badge: "#depoimentos .lg\\:flex > div:last-child",
          cards: "#depoimentos .grid > div",
        },
        {
          id: "#localizacao",
          header: "#localizacao .text-center > *",
          leftCard: "#localizacao .grid > .lg\\:col-span-5",
          rightCard: "#localizacao .grid > .lg\\:col-span-7",
        }
      ];

      sections.forEach((sec) => {
        const sectionEl = document.querySelector(sec.id);
        if (!sectionEl) return;

        // Custom individual timeline for each section
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sec.id,
            start: "top 82%", // triggers when top of section is 82% of viewport height
            end: "bottom 18%", // exits when bottom of section is 18% of viewport height
            toggleActions: "play reverse play reverse", // enter: play, leave upward: reverse, back: play, leave downward: reverse
          }
        });

        if (sec.id === "#sobre") {
          tl.fromTo(
            sec.left,
            { opacity: 0, x: -40, rotate: -1.5, scale: 0.96 },
            { opacity: 1, x: 0, rotate: 0, scale: 1, duration: 0.7, ease: "power3.out" }
          )
          .fromTo(
            sec.right,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.12 },
            "-=0.5"
          );
        } else if (sec.id === "#metodologia") {
          tl.fromTo(
            sec.header,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.1 }
          )
          .fromTo(
            sec.cards,
            { opacity: 0, y: 35, scale: 0.97 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.1)", stagger: 0.12 },
            "-=0.3"
          );
        } else if (sec.id === "#depoimentos") {
          tl.fromTo(
            sec.header,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.1 }
          )
          .fromTo(
            sec.badge,
            { opacity: 0, scale: 0.92, x: 20 },
            { opacity: 1, scale: 1, x: 0, duration: 0.5, ease: "power3.out" },
            "-=0.4"
          )
          .fromTo(
            sec.cards,
            { opacity: 0, y: 35, scale: 0.97 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out", stagger: 0.12 },
            "-=0.3"
          );
        } else if (sec.id === "#localizacao") {
          tl.fromTo(
            sec.header,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.1 }
          )
          .fromTo(
            sec.leftCard,
            { opacity: 0, x: -35 },
            { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
            "-=0.3"
          )
          .fromTo(
            sec.rightCard,
            { opacity: 0, x: 35 },
            { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
            "-=0.6"
          );
        }
      });

      // --- SECTION 6: FOOTER ---
      gsap.fromTo(
        "footer > div > *",
        { opacity: 0, y: 25 },
        {
          scrollTrigger: {
            trigger: "footer",
            start: "top 95%",
            toggleActions: "play reverse play reverse",
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
        }
      );

    }, document.body);

    return () => {
      ctx.revert(); // clean up and remove all triggers to reset elements to their default states on unmount
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#f5f5f7] text-stone-900">
      {/* Sticky Top-level navigation menu */}
      <Navbar onStartQuiz={handleStartQuiz} />

      {/* Main content body structure */}
      <main className="flex-grow">
        {/* Dynamic hero conversion space */}
        <Hero onStartQuiz={handleStartQuiz} />

        {/* Discovery of profile segment directly aligned with screenshot */}
        <ProfileQuizIntro onStartQuiz={handleStartQuiz} />

        {/* Nutritional clinical biotype / credentials */}
        <About />

        {/* Meticulous 4-stage client workflow */}
        <Methodology />

        {/* Testimonials & 5.0 Google stars badges */}
        <Testimonials />

        {/* Comprehensive physical consult office details in Sete Lagoas */}
        <Location />
      </main>

      {/* Footer copyright and social nodes */}
      <Footer onStartQuiz={handleStartQuiz} />

      {/* Expandable, floating instant chat node */}
      <WhatsAppChat />

      {/* Pure full-screen clinical profile questionnaire overlay */}
      <LeadQuiz isOpen={isQuizOpen} onClose={handleCloseQuiz} />
    </div>
  );
}
