"use client";

import { motion, AnimatePresence } from "framer-motion";
import SlideContainer from "./shared/SlideContainer";

const dotJots = [
    "Acute stress → temporary, adaptive",
    "Chronic stress → prolonged, structural, damaging",
    "HPA axis: cortisol stays elevated",
    "Source: not personal weakness — systemic design",
];

export default function Slide3({ step }: { step: number }) {
    return (
        <SlideContainer className="bg-eq-cream">
            <div className="relative z-10 w-full">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-10"
                >
                    <span className="text-eq-teal font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Background</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-eq-text tracking-tight">Chronic Stress</h2>
                    <p className="text-eq-text-secondary text-lg font-light mt-2 max-w-2xl">
                        Not all stress is the same.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                    {/* LEFT: Acute vs Chronic diagram — always visible */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="bg-eq-cream-deep rounded-[20px] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
                    >
                        <p className="text-xs font-bold text-eq-text-secondary tracking-widest uppercase mb-6">Stress Response Comparison</p>

                        <svg viewBox="0 0 320 160" className="w-full" preserveAspectRatio="xMidYMid meet">
                            {/* Baseline */}
                            <line x1="20" y1="120" x2="300" y2="120" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
                            <text x="305" y="124" fontSize="8" fill="#6B7280">baseline</text>

                            {/* Acute stress curve */}
                            <motion.path
                                d="M 20 120 Q 60 120, 80 50 Q 100 120, 140 120 L 300 120"
                                fill="none"
                                stroke="#0D9488"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                            />

                            {/* Chronic stress — elevated flat line */}
                            <motion.path
                                d="M 20 120 Q 50 120, 70 60 L 300 55"
                                fill="none"
                                stroke="#EF4444"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                            />

                            {/* Labels */}
                            <motion.text
                                x="145" y="115" fontSize="9" fill="#0D9488" fontWeight="600"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                            >
                                Acute — recoverable
                            </motion.text>
                            <motion.text
                                x="200" y="48" fontSize="9" fill="#EF4444" fontWeight="600"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                transition={{ delay: 2.0 }}
                            >
                                Chronic — sustained
                            </motion.text>
                        </svg>
                    </motion.div>

                    {/* RIGHT: Dot jots — fixed height slots, content fades in without shifting */}
                    <div className="flex flex-col gap-4">
                        {dotJots.map((jot, i) => (
                            <div key={i} className="relative min-h-[56px]">
                                <AnimatePresence>
                                    {step >= i + 1 ? (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.6 }}
                                            className="p-4 rounded-[16px] bg-eq-cream-deep shadow-[0_1px_8px_rgba(0,0,0,0.04)] flex items-start gap-3"
                                        >
                                            <span className="text-eq-teal mt-0.5 text-lg leading-none">•</span>
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
