'use client'

import { Button } from "@/components/ui/Button";

interface Step7Props {
    nextStep: () => void;
}

export function Step7({ nextStep }: Step7Props) {
    return (
        <div className="flex flex-col h-screen items-center gap-4 justify-center flex-1 px-4 py-8 max-w-md mx-auto w-full text-primary bg-primary font-semibold">
            <div className="bg-white p-6 py-8 rounded-xl shadow-lg w-full">
                <h1 className="text-2xl text-secondary font-bold mb-3 text-center font-rubik">
                    Atenção
                </h1>
                <p className="text-lg mb-6 text-center leading-tight">
                    Como forma de pré-validação, será depositado o valor de <span className="text-red-500 font-bold">R$ 0,05</span> em sua conta.
                </p>
                <p className="text-lg mb-8 text-center leading-tight">
                    Certifique-se de inserir corretamente a chave PIX, pois é por meio dela que você receberá o valor acumulado e os futuros pagamentos do PixMyDollar.
                </p>
                <Button
                    animated
                    onClick={nextStep}
                    className="w-full"
                >
                    OK!
                </Button>
            </div>
        </div>
    );
}
