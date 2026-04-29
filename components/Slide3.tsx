"use client";

import { motion } from "framer-motion";
import { Building2, TrendingDown, Users } from "lucide-react";

export default function Slide3({ step }: { step: number }) {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-ic-bg overflow-hidden text-ic-text">
            
            <div className="relative z-10 w-full max-w-7xl px-12 h-full flex flex-col pt-24 pb-16">
                
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">Structural Collapse, Not <span className="text-ic-gold">Personal Failure</span></h2>
                </motion.div>

                <div className="flex-1 grid grid-cols-3 gap-8 mt-16">
                    
                    {/* Surgeon General */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-ic-bg-secondary p-8 rounded-2xl flex flex-col h-full"
                    >
                        <Users className="text-ic-gold mb-6" size={48} />
                        <h3 className="text-2xl font-bold mb-4">A Structural Emergency</h3>
                        <p className="text-ic-text-secondary text-lg flex-1">
                            The 2023 Surgeon General's report links weak social ties to serious health outcomes, arguing that "social disconnection" is embedded in how contemporary life is organized.
                        </p>
                    </motion.div>

                    {/* Robert Putnam */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-ic-bg-secondary p-8 rounded-2xl flex flex-col h-full"
                    >
                        <Building2 className="text-ic-gold mb-6" size={48} />
                        <h3 className="text-2xl font-bold mb-4">Bowling Alone</h3>
                        <p className="text-ic-text-secondary text-lg flex-1">
                            Robert Putnam's data shows the erosion of social infrastructure began long before smartphones, rooted in suburbanization, mobility, and work patterns.
                        </p>
                    </motion.div>

                    {/* Finlay & Stat */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="bg-ic-bg-secondary p-8 rounded-2xl flex flex-col justify-between h-full border border-ic-coffee"
                    >
                        <div>
                            <TrendingDown className="text-red-400 mb-6" size={48} />
                            <h3 className="text-2xl font-bold mb-4">Spatial Perspective</h3>
                            <p className="text-ic-text-secondary text-lg mb-6">
                                Jennifer Finlay analyzed &gt;60M business records (2008-2015).
                            </p>
                        </div>
                        
                        <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ 
                                    opacity: step >= 1 ? 1 : 0, 
                                    scale: step >= 1 ? 1 : 0.8 
                                }}
                                transition={{ duration: 0.6, type: "spring" }}
                                className="bg-ic-bg p-6 rounded-xl border border-red-900/30 text-center"
                            >
                                <span className="block text-5xl font-bold text-red-400 mb-2">-23%</span>
                                <span className="text-sm text-ic-text-secondary uppercase tracking-wider">Decline in third places. The only growth: eateries.</span>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="mt-12 text-center"
                >
                    <p className="text-xl font-light text-ic-coffee-light max-w-4xl mx-auto italic">
                        "A modern cafe is not a revival of community. It is a decorative layer over a deeper structural void."
                    </p>
                </motion.div>

            </div>
        </div>
    );
}
