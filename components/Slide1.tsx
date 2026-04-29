"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Users, Coffee, Mic2, Smartphone, Headphones, Ghost } from "lucide-react";

export default function Slide1({ step }: { step: number }) {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-ic-bg overflow-hidden text-ic-text">

            {/* Dark coffee / gold ambient background */}
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-ic-coffee/20 blur-[100px] animate-float" />
            <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-ic-gold/5 blur-[120px] animate-float-delayed" />

            <div className="relative z-10 w-full max-w-6xl px-12 flex flex-col items-center justify-center h-full">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
                        The Illusion of <span className="text-ic-gold">Connection</span>
                    </h1>
                    <p className="text-2xl text-ic-text-secondary font-light">
                        A room can be full and still be empty.
                    </p>
                </motion.div>

                {/* The Two Sides of History */}
                <div className="mt-20 w-full grid grid-cols-2 gap-16 items-center">
                    {/* Side 1: The Past */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ 
                            opacity: step >= 1 ? 1 : 0, 
                            x: step >= 1 ? 0 : -30 
                        }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-end text-right border-r border-ic-divider pr-16"
                    >
                                <h3 className="text-2xl text-ic-gold-muted mb-6">The Packed Town Square</h3>
                                <div className="flex gap-4 mb-4 text-ic-coffee-light">
                                    <Users size={32} />
                                    <Coffee size={32} />
                                    <Mic2 size={32} />
                                </div>
                                <p className="text-lg text-ic-text-secondary max-w-sm">
                                    Neighbors argue, strangers chat, and conversation is almost guaranteed.
                                </p>
                    </motion.div>

                    {/* Side 2: The Present */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ 
                            opacity: step >= 2 ? 1 : 0, 
                            x: step >= 2 ? 0 : 30 
                        }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-start pl-4"
                    >
                                <h3 className="text-2xl text-ic-text mb-6">The Modern Coffee Shop</h3>
                                <div className="flex gap-4 mb-4 text-ic-text-secondary">
                                    <Smartphone size={32} />
                                    <Headphones size={32} />
                                    <Ghost size={32} />
                                </div>
                                <p className="text-lg text-ic-text-secondary max-w-sm">
                                    Every table taken. Earbuds are in. People pass each other like ghosts. Connected but hollow.
                                </p>
                    </motion.div>
                </div>

            </div>
        </div>
    );
}
