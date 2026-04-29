"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Slide10({ step }: { step: number }) {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-ic-bg overflow-hidden text-ic-text">
            
            <div className="relative z-10 w-full max-w-7xl px-12 h-full flex flex-col pt-24 pb-16">
                
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">Works <span className="text-ic-gold">Cited</span></h2>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 flex gap-8 items-center justify-center"
                >
                    <div className="relative w-1/2 h-[70vh] rounded-xl overflow-hidden border border-ic-coffee shadow-2xl">
                        <Image 
                            src="/works_cited/1.png" 
                            alt="Works Cited 1" 
                            fill 
                            className="object-contain bg-ic-bg-secondary"
                        />
                    </div>
                    <div className="relative w-1/2 h-[70vh] rounded-xl overflow-hidden border border-ic-coffee shadow-2xl">
                        <Image 
                            src="/works_cited/2.png" 
                            alt="Works Cited 2" 
                            fill 
                            className="object-contain bg-ic-bg-secondary"
                        />
                    </div>
                </motion.div>
                
            </div>
        </div>
    );
}
