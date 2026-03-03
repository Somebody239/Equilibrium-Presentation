"use client";

import { motion, AnimatePresence } from "framer-motion";
import SlideContainer from "./shared/SlideContainer";

const dotJots = [
    { text: "Festinger (1954): upward social comparison → collective stress", color: "eq-amber" },
    { text: "91% of students with loans are first-generation (Pell Institute, 2025)", color: "eq-red" },
    { text: "72% of college students: severe psychological distress", color: "eq-red" },
    { text: "Black, Hispanic, Indigenous students face compounded barriers (United Way, 2025)", color: "eq-amber" },
    { text: "Achievement guilt rooted in identity, not workload (Deardorff, Northwestern, 2024)", color: "eq-amber" },
];

export default function Slide6({ step }: { step: number }) {
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
                        <span className="text-eq-amber font-bold tracking-[0.2em] uppercase text-xs">Lens 2</span>
                        <span className="text-2xl">🕸️</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-eq-text tracking-tight">Sociological</h2>
                    <p className="text-eq-text-secondary text-base font-light mt-2 max-w-2xl">
                        The system doesn&apos;t just fail these students. It was never built to hold them.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* LEFT: Visual — two paths (clear vs barriers) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="bg-eq-cream-deep rounded-[20px] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
                    >
                        <p className="text-xs font-bold text-eq-text-secondary tracking-widest uppercase mb-5">Structural Barriers</p>

                        <div className="flex gap-8 justify-center">
                            {/* Clear path */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-16 h-[180px] rounded-full bg-eq-teal/10 border-2 border-eq-teal/30 flex items-end justify-center pb-3">
                                    <span className="text-xs text-eq-teal font-bold">✓</span>
                                </div>
                                <span className="text-xs text-eq-text-secondary font-medium">Privileged</span>
                            </div>

                            {/* Blocked path */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-16 h-[180px] rounded-full bg-eq-red/5 border-2 border-eq-red/20 relative overflow-hidden flex flex-col items-center justify-between py-3">
                                    {[0, 1, 2, 3].map((j) => (
                                        <div key={j} className="w-10 h-1.5 bg-eq-red/30 rounded-full" />
                                    ))}
                                    <span className="text-xs text-eq-red font-bold">✕</span>
                                </div>
                                <span className="text-xs text-eq-text-secondary font-medium">Marginalized</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT: Dot jots with highlighted stat */}
                    <div className="flex flex-col gap-3">
                        {dotJots.map((jot, i) => (
                            <div key={i} className="min-h-[56px] relative">
                                <AnimatePresence>
                                    {step >= i + 1 ? (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.6 }}
                                            className={`p-4 rounded-[16px] shadow-[0_1px_8px_rgba(0,0,0,0.04)] flex items-start gap-3 ${i === 1 || i === 2
                                                    ? "bg-eq-red/5 border border-eq-red/20"
                                                    : "bg-eq-cream-deep"
                                                }`}
                                        >
                                            <span className={`text-${jot.color} mt-0.5 text-lg leading-none`}>•</span>
                                            <span className="text-eq-text text-sm font-medium leading-relaxed">{jot.text}</span>
                                        </motion.div>
                                    ) : (
                                        <div className="p-4 rounded-[16px] border border-dashed border-eq-divider min-h-[56px]" />
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </SlideContainer>
    );
}
