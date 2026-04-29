"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Slide10({ step }: { step: number }) {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-ic-bg overflow-hidden text-ic-text">
            
            <div className="relative z-10 w-full px-8 h-full flex flex-col pt-16 pb-8">
                
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="mb-4">
                    <h2 className="text-4xl md:text-5xl font-bold">Works <span className="text-ic-gold">Cited</span></h2>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 flex gap-4 items-start justify-center overflow-hidden"
                >
                    <div className="flex-1 max-h-[82vh] h-fit rounded-xl overflow-hidden border border-ic-coffee shadow-2xl bg-ic-bg-secondary">
                        <img 
                            src="/works_cited/1.png" 
                            alt="Works Cited 1" 
                            className="w-full h-auto max-h-[82vh]"
                        />
                    </div>
                    <div className="flex-1 max-h-[82vh] h-fit rounded-xl overflow-hidden border border-ic-coffee shadow-2xl bg-ic-bg-secondary">
                        <img 
                            src="/works_cited/2.png" 
                            alt="Works Cited 2" 
                            className="w-full h-auto max-h-[82vh]"
                        />
                    </div>
                    <div className="flex-1 max-h-[82vh] h-fit rounded-xl overflow-hidden border border-ic-coffee shadow-2xl bg-ic-bg-secondary">
                        <img 
                            src="/works_cited/3.png" 
                            alt="Works Cited 3" 
                            className="w-full h-auto max-h-[82vh]"
                        />
                    </div>
                </motion.div>
                
            </div>
        </div>
    );
}
