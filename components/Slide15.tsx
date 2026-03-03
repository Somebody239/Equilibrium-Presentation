"use client";

import { motion, AnimatePresence } from "framer-motion";
import SlideContainer from "./shared/SlideContainer";

export default function Slide15({ step }: { step: number }) {
    return (
        <div className="relative w-full h-full bg-eq-cream overflow-hidden">

            {/* Soft animated orbs — mirroring Slide 1 */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-eq-blue/10 blur-3xl animate-float" />
            <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-eq-teal/10 blur-3xl animate-float-delayed" />
            <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-eq-amber/5 blur-3xl animate-pulse-soft" />

            <SlideContainer>
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-8">

                    {/* Closing title */}
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-bold text-eq-text tracking-tight leading-tight"
                    >
                        The Close
                    </motion.h1>

                    {/* Accent line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                        className="mt-6 h-1 w-16 rounded-full bg-eq-teal origin-center"
                    />

                    {/* Closing quote — fades in on click */}
                    <div className="mt-10 min-h-[80px] relative w-full max-w-2xl">
                        <AnimatePresence>
                            {step >= 1 && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    className="text-lg md:text-xl text-eq-text-secondary font-light italic leading-relaxed"
                                >
                                    &ldquo;Students were never supposed to burn for the system. It is time the system burns for them.&rdquo;
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </SlideContainer>
        </div>
    );
}
