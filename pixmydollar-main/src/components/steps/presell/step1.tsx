'use client'

import { Dispatch, SetStateAction } from "react";
import { TStepsPresell } from "@/app/page";
import { Button } from "@/components/ui/Button";

interface Step1Props {
    setStep: Dispatch<SetStateAction<TStepsPresell>>;
}

export function Step1({ setStep }: Step1Props) {
    return (
        <div className="flex flex-col h-screen items-center justify-center flex-1 px-4 py-8 max-w-md mx-auto w-full text-primary bg-primary font-semibold">
            <div className="bg-white p-6 py-8 rounded-xl shadow-lg w-full">
                <h1 className="text-4xl font-bold mb-3 text-center font-rubik leading-[24px]">
                    Parabéns!
                </h1>
                <p className="text-lg mb-2 text-center leading-[24px] my-6">
                    Você acaba de ganhar 1 licença gratuita para avaliar produtos em nosso app!
                </p>
                <p className="text-lg mb-2 text-center font-bold leading-[24px] my-4">
                    Aproveite, você já ganhou <br /><span className="text-[var(--color-secondary)] font-bold">R$ 50,00!</span>
                </p>
                <p className="mb-4 text-center text-lg text-gray-700 leading-[24px] my-6">
                    Avalie 3 produtos e realize seu primeiro saque!
                </p>
                <Button
                    animated
                    onClick={() => setStep(2)}
                    className=""
                >
                    Começar!
                </Button>
            </div>
        </div>
    );
}
