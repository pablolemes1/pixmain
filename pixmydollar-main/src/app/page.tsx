'use client'

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Step1 } from "@/components/steps/presell/step1";
import { Header } from "@/components/header";
import { Step2 } from "@/components/steps/step2";
import { Step3 } from "@/components/steps/step3";
import { Step4 } from "@/components/steps/step4";
import { Step5 } from "@/components/steps/step5";
import { Step6 } from "@/components/steps/step6";
import { Step7 } from "@/components/steps/step7";
import Step8 from "@/components/steps/step8";
import { Step9 } from "@/components/steps/step9";
import { Step10 } from "@/components/steps/step10";
import { Step11 } from "@/components/steps/step11";
import { Step12 } from "@/components/steps/step12";
import { Step13 } from "@/components/steps/step13";
import { Step14 } from "@/components/steps/step14";

export type TStepsPresell = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;

const stepsWithHeader = [2, 3, 4, 6, 8, 10, 11, 12, 14];

export default function Home() {
  const [step, setStep] = useState<TStepsPresell>(1);
  const [currency, setCurrency] = useState(5000); // Example initial currency value in BRL
  const [isReady, setIsReady] = useState(false);

  const handleCurrencyChange = (plus: number) => {
    setCurrency(prev => prev + plus);
  }

  const handleNextStep = () => {
    setStep(prev => {
      if (prev < 14) {
        return (prev + 1) as TStepsPresell;
      }
      return prev; // Prevent going beyond step 14
    });
  }

  const steps = {
    1: <Step1 setStep={setStep} />,
    2: <Step2 nextStep={handleNextStep} addCurrency={handleCurrencyChange} />,
    3: <Step3 nextStep={handleNextStep} addCurrency={handleCurrencyChange} />,
    4: <Step4 nextStep={handleNextStep} addCurrency={handleCurrencyChange} />,
    5: <Step5 nextStep={handleNextStep} />,
    6: <Step6 nextStep={handleNextStep} />,
    7: <Step7 nextStep={handleNextStep} />,
    8: <Step8 nextStep={handleNextStep} />,
    9: <Step9 nextStep={handleNextStep} />,
    10: <Step10 nextStep={handleNextStep} addCurrency={handleCurrencyChange} />,
    11: <Step11 nextStep={handleNextStep} addCurrency={handleCurrencyChange} />,
    12: <Step12 nextStep={handleNextStep} addCurrency={handleCurrencyChange} />,
    13: <Step13 nextStep={handleNextStep} />,
    14: <Step14 nextStep={handleNextStep} />
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const presellFlag = localStorage.getItem('presellFlag');
      if (presellFlag === 'true') {
        window.location.replace('/back1');
        return;
      } else {
        localStorage.setItem('presellFlag', 'true');
      }
      setIsReady(true);
    }
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
          className={`glow-center-${step} flex flex-1 flex-col min-h-dvh`}
        >
          {stepsWithHeader.includes(step) && <Header currency={currency} step={step} />}
          <div className="flex flex-col flex-1 z-10 relative">
            {steps[step]}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
