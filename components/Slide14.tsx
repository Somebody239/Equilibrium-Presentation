"use client";

import { motion, AnimatePresence } from "framer-motion";
import SlideContainer from "./shared/SlideContainer";

const dotJots = [
    "Growth metrics: compare to self, not peers",
    "Eliminates upward social comparison (Festinger, 1954)",
    "Reality Check feed: anonymous peer averages replace social media highlight reel",
    "Flexible mastery-based milestones → no fixed cutoff pressure",
    "Connected to equity surveys → early intervention before crisis",
];

export default function Slide14({ step }: { step: number }) {
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
                        <span className="text-eq-amber font-bold tracking-[0.2em] uppercase text-xs">Feature 3</span>
                        <span className="text-2xl">📊</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-eq-text tracking-tight">Personalized Grading</h2>
                    <p className="text-eq-text-secondary text-base font-light mt-2 max-w-2xl">
                        Growth, not rank. Your own arc, not someone else&apos;s.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* LEFT: Growth curve + Reality Check card */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="space-y-4"
                    >
                        {/* Growth curve */}
                        <div className="bg-eq-cream-deep rounded-[20px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                            <p className="text-xs font-bold text-eq-text-secondary tracking-widest uppercase mb-4">Your Progress</p>
                            <svg viewBox="0 0 280 120" className="w-full" preserveAspectRatio="xMidYMid meet">
                                {[0, 1, 2].map((i) => (
                                    <line key={i} x1="20" y1={25 + i * 35} x2="260" y2={25 + i * 35} stroke="#E5E7EB" strokeWidth="0.5" />
                                ))}
                                <motion.path
                                    d="M 20 95 Q 60 90, 90 80 T 140 65 T 190 45 T 240 25"
                                    fill="none" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                />
                                <motion.path
                                    d="M 20 95 Q 60 90, 90 80 T 140 65 T 190 45 T 240 25 L 240 100 L 20 100 Z"
                                    fill="#0D9488"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.06 }}
                                    transition={{ delay: 1.8, duration: 0.6 }}
                                />
                            </svg>
                        </div>

                        {/* Reality Check card */}
                        <div className="bg-eq-cream-deep rounded-[20px] p-5 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-eq-amber/20">
                            <p className="text-[10px] font-bold text-eq-amber tracking-widest uppercase mb-2">Reality Check</p>
                            <p className="text-eq-text text-sm leading-relaxed">
                                Average student at a similar institution:<br />
                                <span className="font-bold text-eq-text">5.8 hrs study</span> · <span className="font-bold text-eq-text">6.5 hrs sleep</span>
                            </p>
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
                                            <span className="text-eq-amber mt-0.5 text-lg leading-none">•</span>
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
