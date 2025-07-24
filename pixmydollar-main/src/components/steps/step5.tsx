'use client'

import { Button } from "@/components/ui/Button";

interface Step5Props {
    nextStep: () => void;
}

export function Step5({ nextStep }: Step5Props) {
    return (
        <div className="flex flex-col h-screen items-center gap-4 justify-center flex-1 px-4 py-8 max-w-md mx-auto w-full text-primary bg-primary font-semibold">
            <div className="bg-white p-6 py-8 rounded-xl shadow-lg w-full">
                <h1 className="text-4xl font-bold mb-6 text-center font-rubik">
                    Parabéns!
                </h1>
                <p className="mb-6 text-center">
                    Você acaba de ganhar <span className="text-red-500 font-bold">R$ 202,09!</span>
                </p>
                <p className="text-lg mb-8 text-center leading-tight">
                    Assista um curto vídeo com um passo a passo explicativo para você aprender a cadastrar sua chave <b>PIX</b> e realizar o seu primeiro <b>SAQUE</b>.
                </p>
                <Button
                    animated
                    onClick={nextStep}
                    className="w-full"
                >
                    Assistir vídeo
                </Button>
            </div>
        </div>
    );
}
