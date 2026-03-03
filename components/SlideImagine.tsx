"use client";

import { motion } from "framer-motion";

export default function SlideImagine({ step }: { step: number }) {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-eq-cream overflow-hidden">

            {/* Subtle warm glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-eq-teal/5 blur-3xl animate-pulse-soft" />

            <div className="relative z-10 text-center px-8">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-light text-eq-text tracking-tight italic"
                >
                    Imagine...
                </motion.h2>
            </div>
        </div>
    );
}
