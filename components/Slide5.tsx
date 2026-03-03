"use client";

import { motion, AnimatePresence } from "framer-motion";
import SlideContainer from "./shared/SlideContainer";

const dotJots = [
    { text: "Aristotle: eudaimonia — sustained flourishing, not output", color: "eq-blue" },
    { text: "Institutions structurally embed stress (Högberg, 2024 — BERA)", color: "eq-blue" },
    { text: "Kant: students as economic means, not ends", color: "eq-blue" },
    { text: "Moore (2022): capitalist hierarchies → measurable mental strain", color: "eq-blue" },
    { text: "Mill: collective harm outweighs institutional benefit", color: "eq-blue" },
    { text: "OSAP: 85% → 25% grants (Snisarenko, CBC, 2026)", color: "eq-red" },
];

export default function Slide5({ step }: { step: number }) {
    return (
        <SlideContainer className="bg-eq-cream">
            <div className="relative z-10 w-full">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-eq-blue font-bold tracking-[0.2em] uppercase text-xs">Lens 1</span>
                        <span className="text-2xl">⚖️</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-eq-text tracking-tight">Philosophical</h2>
                    <p className="text-eq-text-secondary text-base font-light mt-2 max-w-2xl">
                        Schools are failing at their most fundamental promise — to help students flourish.
                    </p>
                </motion.div>

                {/* Dot jots — 2-column grid, each fades in on its step */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {dotJots.map((jot, i) => (
                        <div key={i} className="min-h-[64px] relative">
                            <AnimatePresence>
                                {step >= i + 1 ? (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.6 }}
                                        className="p-4 rounded-[16px] bg-eq-cream-deep shadow-[0_1px_8px_rgba(0,0,0,0.04)] flex items-start gap-3 h-full"
                                    >
                                        <span className={`text-${jot.color} mt-0.5 text-lg leading-none`}>•</span>
                                        <span className="text-eq-text text-sm font-medium leading-relaxed">{jot.text}</span>
                                    </motion.div>
                                ) : (
                                    <div className="p-4 rounded-[16px] border border-dashed border-eq-divider min-h-[64px]" />
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </SlideContainer>
    );
}
