"use client";

import { motion, AnimatePresence } from "framer-motion";
import SlideContainer from "./shared/SlideContainer";

const barData = [
    { label: "High Stress", value: 63, color: "#EF4444" },
    { label: "Anxiety", value: 23, color: "#F59E0B" },
    { label: "Depression", value: 14, color: "#F59E0B" },
];

export default function Slide2({ step }: { step: number }) {
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
                    <span className="text-eq-red font-bold tracking-[0.2em] uppercase text-xs mb-3 block">The Data</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-eq-text tracking-tight">The Numbers Don&apos;t Lie</h2>
                </motion.div>

                {/* Both graph containers always take up space — content fades in */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">

                    {/* LEFT: Bar chart container — always present, content fades in */}
                    <div className="bg-eq-cream-deep rounded-[20px] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)] min-h-[340px] relative">
                        <AnimatePresence>
                            {step >= 1 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0 p-8"
                                >
                                    <p className="text-xs font-bold text-eq-text-secondary tracking-widest uppercase mb-6">Student Mental Health (ACHA, 2026)</p>

                                    <div className="flex items-end gap-6 h-[220px]">
                                        {barData.map((bar, i) => (
                                            <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                                                <motion.div
                                                    initial={{ height: 0 }}
                                                    animate={{ height: `${(bar.value / 80) * 100}%` }}
                                                    transition={{
                                                        delay: 0.3 + i * 0.5,
                                                        duration: 0.8,
                                                        ease: [0.22, 1, 0.36, 1],
                                                    }}
                                                    className="w-full rounded-t-lg relative"
                                                    style={{ backgroundColor: bar.color }}
                                                >
                                                    <motion.span
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 0.8 + i * 0.5 }}
                                                        className="absolute -top-7 left-1/2 -translate-x-1/2 text-sm font-bold text-eq-text whitespace-nowrap"
                                                    >
                                                        {bar.value}%
                                                    </motion.span>
                                                </motion.div>
                                                <span className="mt-3 text-xs text-eq-text-secondary font-medium text-center">{bar.label}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="mt-4 text-[10px] text-eq-text-secondary/60">63% experienced high stress in 30 days</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* RIGHT: Line graph container — always present, content fades in */}
                    <div className="bg-eq-cream-deep rounded-[20px] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)] min-h-[340px] relative">
                        <AnimatePresence>
                            {step >= 2 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0 p-8"
                                >
                                    <p className="text-xs font-bold text-eq-text-secondary tracking-widest uppercase mb-6">Graduation Rates (Statistics Canada, 2025)</p>

                                    <div className="h-[220px] relative">
                                        <svg viewBox="0 0 300 180" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                                            {[0, 1, 2, 3].map((i) => (
                                                <line
                                                    key={i}
                                                    x1="30" y1={30 + i * 40}
                                                    x2="280" y2={30 + i * 40}
                                                    stroke="#E5E7EB" strokeWidth="0.5"
                                                />
                                            ))}

                                            <motion.path
                                                d="M 30 150 Q 80 140, 120 125 T 180 95 T 260 40"
                                                fill="none"
                                                stroke="#0D9488"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                                            />

                                            <motion.path
                                                d="M 30 150 Q 80 140, 120 125 T 180 95 T 260 40 L 260 160 L 30 160 Z"
                                                fill="#0D9488"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 0.08 }}
                                                transition={{ delay: 1.5, duration: 0.8 }}
                                            />

                                            <motion.circle
                                                cx="260" cy="40" r="5"
                                                fill="#0D9488"
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 1.8, duration: 0.3 }}
                                            />
                                        </svg>

                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 2.0 }}
                                            className="absolute top-4 right-4 bg-eq-teal/10 text-eq-teal font-bold text-sm px-3 py-1.5 rounded-lg"
                                        >
                                            ↑ 5.8%
                                        </motion.div>
                                    </div>

                                    <p className="mt-4 text-[10px] text-eq-text-secondary/60">More credentials. More damage. At the same time.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </SlideContainer>
    );
}
