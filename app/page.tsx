"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Slide1 from "@/components/Slide1";
import SlideImagine from "@/components/SlideImagine";
import Slide2 from "@/components/Slide2";
import Slide3 from "@/components/Slide3";
import Slide4 from "@/components/Slide4";
import Slide5 from "@/components/Slide5";
import Slide6 from "@/components/Slide6";
import Slide7 from "@/components/Slide7";
import Slide8 from "@/components/Slide8";
import Slide9 from "@/components/Slide9";
import Slide10 from "@/components/Slide10";
import Slide11 from "@/components/Slide11";
import Slide12 from "@/components/Slide12";
import Slide13 from "@/components/Slide13";
import Slide14 from "@/components/Slide14";
import Slide15 from "@/components/Slide15";

// Each slide component + how many sub-steps it has.
// step=0 is the initial render. Clicks increment step from 0 up to totalSteps.
// When step === totalSteps, the next click advances to the next slide (step resets to 0).
const slideConfig: { component: React.ComponentType<{ step: number }>; totalSteps: number }[] = [
    { component: Slide1, totalSteps: 1 },  // Title + quote reveal
    { component: SlideImagine, totalSteps: 0 },  // "Imagine..." — just click through
    { component: Slide2, totalSteps: 2 },  // Data: bar chart, line graph
    { component: Slide3, totalSteps: 4 },  // Background: 4 dot jots
    { component: Slide4, totalSteps: 4 },  // RQ + lens overview
    { component: Slide5, totalSteps: 6 },  // Lens 1 — philosophical
    { component: Slide6, totalSteps: 5 },  // Lens 2 — sociological
    { component: Slide7, totalSteps: 3 },  // Lens 3 — psychological
    { component: Slide8, totalSteps: 4 },  // Bridge — 3 solutions
    { component: Slide9, totalSteps: 4 },  // Limitations
    { component: Slide10, totalSteps: 4 },  // Implications
    { component: Slide11, totalSteps: 2 },  // App reveal
    { component: Slide12, totalSteps: 4 },  // Feature 1
    { component: Slide13, totalSteps: 4 },  // Feature 2
    { component: Slide14, totalSteps: 5 },  // Feature 3
    { component: Slide15, totalSteps: 1 },  // Close
];

export default function PresentationPage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);

    const { component: CurrentSlideComponent, totalSteps } = slideConfig[currentSlide];

    const advance = useCallback(() => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        } else if (currentSlide < slideConfig.length - 1) {
            setCurrentSlide(currentSlide + 1);
            setCurrentStep(0);
        }
    }, [currentSlide, currentStep, totalSteps]);

    const goBack = useCallback(() => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        } else if (currentSlide > 0) {
            const prevSlide = currentSlide - 1;
            setCurrentSlide(prevSlide);
            setCurrentStep(slideConfig[prevSlide].totalSteps);
        }
    }, [currentSlide, currentStep]);

    const toggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
                e.preventDefault();
                advance();
            } else if (e.key === "ArrowLeft") {
                goBack();
            } else if (e.key === "f" || e.key === "F") {
                toggleFullscreen();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [advance, goBack, toggleFullscreen]);

    const isLastSlide = currentSlide === slideConfig.length - 1;
    const isFullyRevealed = currentStep >= totalSteps;

    return (
        <div className="w-screen h-screen bg-eq-cream text-eq-text overflow-hidden relative select-none">

            {!(isLastSlide && isFullyRevealed) && (
                <div className="absolute inset-0 z-40 cursor-pointer" onClick={advance} />
            )}

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full"
                >
                    <CurrentSlideComponent step={currentStep} />
                </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-6 right-8 z-50 flex items-center gap-2 pointer-events-none">
                <span className="text-eq-text-secondary/40 text-xs font-medium tracking-wider">
                    {currentSlide + 1} / {slideConfig.length}
                </span>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-eq-divider z-50 pointer-events-none">
                <motion.div
                    className="h-full bg-eq-teal"
                    animate={{ width: `${((currentSlide + 1) / slideConfig.length) * 100}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                />
            </div>
        </div>
    );
}
