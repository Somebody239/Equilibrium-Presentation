"use client";

import { motion, AnimatePresence } from "framer-motion";
import SlideContainer from "./shared/SlideContainer";

const panels = [
    {
        icon: "🧠",
        title: "CBT + Neurofeedback",
        desc: "Heal the individual brain",
        color: "eq-teal",
    },
    {
        icon: "⚖️",
        title: "Equity Surveys",
        desc: "Hold institutions accountable",
        color: "eq-blue",
    },
    {
        icon: "📊",
        title: "Personalized Grading",
        desc: "Eliminate comparison culture",
        color: "eq-amber",
    },
];

export default function Slide8({ step }: { step: number }) {
    return (
        <SlideContainer className="bg-eq-cream">
            <div className="relative z-10 w-full max-w-5xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 text-center"
                >
                    <span className="text-eq-teal font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Solutions</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-eq-text tracking-tight">The Bridge</h2>
                    <p className="text-eq-text-secondary text-base font-light mt-2">
                        Three solutions. Three lenses. One platform.
                    </p>
                </motion.div>

                {/* Three panels — each appears on steps 1-3, merge visual on step 4 */}
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ${step >= 4 ? "md:gap-0" : ""}`}>
                    {panels.map((panel, i) => (
                        <div key={i} className="min-h-[180px] relative">
                            <AnimatePresence>
                                {step >= i + 1 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            scale: step >= 4 ? 0.95 : 1,
                                        }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.6 }}
                                        className={`bg-eq-cream-deep rounded-[20px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] text-center h-full flex flex-col items-center justify-center gap-3 transition-all duration-700 ${step >= 4 ? "border-2 border-eq-teal/30" : ""
                                            }`}
                                    >
                                        <span className="text-4xl">{panel.icon}</span>
                                        <h3 className="text-lg font-bold text-eq-text">{panel.title}</h3>
                                        <p className="text-eq-text-secondary text-sm font-light">{panel.desc}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Merge message — appears on step 4 */}
                <div className="min-h-[48px] mt-8 relative">
                    <AnimatePresence>
                        {step >= 4 && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-center text-xl font-bold text-eq-teal"
                            >
                                What if they were one thing?
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </SlideContainer>
    );
}
