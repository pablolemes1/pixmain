"use client"

import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";

interface Step9Props {
    nextStep: () => void;
}

export function Step9({ nextStep }: Step9Props) {
    const [alreadyPixDone, setAlreadyPixDone] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setAlreadyPixDone(localStorage.getItem('alreadyPixDone'));
        }
    }, []);

    if (alreadyPixDone === 'false') {
        return (
            <div className="flex flex-col h-screen items-center justify-center flex-1 px-4 py-8 max-w-md mx-auto w-full text-primary bg-primary font-semibold">
                <div className="bg-white p-6 py-8 rounded-xl shadow-lg w-full">
                    <h1 className="text-2xl font-bold mb-3 text-center font-rubik leading-[24px]">
                        Seu PIX já está cadastrado no sistema!
                    </h1>
                    <p className="text-lg mb-2 text-center font-bold text-red-600 leading-[24px] my-4">
                        Você já validou essa chave PIX anteriormente.
                    </p>
                    <p className="mb-4 text-center text-lg text-[#183B56] font-bold leading-[24px] my-6">
                        Agora basta realizar mais 3 avaliações para realizar seu primeiro saque completo.
                    </p>
                    <Button
                        animated
                        onClick={nextStep}
                        className="w-full text-white text-lg font-bold rounded-full py-2 shadow-md"
                    >
                        Ok!
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-screen items-center justify-center flex-1 px-4 py-8 max-w-md mx-auto w-full text-primary bg-primary font-semibold">
            <div className="bg-white p-6 py-8 rounded-xl shadow-lg w-full">
                <h1 className="text-2xl font-bold mb-3 text-center font-rubik leading-[24px]">
                    Em alguns segundos você irá receber um saque teste.
                </h1>
                <p className="text-lg mb-2 text-center font-bold text-red-600 leading-[24px] my-4">
                    Verifique suas notificações ou extrato bancário.
                </p>
                <p className="mb-4 text-center text-lg text-[#183B56] font-bold leading-[24px] my-6">
                    Agora basta realizar mais 3 avaliações para realizar seu primeiro saque completo.
                </p>
                <Button
                    animated
                    onClick={nextStep}
                    className="w-full text-white text-lg font-bold rounded-full py-2 shadow-md"
                >
                    Ok!
                </Button>
            </div>
        </div>
    );
}
