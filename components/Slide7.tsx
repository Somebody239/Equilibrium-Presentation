"use client";

import { motion, AnimatePresence } from "framer-motion";
import SlideContainer from "./shared/SlideContainer";

const groups = [
    {
        label: "COGNITIVE",
        color: "eq-blue",
        items: [
            "Hippocampus shrinks under chronic stress (Harvard Health, 2021)",
            "49% of high schoolers: cognitive paralysis (NYU, 2015)",
        ],
    },
    {
        label: "BEHAVIOURAL",
        color: "eq-amber",
        items: [
            "Eustress → performance ↑ (Saini et al., 2024 | Yerkes-Dodson)",
            "Distress → 80% burnout in medical students (de Souza et al., 2022)",
        ],
    },
    {
        label: "PSYCHODYNAMIC",
        color: "eq-red",
        items: [
            "Emotional blunting → desensitized reward system (Auerbach et al., 2014)",
            "Academic contingent self-worth → systemic burnout (Herrmann et al., 2019)",
        ],
    },
];

export default function Slide7({ step }: { step: number }) {
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
                        <span className="text-eq-teal font-bold tracking-[0.2em] uppercase text-xs">Lens 3</span>
                        <span className="text-2xl">🧠</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-eq-text tracking-tight">Psychological</h2>
                    <p className="text-eq-text-secondary text-base font-light mt-2 max-w-2xl">
                        Chronic stress doesn&apos;t just feel bad — it physically restructures the brain.
                    </p>
                </motion.div>

                {/* 3 grouped sections — each appears on its step */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {groups.map((group, i) => (
                        <div key={i} className="min-h-[200px] relative">
                            <AnimatePresence>
                                {step >= i + 1 ? (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.6 }}
                                        className="bg-eq-cream-deep rounded-[20px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] h-full"
                                    >
                                        <span className={`text-${group.color} text-[10px] font-bold tracking-[0.25em] uppercase mb-4 block`}>
                                            {group.label}
                                        </span>
                                        <div className="flex flex-col gap-3">
                                            {group.items.map((item, j) => (
                                                <div key={j} className="flex items-start gap-2">
                                                    <span className={`text-${group.color} mt-0.5 text-sm leading-none`}>•</span>
                                                    <span className="text-eq-text text-sm leading-relaxed">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ) : (
                                    <div className="rounded-[20px] border border-dashed border-eq-divider min-h-[200px]" />
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </SlideContainer>
    );
}
