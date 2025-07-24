"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { UpsellInternalHeader } from "@/components/upsell1/UpsellInternalHeader";
import { Upsell2Step1 } from "@/components/upsell2/step1";
import Upsell2Step2 from "@/components/upsell2/step2";
import Upsell2Step3 from "@/components/upsell2/step3";
import Upsell2Step4 from "@/components/upsell2/step4";
import Upsell2Step5 from "@/components/upsell2/step5";
import { UPSELL_VALUES_TWO } from "@/lib/values";
import { MdHome, MdAccountCircle, MdAccountBalanceWallet } from "react-icons/md";
import Upsell2Step6 from "@/components/upsell2/step6";

export type TStepsUpsell2 = 1 | 2 | 3 | 4 | 5 | 6;
const STEPS_WITH_HEADER: TStepsUpsell2[] = [1, 2, 3];
export default function Upsell2Stepper() {
    const [step, setStep] = useState<TStepsUpsell2>(1);
    const [currency, setCurrency] = useState(103192); // 1.031,92 BRL in centavos
    const [isReady, setIsReady] = useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const upsell1Flag = localStorage.getItem('upsell1Flag');
            // if (upsell1Flag) {
            //     window.location.replace('/dws1');
            //     return;
            // } else {
            //     localStorage.setItem('upsell1Flag', 'true');
            // }
            setIsReady(true);
        }
    }, []);
    // Animation for money growing
    const animateCurrency = (amount: number) => {
        setCurrency(prev => prev + amount);
    };

    const handleNextStep = () => {
        setStep((prev) => (prev + 1) as TStepsUpsell2);
    };

    const steps = {
        1: (
            <>
                <Upsell2Step1
                    nextStep={handleNextStep}
                    addCurrency={animateCurrency}
                    currency={currency}
                />
            </>
        ),
        2: (
            <>
                <Upsell2Step2
                    nextStep={handleNextStep}
                    addCurrency={animateCurrency}
                    currency={currency}
                />
            </>
        ),
        3: (
            <>
                <Upsell2Step3
                    nextStep={handleNextStep}
                    addCurrency={animateCurrency}
                    currency={currency}
                />
            </>
        ),
        4: (
            <Upsell2Step4 nextStep={handleNextStep} />
        ),
        5: (
            <Upsell2Step5 nextStep={handleNextStep} />
        ),
        6: (
            <Upsell2Step6 />
        )
    };
    if (!isReady) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
                <img src="/logo-full.svg" alt="Logo" style={{ maxWidth: 300, width: '80%' }} />
            </div>
        );
    }
    return (
        <div className="min-h-screen">
            <AnimatePresence initial={false} mode="wait">
                <motion.div
                    key={`step-${step}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex flex-1 flex-col min-h-dvh`}
                >
                    {STEPS_WITH_HEADER.includes(step) && <UpsellInternalHeader step={step + 5} currency={currency} />}
                    <div className="flex flex-col flex-1 z-10 relative">
                        {steps[step]}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
