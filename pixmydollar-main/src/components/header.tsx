import { useBRLtoUSD } from "@/lib/use-usd";
import { Progress } from "./ui/progress";
import { useEffect, useState } from "react";

export function Header({
    currency, step
}: {
    currency: number; // in BRL
    step: number;
}) {
    const [displayValue, setDisplayValue] = useState(currency);
    const displayUSD = useBRLtoUSD(displayValue);
    let progressValue = 0;
    if (step === 2) {
        progressValue = 25;
    } else if (step === 3) {
        progressValue = 45;
    } else if (step >= 4 && step <= 10) {
        progressValue = 65;
    } else if (step === 11) {
        progressValue = 85;
    } else if (step === 12) {
        progressValue = 96;
    } else if (step > 12) {
        progressValue = 100;
    }

    useEffect(() => {
        if (currency !== displayValue) {
            const diff = currency - displayValue;
            const steps = 20; // Number of steps for the animation
            const increment = diff / steps;
            let current = displayValue;

            const interval = setInterval(() => {
                current += increment;
                if ((increment > 0 && current >= currency) ||
                    (increment < 0 && current <= currency)) {
                    setDisplayValue(currency);
                    clearInterval(interval);
                } else {
                    setDisplayValue(current);
                }
            }, 25); // 25ms intervals for smooth animation

            return () => clearInterval(interval);
        }
    }, [currency]);

    return (
        <header className="w-full">
            <div className="flex justify-between px-4 py-2">
                <div className="flex items-center">
                    <img src="/logo.svg" alt="Logo" className="h-8" />
                </div>
                <div className="font-semibold flex flex-col items-end">
                    <h3 className="text-secondary text-2xl font-bold">
                        {(displayValue / 100).toLocaleString('pt-BR', {
                            style: 'currency', currency: 'BRL',
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2
                        })}
                    </h3>
                    <p className="text-primary text-sm">
                        US$ {displayUSD}
                    </p>
                </div>
            </div>
            <hr className="w-full" />
            <div className="flex flex-col py-2 gap-1 px-4">
                <Progress className="bg-[#F7F0CF]" value={progressValue} />
                <p className="text-sm text-primary font-bold">
                    Seu progresso
                </p>
            </div>
            <hr className="w-full" />
        </header>
    );
}