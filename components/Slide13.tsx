"use client";

import { motion, AnimatePresence } from "framer-motion";
import SlideContainer from "./shared/SlideContainer";

const dotJots = [
    "Anonymized wellbeing surveys → real-time institutional dashboard",
    "Disaggregated by identity — not averaged out (Deardorff, Northwestern, 2024)",
    "Auto-flags threshold breaches → mandatory institutional response",
    "Operationalizes Mill's utility principle: harm made visible, accountability enforced",
];

export default function Slide13({ step }: { step: number }) {
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
                        <span className="text-eq-blue font-bold tracking-[0.2em] uppercase text-xs">Feature 2</span>
                        <span className="text-2xl">⚖️</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-eq-text tracking-tight">Equity Surveys</h2>
                    <p className="text-eq-text-secondary text-base font-light mt-2 max-w-2xl">
                        Data-driven accountability. Harm made visible.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* LEFT: Heat-map dashboard visual */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="bg-eq-cream-deep rounded-[20px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
                    >
                        <p className="text-xs font-bold text-eq-text-secondary tracking-widest uppercase mb-5">Stress Heatmap — by Demographic</p>

                        {/* Animated heatmap grid */}
                        <div className="grid grid-cols-5 gap-1.5 mb-4">
                            {[
                                0.9, 0.7, 0.5, 0.3, 0.4,
                                0.8, 0.9, 0.6, 0.4, 0.5,
                                0.4, 0.5, 0.7, 0.8, 0.9,
                                0.3, 0.4, 0.5, 0.6, 0.7,
                            ].map((intensity, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.1 + i * 0.04, duration: 0.5 }}
                                    className="h-8 rounded-md"
                                    style={{
                                        backgroundColor: intensity > 0.7
                                            ? `rgba(239, 68, 68, ${intensity})`
                                            : intensity > 0.5
                                                ? `rgba(245, 158, 11, ${intensity})`
                                                : `rgba(13, 148, 136, ${intensity * 0.6})`,
                                    }}
                                />
                            ))}
                        </div>

                        <div className="flex items-center justify-between text-[10px] text-eq-text-secondary">
                            <span>Low stress</span>
                            <div className="flex gap-1">
                                <div className="w-4 h-2 rounded bg-eq-teal/40" />
                                <div className="w-4 h-2 rounded bg-eq-amber/60" />
                                <div className="w-4 h-2 rounded bg-eq-red/80" />
                            </div>
                            <span>High stress</span>
                        </div>

                        {/* Data flow arrow */}
                        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-eq-text-secondary">
                            <span>📊 Data</span>
                            <span className="text-eq-blue">→</span>
                            <span>🏫 Institution</span>
                            <span className="text-eq-blue">→</span>
                            <span>📋 Response</span>
                        </div>
                    </motion.div>

                    {/* RIGHT: Sequential dot jots */}
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
                                            className="p-4 rounded-[16px] bg-eq-cream-deep shadow-[0_1px_8px_rgba(0,0,0,0.04)] flex items-start gap-3"
                                        >
                                            <span className="text-eq-blue mt-0.5 text-lg leading-none">•</span>
                                            <span className="text-eq-text text-sm font-medium leading-relaxed">{jot}</span>
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
