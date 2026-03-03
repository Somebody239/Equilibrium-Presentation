"use client";

import { motion, AnimatePresence } from "framer-motion";
import SlideContainer from "./shared/SlideContainer";

const rqFragments = [
    "How do modern cultural expectations of academic productivity...",
    "...create systemic pressures with cognitive & societal consequences...",
    "...and what systemic solutions address these inequities?",
];

const lenses = [
    { icon: "⚖️", label: "Philosophical", color: "eq-blue" },
    { icon: "🕸️", label: "Sociological", color: "eq-amber" },
    { icon: "🧠", label: "Psychological", color: "eq-teal" },
];

export default function Slide4({ step }: { step: number }) {
    return (
        <SlideContainer className="bg-eq-cream">
            <div className="relative z-10 w-full max-w-4xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 text-center"
                >
                    <span className="text-eq-blue font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Research Question</span>
                </motion.div>

                {/* RQ fragments — each appears on steps 1-3 */}
                <div className="flex flex-col gap-3 mb-12">
                    {rqFragments.map((frag, i) => (
                        <div key={i} className="min-h-[48px] relative">
                            <AnimatePresence>
                                {step >= i + 1 && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.6 }}
                                        className="text-2xl md:text-3xl font-bold text-eq-text tracking-tight leading-snug text-center"
                                    >
                                        {frag}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Lens icons — appear on step 4 */}
                <div className="grid grid-cols-3 gap-6">
                    {lenses.map((lens, i) => (
                        <div key={i} className="min-h-[100px] relative">
                            <AnimatePresence>
                                {step >= 4 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.6, delay: i * 0.15 }}
                                        className="flex flex-col items-center gap-3 p-6 rounded-[20px] bg-eq-cream-deep shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
                                    >
                                        <span className="text-3xl">{lens.icon}</span>
                                        <span className={`text-sm font-bold text-${lens.color}`}>{lens.label}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </SlideContainer>
    );
}
