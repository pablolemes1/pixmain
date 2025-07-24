"use client";
import { PlanCard, PlanData } from "@/components/upsell1/PlanCard";
import { useEffect, useState } from "react";

const plans: PlanData[] = [
    {
        title: "Plano Silver 🥈",
        description: "Responda 20 pesquisas de empresas por dia\nSaque até R$ 550,00 por dia",
        price: "R$ 67,00",
        vagas: 9,
        href: "https://go.perfectpay.com.br/PPU38CPPTFH?upsell=true",
        icon: <span className="ml-1">🥈</span>,
        nextId: "#gold",
        id: "silver",
    },
    {
        title: "Plano Gold 🥇",
        description: "Responda 35 pesquisas de empresas por dia\nSaque até R$ 850,00 por dia",
        price: "R$ 97,00",
        vagas: 24,
        href: "https://go.perfectpay.com.br/PPU38CPPTFG?upsell=true",
        icon: <span className="ml-1">🥇</span>,
        nextId: "#diamond",
        id: "gold",
    },
    {
        title: "Plano Diamond 💎",
        description: "Responda 50 pesquisas de empresas por dia\nSaque até R$ 1250,00 por dia",
        price: "R$ 57,00",
        oldPrice: "de R$ 127,00",
        vagas: 1,
        href: "https://go.perfectpay.com.br/PPU38CPPTFE?upsell=true",
        badge: "OFERTA ESPECIAL",
        icon: <span className="ml-1">💎</span>,
        highlight: true,
        nextId: "/upsell2",
        id: "diamond",
    },
];

export default function UpsellStep6() {
    const [checkoutHrefs, setCheckoutHrefs] = useState(plans.map(p => p.href));
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            const src = urlParams.get('src');
            if (src) {
                setCheckoutHrefs(plans.map(p => {
                    const url = new URL(p.href, window.location.origin);
                    url.searchParams.set('src', src);
                    return url.toString();
                }));
            }
        }
    }, []);

    return (
        <div className="flex flex-col min-h-screen items-center bg-[#fdf8ea] w-full">
            {/* Red header */}
            <div className="w-full bg-secondary text-white text-2xl font-extrabold text-center py-4">PARABÉNS! VOCÊ ESTÁ QUASE BATENDO SUA PRIMEIRA META DE SAQUE!</div>
            {/* Progress section */}
            <div className="w-full px-4 pt-4 pb-2">
                <div className="flex items-center gap-2 w-[95%] mx-auto">
                    <div className="flex-1 relative h-2 rounded-full bg-[#F7F0CF] overflow-hidden">
                        <div className="absolute left-0 top-0 rounded-full h-full bg-secondary transition-all" style={{ width: `75%` }} />
                    </div>
                    <img src="/dollar.webp" alt="Dollar" width={16} height={16} className="animate-pulse" style={{ animation: 'scaleLoop 1.2s infinite alternate' }} />
                </div>
                <div className="flex justify-between items-center mt-1 px-1">
                    <span className="text-xs text-primary font-bold">Seu progresso</span>
                    <span className="text-xs text-primary font-bold">9/12</span>
                </div>
            </div>
            <hr className=" mb-3" />
            <main className=" px-4">
                {/* Header image */}
                <img src="/assets/upsell/header.png" alt="Header" className="w-full my-2" />
                {/* Centered text */}
                <div className="text-lg text-primary text-center font-bold my-4">Escolha um dos planos para fazer mais pesquisas e completar sua meta.</div>
                {/* Plans */}
                <div className="flex flex-col gap-4 w-full items-center">
                    {plans.map((plan, idx) => (
                        <PlanCard
                            key={plan.title}
                            plan={{ ...plan, href: checkoutHrefs[idx] }}
                            nextId={plan.nextId}
                            isLast={idx === plans.length - 1}
                        />
                    ))}
                </div>
                {/* Guarantee image */}
                <img src="/assets/upsell/guarantee.png" alt="Garantia" className="w-full max-w-md mx-auto my-6" />
                <style jsx>{`
        @keyframes scaleLoop {
          0% { transform: scale(1); }
          100% { transform: scale(1.2); }
        }
      `}</style>
            </main>
        </div>
    );
}
