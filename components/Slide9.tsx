"use client";

import { motion, AnimatePresence } from "framer-motion";
import SlideContainer from "./shared/SlideContainer";

const pairs = [
    {
        limitation: "CBT requires consistent commitment — emotionally difficult students most likely to disengage",
        workaround: "Micro-dose delivery — 3 min daily exercises, not weekly therapy sessions",
    },
    {
        limitation: "Neurofeedback: costly and inaccessible for first-generation and low-income students",
        workaround: "Optional premium feature — base platform remains free and fully functional",
    },
    {
        limitation: "Ethics curriculum cannot undo years of internalized pressure",
        workaround: "Longitudinal implementation — begins in early schooling, not just post-secondary",
    },
    {
        limitation: "Equity surveys identify failure — they cannot fix OSAP funding cuts (Snisarenko, 2026)",
        workaround: "Mandatory institutional response thresholds tied to survey data — not optional reporting",
    },
];

export default function Slide9({ step }: { step: number }) {
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
                    <h2 className="text-4xl md:text-5xl font-bold text-eq-text tracking-tight">Limitations</h2>
                    <p className="text-eq-text-secondary text-base font-light mt-2">
                        Strong solutions require honest limitations.
                    </p>
                </motion.div>

                {/* Column headers */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <span className="text-eq-amber font-bold tracking-[0.2em] uppercase text-xs">⚠ Limitations</span>
                    <span className="text-eq-teal font-bold tracking-[0.2em] uppercase text-xs">✓ Workarounds</span>
                </div>

                {/* Pairs — fade in one at a time */}
                <div className="flex flex-col gap-4">
                    {pairs.map((pair, i) => (
                        <div key={i} className="grid grid-cols-2 gap-4 min-h-[80px]">
                            {/* Limitation */}
                            <div className="relative min-h-[80px]">
                                <AnimatePresence>
                                    {step >= i + 1 ? (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.6 }}
                                            className="p-4 rounded-[16px] bg-eq-amber/5 border border-eq-amber/20 h-full"
                                        >
                                            <span className="text-eq-text text-sm leading-relaxed">{pair.limitation}</span>
                                        </motion.div>
                                    ) : (
                                        <div className="rounded-[16px] border border-dashed border-eq-divider min-h-[80px]" />
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Workaround */}
                            <div className="relative min-h-[80px]">
                                <AnimatePresence>
                                    {step >= i + 1 ? (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                            className="p-4 rounded-[16px] bg-eq-teal/5 border border-eq-teal/20 h-full"
                                        >
                                            <span className="text-eq-text text-sm leading-relaxed">{pair.workaround}</span>
                                        </motion.div>
                                    ) : (
                                        <div className="rounded-[16px] border border-dashed border-eq-divider min-h-[80px]" />
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </SlideContainer>
    );
}
