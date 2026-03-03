"use client";

import { motion, AnimatePresence } from "framer-motion";
import SlideContainer from "./shared/SlideContainer";

const features = [
    { icon: "🧠", label: "CBT + Neurofeedback" },
    { icon: "⚖️", label: "Equity Surveys" },
    { icon: "📊", label: "Personalized Grading" },
];

export default function Slide11({ step }: { step: number }) {
    return (
        <div className="relative w-full h-full bg-eq-cream overflow-hidden">

            {/* Subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-eq-cream via-eq-teal/3 to-eq-blue/3 pointer-events-none" />

            <SlideContainer>
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">

                    {/* Phone mockup — appears on step 1 */}
                    <AnimatePresence>
                        {step >= 1 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="relative"
                            >
                                {/* Phone frame */}
                                <div className="w-[220px] h-[440px] bg-white rounded-[40px] shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-eq-divider p-3 relative">
                                    {/* Notch */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-white rounded-b-2xl z-10" />
                                    {/* Screen */}
                                    <div className="w-full h-full bg-eq-cream rounded-[28px] flex flex-col items-center justify-center gap-3 p-4">
                                        <span className="text-3xl font-bold text-eq-text">E</span>
                                        <span className="text-xs text-eq-text-secondary font-medium">Equilibrium</span>
                                        <div className="w-8 h-0.5 bg-eq-teal rounded-full mt-1" />
                                    </div>
                                </div>

                                {/* Feature icons dock in on step 2 */}
                                <AnimatePresence>
                                    {step >= 2 && (
                                        <>
                                            {features.map((feat, i) => {
                                                const positions = [
                                                    { x: -100, y: -40 },
                                                    { x: -100, y: 80 },
                                                    { x: -100, y: 200 },
                                                ];
                                                return (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, x: positions[i].x - 60 }}
                                                        animate={{ opacity: 1, x: positions[i].x }}
                                                        transition={{ duration: 0.6, delay: i * 0.2 }}
                                                        className="absolute bg-white rounded-[16px] p-3 shadow-[0_2px_12px_rgba(0,0,0,0.08)] flex items-center gap-2"
                                                        style={{ top: positions[i].y, left: 0 }}
                                                    >
                                                        <span className="text-xl">{feat.icon}</span>
                                                        <span className="text-xs font-bold text-eq-text whitespace-nowrap">{feat.label}</span>
                                                    </motion.div>
                                                );
                                            })}
                                        </>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Title text — always there */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mt-8"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-eq-text tracking-tight">One Adaptive Platform</h2>
                        <p className="text-eq-text-secondary text-base font-light mt-2">
                            Three integrated features. Built for every student.
                        </p>
                    </motion.div>

                    {/* Dot jots */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex gap-4 mt-6"
                    >
                        {["One adaptive platform", "Three integrated features", "Built for every student"].map((text, i) => (
                            <span key={i} className="text-xs font-medium text-eq-text-secondary px-3 py-1.5 rounded-full bg-eq-cream-deep">
                                {text}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </SlideContainer>
        </div>
    );
}
