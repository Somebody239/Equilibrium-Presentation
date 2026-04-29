"use client";

import { motion } from "framer-motion";
import { Smartphone, Wine, GlassWater, ArrowRight, UserX } from "lucide-react";

export default function Slide5({ step }: { step: number }) {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-ic-bg overflow-hidden text-ic-text">
            
            <div className="relative z-10 w-full max-w-7xl px-12 h-full flex flex-col pt-24 pb-16">
                
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">The Digital <span className="text-ic-gold">Mirage</span></h2>
                    <p className="text-xl text-ic-text-secondary max-w-3xl mx-auto">
                        Digital environments recreate the sensation of constant contact while stripping away elements that build deep relationships.
                    </p>
                </motion.div>

                <div className="flex-1 flex flex-col items-center justify-center mt-12 gap-16">
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center gap-12"
                    >
                        <div className="bg-ic-bg-secondary p-10 rounded-3xl flex flex-col items-center border border-ic-coffee w-80">
                            <Wine className="text-ic-text-secondary mb-6" size={64} />
                            <h3 className="text-2xl font-bold mb-2">"Sips"</h3>
                            <p className="text-ic-text-secondary text-center">Online connection. Text, notifications, feeds.</p>
                        </div>

                        <ArrowRight className="text-ic-gold" size={48} />

                        <div className="bg-ic-coffee/20 p-10 rounded-3xl flex flex-col items-center border border-ic-gold/30 w-80">
                            <GlassWater className="text-ic-gold mb-6" size={64} />
                            <h3 className="text-2xl font-bold mb-2 text-ic-gold">A "Gulp"</h3>
                            <p className="text-ic-text-secondary text-center">Real conversation. Sustained attention and vulnerability.</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-ic-bg-secondary p-8 rounded-2xl flex items-center gap-8 max-w-4xl border-l-4 border-l-red-500"
                    >
                        <UserX className="text-red-500 shrink-0" size={48} />
                        <div>
                            <p className="text-xl text-ic-text leading-relaxed">
                                If digital connection were an adequate substitute, loneliness should have fallen after decades of internet growth. <span className="font-bold text-red-400">It did not.</span>
                            </p>
                            <p className="text-ic-text-secondary mt-2">— 2023 U.S. Surgeon General Advisory</p>
                        </div>
                    </motion.div>

                </div>

            </div>
        </div>
    );
}
