"use client";
import { Button } from "@/components/ui/Button";
import { appendSrcParamToUrl } from "@/lib/urlParams";
import { useEffect, useState } from "react";

export default function Back2Page() {
    const [checkoutHref, setCheckoutHref] = useState("https://go.perfectpay.com.br/PPU38CPPTF9");

    useEffect(() => {
        setCheckoutHref(appendSrcParamToUrl("https://go.perfectpay.com.br/PPU38CPPTF9"));
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center bg-[#fdf8ea] px-0 pb-6">
            <div className="w-full mx-auto bg-[#fdf8ea] rounded-lg p-4 flex flex-col items-center">
                <div className="w-full flex flex-col items-end border-b border-[#e6e6e6] pb-2 mb-4">
                    <span className="text-[#e53935] text-2xl font-bold">R$ 50,00</span>
                    <span className="text-[#0a3d62] text-sm font-bold">US$ 8.10</span>
                </div>
                <h2 className="text-2xl font-extrabold text-[#0a3d62] text-center mb-2 mt-2">ESPERE!</h2>
                <p className="text-center text-[#0a3d62] mb-2 text-base">
                    Seu saldo de <span className="font-bold">R$ 50,00</span> pode ser perdido.
                </p>
                <p className="text-center text-[#0a3d62] mb-2 text-base">
                    Por isso, estamos te enviando um desconto de 57% para entrar no <span className="font-bold text-[#0a3d62]">PIX MY DOLLAR</span> ainda hoje.
                </p>
                <p className="text-center text-[#0a3d62] mb-2 text-base">
                    Para ativar o seu cadastro e realizar seu primeiro saque, pague apenas a taxa de segurança de apenas:
                </p>
                <div className="text-center mb-2">
                    <span className="block text-red-600 line-through text-base">De: R$ 27,00</span>
                    <span className="block text-green-600 text-2xl font-extrabold">Por: R$ 19,00</span>
                </div>
                <a href={checkoutHref}>
                    <Button animated className="w-full bg-[#17496a] text-white font-bold py-3 text-base rounded-full shadow-md mb-3 mt-2">
                        QUERO ATIVAR MEU CADASTRO POR APENAS R$ 19,00
                    </Button>
                </a>
                <p className="text-center text-[#0a3d62] text-base font-bold mb-2">
                    Este valor continuará sendo seu dentro do app.
                </p>
                <p className="text-center text-[#0a3d62] text-sm mb-1">
                    Futuro saldo: R$ 50,00 + R$ 19,00
                </p>
                <p className="text-center text-green-600 text-base font-extrabold mt-2 mb-1">
                    Você terá de cara dentro do app:
                </p>
                <div className="text-center text-green-600 text-4xl font-extrabold mb-2">R$ 69,00</div>
                <div className="text-center text-[#0a3d62] text-base mb-2">Vagas restantes: <span className="font-bold">4</span></div>
                <div className="w-full h-2 bg-[#e6e6e6] rounded-full mb-3">
                    <div className="h-2 bg-[#17496a] rounded-full" style={{ width: '0%' }} />
                </div>
                <a href={checkoutHref}>
                    <Button animated className="w-full bg-[#17496a] text-white font-bold py-3 text-base rounded-full shadow-md mb-3 mt-2">
                        QUERO ATIVAR MEU CADASTRO POR APENAS R$ 19,00
                    </Button>
                </a>
            </div>
        </div>
    );
}
