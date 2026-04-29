"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Ghost, ArrowRight, Quote } from "lucide-react";

export default function Slide9({ step }: { step: number }) {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-ic-bg overflow-hidden text-ic-text">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-ic-coffee/5 blur-[120px] animate-pulse-soft" />

            <div className="relative z-10 w-full max-w-6xl px-12 h-full flex flex-col justify-center items-center">
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center text-center max-w-4xl"
                >
                    <div className="flex gap-8 mb-8 text-ic-coffee-light">
                        <Coffee size={48} />
                        <Ghost size={48} />
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                        From the outside, it appears successful. Every seat is taken. The hum of devices replaces the hum of conversation.
                    </h2>
                    
                    <div className="w-24 h-1 bg-ic-gold rounded-full mb-12" />

                    <div className="flex flex-col items-center">
                        <Quote className="text-ic-gold/40 mb-6" size={48} />
                        <p className="text-2xl text-ic-text-secondary leading-relaxed italic">
                            "In any communal space, physical or digital, the real question is not how many people are present. It is how many relationships in that space are strong enough that <span className="text-ic-text font-bold">an empty chair would actually be noticed</span>."
                        </p>
                    </div>

                    <p className="mt-16 text-xl text-ic-gold font-bold tracking-widest uppercase">
                        Thank You
                    </p>
                </motion.div>

            </div>
        </div>
    );
}
