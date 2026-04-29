"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CigaretteOff, Coffee, HeartPulse, ShieldAlert } from "lucide-react";

export default function Slide2({ step }: { step: number }) {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-ic-bg overflow-hidden text-ic-text">
            
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-ic-coffee/10 blur-[100px] animate-float" />

            <div className="relative z-10 w-full max-w-7xl px-12 h-full flex flex-col pt-24 pb-16">
                
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">The Epidemic Behind the <span className="text-ic-gold">Aesthetic</span></h2>
                    <p className="text-xl text-ic-text-secondary">2023 US Surgeon General Advisory</p>
                </motion.div>

                <div className="flex-1 grid grid-cols-2 gap-12 mt-16">
                    {/* Column 1: Stats */}
                    <div className="flex flex-col gap-12">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-ic-bg-secondary p-8 rounded-2xl border border-ic-divider relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-2 h-full bg-red-900/50" />
                            <ShieldAlert className="text-red-500 mb-4" size={40} />
                            <p className="text-ic-text-secondary text-lg mb-2">Health Risk Equivalent</p>
                            <div className="flex items-end gap-3">
                                <motion.span 
                                    className="text-7xl font-bold text-ic-text"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1, delay: 0.5, type: "spring" }}
                                >
                                    15
                                </motion.span>
                                <span className="text-2xl text-ic-text-secondary pb-2 flex items-center gap-2">
                                    cigarettes a day <CigaretteOff size={24} />
                                </span>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-ic-bg-secondary p-8 rounded-2xl border border-ic-divider relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-2 h-full bg-ic-gold/50" />
                            <Coffee className="text-ic-gold mb-4" size={40} />
                            <p className="text-ic-text-secondary text-lg mb-2">UK Coffee Shop Sector (2019)</p>
                            <div className="flex items-end gap-3">
                                <motion.span 
                                    className="text-7xl font-bold text-ic-text"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1, delay: 0.7, type: "spring" }}
                                >
                                    £10.1B
                                </motion.span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Column 2: The Paradox & Thesis */}
                    <div className="flex flex-col justify-center gap-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ 
                                        opacity: step >= 1 ? 1 : 0, 
                                        y: step >= 1 ? 0 : 20 
                                    }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <h3 className="text-3xl text-ic-gold mb-4">The Paradox</h3>
                                    <p className="text-xl text-ic-text-secondary leading-relaxed border-l-2 border-ic-coffee pl-6">
                                        More spaces and technologies promise connection, while loneliness reaches the level of a public health emergency.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ 
                                        opacity: step >= 2 ? 1 : 0, 
                                        y: step >= 2 ? 0 : 20 
                                    }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="bg-ic-coffee/10 p-8 rounded-xl border border-ic-coffee/30"
                                >
                                    <h3 className="text-2xl text-ic-text mb-4 flex items-center gap-3">
                                        <HeartPulse className="text-ic-gold" /> Thesis
                                    </h3>
                                    <p className="text-lg text-ic-text-secondary leading-relaxed">
                                        Modern communal spaces simulate the outward conditions of community without repairing the underlying structures. Genuine reduction depends on how intentionally places are designed and used.
                                    </p>
                                </motion.div>
                    </div>
                </div>

            </div>
        </div>
    );
}
