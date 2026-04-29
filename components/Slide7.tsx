"use client";

import { motion } from "framer-motion";
import { HelpCircle, Landmark } from "lucide-react";

export default function Slide7({ step }: { step: number }) {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-ic-bg overflow-hidden text-ic-text">
            
            <div className="relative z-10 w-full max-w-7xl px-12 h-full flex flex-col pt-24 pb-16">
                
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">Answering the <span className="text-ic-gold">Question</span></h2>
                    <p className="text-xl text-ic-text-secondary flex items-center gap-2">
                        <HelpCircle size={24} /> Do modern spaces genuinely address the epidemic?
                    </p>
                </motion.div>

                <div className="flex-1 flex flex-col justify-center items-center gap-12 mt-8">
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-ic-bg-secondary p-10 rounded-3xl border-l-4 border-l-ic-gold max-w-4xl text-center"
                    >
                        <h3 className="text-3xl font-bold mb-6 text-ic-gold">The Verdict: By Default, No.</h3>
                        <p className="text-xl text-ic-text-secondary leading-relaxed">
                            They offer the aesthetics of community (crowded rooms, notifications). They only reduce loneliness when specific conditions are met—conditions requiring <span className="text-ic-text font-bold">conscious effort</span> by planners, owners, and participants.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="bg-ic-coffee/20 p-10 rounded-3xl border border-ic-coffee/50 max-w-4xl flex items-start gap-8"
                    >
                        <Landmark className="text-ic-gold shrink-0 mt-2" size={48} />
                        <div>
                            <h3 className="text-2xl font-bold mb-4">The Lesson of Candlestick Park</h3>
                            <p className="text-lg text-ic-text-secondary leading-relaxed mb-4">
                                Ann Killion notes that the memories of Candlestick Park live on long after the concrete was removed. The emotional reality lived in <span className="text-ic-text font-bold">shared rituals, relationships, and stories</span>.
                            </p>
                            <p className="text-xl font-light text-ic-gold italic border-t border-ic-divider pt-4">
                                More cafes and platforms do not rebuild community. Connection lives in the conditions that make it real.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
