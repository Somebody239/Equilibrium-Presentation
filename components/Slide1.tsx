"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Slide1({ step }: { step: number }) {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-eq-cream overflow-hidden">

            {/* Soft gradient orbs */}
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-eq-teal/10 blur-3xl animate-float" />
            <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-eq-blue/10 blur-3xl animate-float-delayed" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-eq-amber/5 blur-3xl animate-pulse-soft" />

            {/* All content positioned from center — quote is placed below via absolute so it doesn't push title */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-8">

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-6xl md:text-8xl font-bold text-eq-text tracking-tight leading-[0.95]"
                >
                    Equilibrium
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-6 text-xl md:text-2xl text-eq-text-secondary font-light max-w-xl tracking-wide"
                >
                    Redefining student wellbeing.
                </motion.p>

                {/* Accent line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                    className="mt-8 h-1 w-16 rounded-full bg-eq-teal origin-center"
                />

                {/* Quote — fades in below without pushing anything */}
                <div className="mt-10 h-12 relative w-full max-w-lg">
                    <AnimatePresence>
                        {step >= 1 && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className="absolute inset-0 text-base text-eq-text-secondary/70 font-light italic text-center"
                            >
                                &ldquo;The most dangerous thing we ask students to do is sacrifice themselves slowly.&rdquo;
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
