"use client";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";
import { appendSrcParamToUrl } from "@/lib/urlParams";

export default function Back1Page() {
    const [isReady, setIsReady] = useState(false);
    const [checkoutHref, setCheckoutHref] = useState("https://go.perfectpay.com.br/PPU38CPPTF9");

    useEffect(() => {
        setCheckoutHref(appendSrcParamToUrl("https://go.perfectpay.com.br/PPU38CPPTF9"));
        if (typeof window !== 'undefined') {
            const back1Flag = localStorage.getItem('back1Flag');
            if (back1Flag) {
                window.location.replace(appendSrcParamToUrl('/back2'));
                return;
            } else {
                localStorage.setItem('back1Flag', 'true');
            }
            setIsReady(true);
        }
    }, []);

    if (!isReady) return null;

    return (
        <div className="min-h-screen flex flex-col items-center bg-[#fdf8ea] px-0 py-0">
            <div className="w-full mx-auto bg-[#fdf8ea] rounded-lg p-4 flex flex-col items-center">
                <div className="w-full flex flex-col items-end border-b border-[#e6e6e6] pb-2 mb-4">
                    <span className="text-[#e53935] text-2xl font-bold">R$ 50,00</span>
                    <span className="text-[#0a3d62] text-sm font-bold">US$ 8.10</span>
                </div>
                <h2 className="text-center text-[#0a3d62] text-base font-bold mb-1 mt-2">Seu saldo</h2>
                <div className="text-center text-[#0a3d62] text-3xl font-extrabold mb-2">R$ 50,00</div>
                <p className="text-center my-4 text-[#0a3d62] mt-6 text-base">
                    Vimos que você já validou PIX, mas ainda restam <span className="font-bold">R$ 50,00</span> de saldo disponível para saque.
                </p>
                <p className="text-center text-[#0a3d62] mb-2 text-base">
                    Para ter o cadastro ativo e realizar o saque, é necessário pagar a sua taxa de segurança de apenas:
                </p>
                <div className="text-center mb-2">
                    <span className="block text-red-600 line-through text-base">De: R$ 37,00</span>
                    <span className="block text-green-700 text-2xl font-extrabold">Por: R$ 27,00</span>
                </div>
                <p className="text-center text-[#0a3d62] text-base mb-2">
                    Ela é necessária para evitar <span className="text-red-600 font-bold">fraudes</span> e <span className="text-red-600 font-bold">golpes</span>. <span className="font-bold underline text-[#0a3d62]">Este valor continuará sendo seu dentro do app.</span>
                </p>
                <p className="text-center text-[#0a3d62] text-sm mb-1">
                    Futuro saldo: R$ 50,00 + R$ 27,00
                </p>
                <p className="text-center text-green-700 text-base font-extrabold mt-2 mb-1">
                    ...ou seja, você terá dentro do app:
                </p>
                <div className="text-center text-green-700 text-2xl font-extrabold mb-2">R$ 77,00</div>
                <div className="text-center text-[#0a3d62] text-base mb-2">Vagas restantes: <span className="font-bold">5</span></div>
                <div className="w-full h-2 bg-[#e6e6e6] rounded-full mb-3">
                    <div className="h-2 bg-[#17496a] rounded-full" style={{ width: '97%' }} />
                </div>
                <a href={checkoutHref}>
                    <Button animated className="w-full bg-[#17496a] text-white font-bold py-3 text-base rounded-full shadow-md mb-1 mt-1">
                        QUERO REALIZAR MEU CADASTRO NO APP OFICIAL E SACAR R$ 77,00
                    </Button>
                </a>
            </div>
        </div>
    );
}
