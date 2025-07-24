"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Step1 } from "@/components/upsell1/step1";
import { Step2 } from "@/components/upsell1/step2";
import UpsellStep3 from "@/components/upsell1/step3";
import { UpsellInternalHeader } from "@/components/upsell1/UpsellInternalHeader";
import { VALUES } from "@/lib/values";
import UpsellStep4 from "@/components/upsell1/step4";
import UpsellStep5 from "@/components/upsell1/step5";
import UpsellStep6 from "@/components/upsell1/step6";
import { PlanCard, PlanData } from "@/components/upsell1/PlanCard";

export type TStepsUpsell1 = 1 | 2 | 3 | 4 | 5 | 6;

// Steps that should display the header
const STEPS_WITH_HEADER: TStepsUpsell1[] = [3, 4, 5];

// Plan data for step 6


export default function Upsell1Stepper() {
    const [isReady, setIsReady] = useState(false);
    const [step, setStep] = useState<TStepsUpsell1>(1);
    const [currency, setCurrency] = useState(46738); // in centavos

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
        setStep((prev) => (prev + 1) as TStepsUpsell1);
    };

    const handleFinish = () => {
        // TODO: handle finish or navigation
    };

    // Step wrappers to inject header and currency logic
    const steps = {
        1: (
            <>
                <Step1 onNext={handleNextStep} />
            </>
        ),
        2: (
            <>
                <Step2 onNext={handleNextStep} saldoBRL={currency / 100} />
            </>
        ),
        3: (
            <>
                <UpsellStep3
                    nextStep={handleNextStep}
                    addCurrency={(amount: number) => animateCurrency(amount)}
                    step={3}
                    currency={currency}
                />
            </>
        ),
        4: (
            <>
                <UpsellStep4
                    nextStep={handleNextStep}
                    addCurrency={(amount: number) => animateCurrency(amount)}
                    step={4}
                    currency={currency}
                />
            </>
        ),
        5: (
            <>
                <UpsellStep5
                    nextStep={handleNextStep}
                    addCurrency={(amount: number) => animateCurrency(amount)}
                    step={5}
                    currency={currency}
                />
            </>
        ),
        6: (
            <UpsellStep6 />
        ),
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
                    {STEPS_WITH_HEADER.includes(step) && <UpsellInternalHeader step={step} currency={currency} />}
                    <div className="flex flex-col flex-1 z-10 relative">
                        {steps[step]}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
