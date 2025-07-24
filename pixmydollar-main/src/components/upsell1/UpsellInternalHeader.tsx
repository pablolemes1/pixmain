"use client"
import { useEmail } from "@/lib/use-email";
import { useBRLtoUSD } from "@/lib/use-usd";
import { useEffect, useState } from "react";

function getFirstName(email: string) {
    if (!email) return "!";
    return email.split("@")[0] || "!";
}

export function UpsellInternalHeader({ step = 3, currency = 46738 }: { step?: number; currency?: number }) {
    const { getEmail } = useEmail();
    const email = getEmail();
    const name = getFirstName(email);
    // Animated currency logic
    const [displayValue, setDisplayValue] = useState(currency);
    const displayUSD = useBRLtoUSD(displayValue);
    const progressStep = step + 3;
    const progressPercent = (progressStep / 12) * 100;
    const progressLabel = `${progressStep}/12`;

    useEffect(() => {
        if (currency !== displayValue) {
            const diff = currency - displayValue;
            const steps = 20;
            const increment = diff / steps;
            let current = displayValue;
            const interval = setInterval(() => {
                current += increment;
                if ((increment > 0 && current >= currency) || (increment < 0 && current <= currency)) {
                    setDisplayValue(currency);
                    clearInterval(interval);
                } else {
                    setDisplayValue(current);
                }
            }, 25);
            return () => clearInterval(interval);
        }
    }, [currency]);

    return (
        <header className="w-full px-4 pt-4 pb-2">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                    <span className="rounded-full bg-[#e6e6e6] w-8 h-8 flex items-center justify-center">
                        <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill="#B0B0B0" /><path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4v1H4v-1z" fill="#B0B0B0" /></svg>
                    </span>
                    <span className="font-bold text-primary">Olá {name}!</span>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-secondary text-2xl font-bold">{(displayValue / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2, minimumFractionDigits: 2 })}</span>
                    <span className="text-primary text-sm font-souvenir font-bold">US$ {displayUSD}</span>
                </div>
            </div>
            <hr className="w-full border-[#e6e6e6] my-3" />
            <div className="flex items-center gap-2 w-[95%] mx-auto">
                <div className="flex-1 relative h-2 rounded-full bg-[#F7F0CF] overflow-hidden">
                    <div className="absolute left-0 top-0 rounded-full h-full bg-secondary transition-all" style={{ width: `${progressPercent}%` }} />
                </div>
                <img src="/dollar.webp" alt="Dollar" width={16} height={16} className="animate-pulse" style={{ animation: 'scaleLoop 1.2s infinite alternate' }} />
            </div>
            <div className="flex justify-between items-center mt-1 px-1">
                <span className="text-xs text-primary font-bold">Seu progresso</span>
                <span className="text-xs text-primary font-bold">{progressLabel}</span>
            </div>
        </header>
    );
}
