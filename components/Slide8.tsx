"use client";

import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, HandHeart, Laptop2, Globe2 } from "lucide-react";

export default function Slide8({ step }: { step: number }) {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-ic-bg overflow-hidden text-ic-text">
            
            <div className="relative z-10 w-full max-w-7xl px-12 h-full flex flex-col pt-24 pb-16">
                
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">Structural Solutions <span className="text-ic-gold">and Limitations</span></h2>
                </motion.div>

                <div className="flex-1 grid grid-cols-3 gap-8 mt-12">
                    
                    {/* Solution 1 */}
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ 
                                    opacity: step >= 0 ? 1 : 0, 
                                    y: step >= 0 ? 0 : 30 
                                }}
                                className="bg-ic-bg-secondary p-8 rounded-2xl flex flex-col border-t-4 border-t-ic-gold"
                            >
                                <LayoutDashboard className="text-ic-gold mb-6" size={40} />
                                <h3 className="text-2xl font-bold mb-4">Urban Design</h3>
                                <p className="text-ic-text-secondary text-lg">
                                    Communal tables that encourage conversation. Sightlines that reveal faces instead of screen backs. Protected zoning for non-commercial third places.
                                </p>
                            </motion.div>

                    {/* Solution 2 */}
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ 
                                    opacity: step >= 1 ? 1 : 0, 
                                    y: step >= 1 ? 0 : 30 
                                }}
                                className="bg-ic-bg-secondary p-8 rounded-2xl flex flex-col border-t-4 border-t-ic-gold"
                            >
                                <HandHeart className="text-ic-gold mb-6" size={40} />
                                <h3 className="text-2xl font-bold mb-4">Public Health Policy</h3>
                                <p className="text-ic-text-secondary text-lg">
                                    Fund programming, not just floor space. Partner with cafés and libraries to sponsor regular meetups and structured social programs.
                                </p>
                            </motion.div>

                    {/* Solution 3 */}
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ 
                                    opacity: step >= 2 ? 1 : 0, 
                                    y: step >= 2 ? 0 : 30 
                                }}
                                className="bg-ic-bg-secondary p-8 rounded-2xl flex flex-col border-t-4 border-t-ic-gold"
                            >
                                <Laptop2 className="text-ic-gold mb-6" size={40} />
                                <h3 className="text-2xl font-bold mb-4">Digital Platform Design</h3>
                                <p className="text-ic-text-secondary text-lg">
                                    Prioritize depth over volume. Emphasize stable groups over massive follower counts. Link online communities to offline gatherings.
                                </p>
                            </motion.div>

                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-12 bg-ic-coffee/20 p-6 rounded-2xl border border-ic-coffee/40 flex items-center gap-6"
                >
                    <Globe2 className="text-ic-text-secondary shrink-0" size={32} />
                    <p className="text-ic-text-secondary text-lg">
                        <span className="text-ic-text font-bold">Limitations:</span> Most research focuses on Western contexts. More research is needed in non-Western and lower-income settings where traditional networks may function differently.
                    </p>
                </motion.div>

            </div>
        </div>
    );
}
