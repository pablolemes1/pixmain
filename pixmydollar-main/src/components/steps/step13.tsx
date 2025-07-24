'use client'

import { Button } from "@/components/ui/Button";
import Lottie from "lottie-react";
import moneyAnimation from "@/animation/money.json";

interface Step13Props {
    nextStep: () => void;
}

export function Step13({ nextStep }: Step13Props) {
    return (
        <div className="flex flex-col h-screen items-center justify-center flex-1 px-4 py-8 max-w-md mx-auto w-full text-primary bg-primary font-semibold">
            <div className="bg-white p-6 py-8 rounded-xl shadow-lg w-full flex flex-col items-center">
                <div className="w-32 h-32 mx-auto mb-2">
                    <Lottie animationData={moneyAnimation} loop={true} />
                </div>
                <h1 className="text-3xl font-bold mb-3 text-center font-souvenir leading-[24px] text-primary">
                    Parabéns!
                </h1>
                <p className="text-lg mb-2 text-center font-bold leading-[24px] my-2 text-primary">
                    Você acumulou <span className="text-[var(--color-secondary)] font-bold">R$ 467,38!</span>
                </p>
                <p className="mb-4 text-center text-base font-bold leading-[24px] my-2 text-[var(--color-secondary)]">
                    Atenção: <span className="font-normal text-primary">Assista um aviso importante de 30 segundos para criar sua conta e finalizar seu saque!</span>
                </p>
                <Button
                    animated
                    onClick={nextStep}
                    className="w-full text-white text-lg font-bold rounded-full py-2 shadow-md mt-2"
                >
                    Assistir vídeo
                </Button>
            </div>
        </div>
    );
}
