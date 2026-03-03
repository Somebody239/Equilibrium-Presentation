"use client";

import { motion, AnimatePresence } from "framer-motion";
import SlideContainer from "./shared/SlideContainer";

const dotJots = [
    "Daily mood check-ins → catches cognitive distortions early",
    "CBT exercises: target academic contingent self-worth directly",
    "Neurofeedback: EEG-calibrated stress tracking (Weon et al., 2008)",
    "Evidence: Khurshid et al., 2025 — RCT results in adolescents",
];

export default function Slide12({ step }: { step: number }) {
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
                        <span className="text-eq-teal font-bold tracking-[0.2em] uppercase text-xs">Feature 1</span>
                        <span className="text-2xl">🧠</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-eq-text tracking-tight">CBT + Neurofeedback</h2>
                    <p className="text-eq-text-secondary text-base font-light mt-2 max-w-2xl">
                        Reversing cognitive and psychodynamic damage at the neurological level.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* LEFT: Brain visual */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="bg-eq-cream-deep rounded-[20px] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex items-center justify-center"
                    >
                        <div className="relative">
                            {/* Stylized brain with thought bubble */}
                            <svg viewBox="0 0 200 160" className="w-[240px]">
                                {/* Brain outline */}
                                <ellipse cx="80" cy="80" rx="55" ry="50" fill="#E0F2FE" stroke="#0D9488" strokeWidth="2" />
                                <ellipse cx="80" cy="70" rx="35" ry="28" fill="#CCFBF1" stroke="#0D9488" strokeWidth="1.5" opacity="0.6" />
                                {/* Hippocampus glow */}
                                <motion.ellipse
                                    cx="80" cy="85" rx="18" ry="12"
                                    fill="#0D9488"
                                    initial={{ opacity: 0.2 }}
                                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                />
                                {/* Thought bubble — tangled to clean */}
                                <motion.path
                                    d="M 140 40 Q 150 30, 155 40 Q 160 25, 170 35 Q 175 20, 185 30"
                                    fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" opacity="0.5"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5 }}
                                />
                                <motion.path
                                    d="M 140 70 L 155 70 L 170 70 L 185 70"
                                    fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: 0.8 }}
                                />
                                {/* Labels */}
                                <text x="140" y="58" fontSize="7" fill="#6B7280">tangled</text>
                                <text x="140" y="88" fontSize="7" fill="#6B7280">clear</text>
                            </svg>
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
