"use client";

import { motion, AnimatePresence } from "framer-motion";
import SlideContainer from "./shared/SlideContainer";

const cards = [
    {
        icon: "🧠",
        title: "Prevents neurological damage before it occurs",
        desc: "Structural reform addresses hippocampal and psychodynamic harm at the source",
    },
    {
        icon: "⚖️",
        title: "Shifts moral accountability from student to institution",
        desc: "No longer framed as a personal coping failure — an institutional responsibility",
    },
    {
        icon: "📈",
        title: "Scalable beyond one school",
        desc: "Adaptable province-wide, nationally, and internationally",
    },
    {
        icon: "🎓",
        title: "Redefines what success in education means",
        desc: "Moves the metric from grades and credentials to flourishing",
    },
];

export default function Slide10({ step }: { step: number }) {
    return (
        <SlideContainer className="bg-eq-cream">
            <div className="relative z-10 w-full">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-eq-text tracking-tight">Implications</h2>
                    <p className="text-eq-text-secondary text-base font-light mt-2">
                        What changes when the system reorients toward personhood.
                    </p>
                </motion.div>

                {/* 2x2 card grid — one per click */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {cards.map((card, i) => (
                        <div key={i} className="min-h-[140px] relative">
                            <AnimatePresence>
                                {step >= i + 1 ? (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.6 }}
                                        className="bg-eq-cream-deep rounded-[20px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] h-full"
                                    >
                                        <span className="text-3xl mb-3 block">{card.icon}</span>
                                        <h3 className="text-base font-bold text-eq-text mb-2">{card.title}</h3>
                                        <p className="text-eq-text-secondary text-sm font-light leading-relaxed">{card.desc}</p>
                                    </motion.div>
                                ) : (
                                    <div className="rounded-[20px] border border-dashed border-eq-divider min-h-[140px]" />
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </SlideContainer>
    );
}
