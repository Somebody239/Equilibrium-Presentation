"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareHeart, Users, AlertTriangle } from "lucide-react";

export default function Slide6({ step }: { step: number }) {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-ic-bg overflow-hidden text-ic-text">
            
            <div className="relative z-10 w-full max-w-7xl px-12 h-full flex flex-col pt-24 pb-16">
                
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">The Strongest <span className="text-ic-gold">Counterargument</span></h2>
                    <p className="text-xl text-ic-text-secondary">Real connection is possible in contemporary environments.</p>
                </motion.div>

                <div className="flex-1 grid grid-cols-2 gap-16 items-center mt-12">
                    
                    {/* Left: The Evidence */}
                    <div className="flex flex-col gap-10">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-ic-bg-secondary p-8 rounded-2xl border border-ic-coffee"
                        >
                            <div className="flex items-center gap-4 mb-6 text-ic-gold">
                                <MessageSquareHeart size={32} />
                                <h3 className="text-2xl font-bold">Digital Reinforcement</h3>
                            </div>
                            <div className="flex items-baseline gap-2 mb-4">
                                <motion.span 
                                    className="text-6xl font-bold text-ic-text"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                                >
                                    +102
                                </motion.span>
                                <span className="text-xl text-ic-text-secondary">minutes / week</span>
                            </div>
                            <p className="text-ic-text-secondary text-lg">
                                Increase in family communication for every standard-deviation increase in internet use. (C. Li et al.)
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-ic-bg-secondary p-8 rounded-2xl border border-ic-coffee"
                        >
                            <div className="flex items-center gap-4 mb-4 text-ic-gold">
                                <Users size={32} />
                                <h3 className="text-2xl font-bold">Inclusive Physical Spaces</h3>
                            </div>
                            <p className="text-ic-text-secondary text-lg">
                                Modern coffee shops often replace pubs as more inclusive venues, hosting groups that might not feel welcome in traditional bar environments. (Ferreira)
                            </p>
                        </motion.div>
                    </div>

                    {/* Right: The Clarification */}
                    <div className="flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ 
                                    opacity: step >= 1 ? 1 : 0, 
                                    x: step >= 1 ? 0 : 30 
                                }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="bg-ic-coffee/10 p-10 rounded-3xl border border-ic-gold/30 relative"
                            >
                                <AlertTriangle className="text-ic-gold mb-6" size={48} />
                                <h3 className="text-3xl font-bold mb-6">The Clarification</h3>
                                <div className="space-y-4 text-xl text-ic-text-secondary leading-relaxed">
                                    <p>
                                        Li measures frequency, not <span className="text-ic-text font-bold">depth</span>. Rhubart & Li show non-interactive visits are linked with higher loneliness.
                                    </p>
                                    <p>
                                        Finlay notes cafes grow partly because better community spaces are <span className="text-ic-gold font-bold">disappearing</span>.
                                    </p>
                                </div>
                            </motion.div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
