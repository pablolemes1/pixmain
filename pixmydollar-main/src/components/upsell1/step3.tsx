"use client"
import { useEmail } from "@/lib/use-email";
import { useBRLtoUSD } from "@/lib/use-usd";
import { Product } from "../product";
import { UPSELL_VALUES } from "@/lib/values";
import { Button } from "../ui/Button";
import { useState } from "react";
import { MdHome, MdAccountCircle, MdAccountBalanceWallet } from "react-icons/md";

const INDEX = 0; // For upsell, start from 0 for /assets/upsell/1.webp

function getFirstName(email: string) {
    if (!email) return "!";
    return email.split("@")[0] || "!";
}

export default function UpsellStep3({ nextStep, addCurrency, step = 3, currency = 46738 }: { nextStep: () => void; addCurrency: (amount: number) => void; step?: number; currency?: number; }) {
    const { getEmail } = useEmail();
    const email = getEmail();
    const name = getFirstName(email);
    const displayUSD = useBRLtoUSD(currency);
    const progressStep = step + 3;
    const progressPercent = (progressStep / 12) * 100;
    const progressLabel = `${progressStep}/12`;

    return (
        <div className="flex flex-col min-h-screen bg-[#fdf8ea]">
            {/* Content */}
            <main className="flex flex-col flex-1 items-center px-4 py-8 max-w-md mx-auto w-full font-semibold">
                <Product
                    addCurrency={addCurrency}
                    nextStep={nextStep}
                    value={UPSELL_VALUES[0]}
                    img={`/assets/upsell/1.webp`}
                />
            </main>
            {/* Footer */}
            <footer className="w-full bg-[#f7f0cf] border-t border-[#e6e6e6] flex justify-around items-center py-5 gap-8">
                <div>
                    <MdHome size={38} className="text-dark/80" />
                    <span className=" text-dark text-xs">Início</span>
                </div>
                <MdAccountBalanceWallet size={38} className="text-dark/50" />
                <MdAccountCircle size={38} className="text-dark/50" />
            </footer>
            <style jsx>{`
        @keyframes scaleLoop {
          0% { transform: scale(1); }
          100% { transform: scale(1.2); }
        }
      `}</style>
        </div>
    );
}
