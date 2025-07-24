"use client";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";

// Animated Pie Chart Component
function AnimatedPieChart({ value, maxValue }: { value: number; maxValue: number }) {
    const [animatedValue, setAnimatedValue] = useState(0);
    const percentage = (animatedValue / maxValue) * 100;
    const strokeDasharray = 2 * Math.PI * 65; // circumference for radius 65
    const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage) / 100;

    useEffect(() => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = value / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            setAnimatedValue(prev => Math.min(prev + increment, value));

            if (currentStep >= steps) {
                clearInterval(timer);
                setAnimatedValue(value);
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [value]);

    return (
        <div className="relative w-40 h-40 mx-auto mb-12">
            <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 140 140">
                {/* Background circle */}
                <circle
                    cx="70"
                    cy="70"
                    r="65"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="transparent"
                />
                {/* Animated progress circle */}
                <circle
                    cx="70"
                    cy="70"
                    r="65"
                    stroke="#17476A"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="transition-all duration-75 ease-out"
                />
            </svg>
            {/* Center text with animated value */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-lg font-bold text-primary">
                    R$ {animatedValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="text-xs text-gray-500">
                    Seu saldo subiu!
                </div>
            </div>
        </div>
    );
}

export default function Upsell2Step4({ nextStep }: { nextStep: () => void }) {
    return (
        <div className="flex flex-col h-screen items-center justify-center flex-1 px-4 py-8 max-w-md mx-auto w-full text-primary bg-primary font-semibold">
            <div className="bg-white p-6 py-8 rounded-xl shadow-lg w-full">
                {/* Animated Pie Chart */}
                <AnimatedPieChart value={1398.74} maxValue={1398.74} />

                <h1 className="text-4xl font-bold mb-6 text-center leading-[24px]" style={{ fontFamily: 'Souvenir, serif' }}>
                    Parabéns!
                </h1>

                <p className="text-lg mb-2 text-center leading-[24px] my-6">
                    Você atingiu seu limite diário!
                </p>
                <Button
                    animated
                    onClick={nextStep}
                    className="w-full bg-primary text-white font-bold py-3 text-base mb-2"
                >
                    Sacar R$ 1.398,74
                </Button>
            </div>
        </div>
    );
}
