"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Clock, MapPin } from "lucide-react";

export default function Slide4({ step }: { step: number }) {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-ic-bg overflow-hidden text-ic-text">
            
            <div className="relative z-10 w-full max-w-7xl px-12 h-full flex flex-col pt-24 pb-16">
                
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">When Third Places <span className="text-ic-gold">Actually Work</span></h2>
                    <p className="text-xl text-ic-text-secondary">Deliberate design over silent presence</p>
                </motion.div>

                <div className="flex-1 flex items-center justify-between gap-12 mt-8">
                    
                    {/* Left: The conditions for success */}
                    <div className="w-1/2 flex flex-col gap-8">
                        <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ 
                                        opacity: step >= 0 ? 1 : 0, 
                                        x: step >= 0 ? 0 : -30 
                                    }}
                                    className="flex items-start gap-6 bg-ic-bg-secondary p-8 rounded-2xl"
                                >
                                    <MessageCircle className="text-ic-gold shrink-0 mt-1" size={36} />
                                    <div>
                                        <h4 className="text-2xl font-bold mb-2">The 10-Minute Threshold</h4>
                                        <p className="text-ic-text-secondary text-lg">
                                            Rhubart & Li (rural US adults): Spending <span className="text-ic-text font-bold">10 or more minutes</span> talking to others significantly lowers loneliness. Time spent without conversation showed no benefit.
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ 
                                        opacity: step >= 1 ? 1 : 0, 
                                        x: step >= 1 ? 0 : -30 
                                    }}
                                    className="flex items-start gap-6 bg-ic-bg-secondary p-8 rounded-2xl"
                                >
                                    <MapPin className="text-ic-gold shrink-0 mt-1" size={36} />
                                    <div>
                                        <h4 className="text-2xl font-bold mb-2">Haruki Murakami</h4>
                                        <p className="text-ic-text-secondary text-lg">
                                            "Modern mobility permanently severs the bonds that made a community real. A new cafe cannot recreate that." (A Walk to Kobe)
                                        </p>
                                    </div>
                                </motion.div>
                    </div>

                    {/* Right: The Ethnographic & Literary Reality */}
                    <div className="w-1/2 flex flex-col gap-8">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ 
                                        opacity: step >= 1 ? 1 : 0, 
                                        scale: step >= 1 ? 1 : 0.9 
                                    }}
                                    transition={{ duration: 0.8 }}
                                    className="bg-ic-coffee/20 border border-ic-coffee/50 p-10 rounded-[2rem] text-center flex flex-col items-center"
                                >
                                    <p className="text-ic-text-secondary mb-4 uppercase tracking-widest text-sm">British Coffee Shops (Ferreira)</p>
                                    <motion.span 
                                        className="text-8xl font-bold text-ic-gold mb-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3, type: "spring" }}
                                    >
                                        85%
                                    </motion.span>
                                    <p className="text-xl text-ic-text">Hosted regular group meetups</p>
                                    <p className="text-ic-text-secondary mt-4 max-w-sm mx-auto">
                                        Elderly coffee mornings, parent groups, and hobby circles. Required deliberate choices; they did not emerge automatically.
                                    </p>
                                </motion.div>
                    </div>
                    
                </div>
                


            </div>
        </div>
    );
}
