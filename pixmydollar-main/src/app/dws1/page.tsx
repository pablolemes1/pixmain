"use client";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";
import { appendSrcParamToUrl } from "@/lib/urlParams";

export default function Dws1Page() {
    const [checkoutHref, setCheckoutHref] = useState("https://go.perfectpay.com.br/PPU38CPPTFK?upsell=true");

    useEffect(() => {
        setCheckoutHref(appendSrcParamToUrl("https://go.perfectpay.com.br/PPU38CPPTFK?upsell=true"));
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center bg-[#fdf8ea] px-0 py-2">
            <div className="w-full mx-auto bg-[#fdf8ea] rounded-lg px-4 flex flex-col items-center">
                <div className="w-full flex flex-col items-end border-b border-[#e6e6e6] pb-2 mb-4">
                    <span className="text-[#e53935] text-2xl font-bold">R$ 1.031,92</span>
                    <span className="text-[#0a3d62] text-sm font-bold">US$ 167.25</span>
                </div>
                <h2 className="text-2xl font-extrabold text-[#0a3d62] text-center mb-2 mt-2">ESPERE!</h2>
                <p className="text-center text-[#0a3d62] mb-2 text-base">
                    Precisamos de você avaliando e por isso vamos <span className="font-bold">diminuir o valor da taxa de segurança.</span>
                </p>
                <p className="text-center text-[#0a3d62] mb-4 text-base">
                    Então para desbloquear o seu saldo, pague apenas:
                </p>
                <div className="text-center mb-2">
                    <span className="block text-red-600 line-through text-base">De: R$ 67,00</span>
                    <span className="block text-green-600 text-2xl font-extrabold">Por: R$ 47,00</span>
                </div>
                <a href={checkoutHref}>
                    <Button animated className="w-full bg-[#17496a] text-white font-bold p-3 text-base rounded-full shadow-md mb-3 mt-2">
                        QUERO DESBLOQUEAR MEU SALDO
                    </Button>
                </a>
                <p className="text-center text-[#0a3d62] text-sm font-bold mb-2">
                    Lembrando que esse valor continuará sendo seu dentro do app.
                </p>
                <p className="text-center text-[#0a3d62] text-sm mb-1">
                    Futuro saldo: R$ 1.031,92 + R$ 47,00
                </p>
                <p className="text-center text-green-600 text-base font-extrabold mt-2">
                    Você terá o saldo total de R$ 1.078,92 pronto para saque.
                </p>
            </div>
        </div>
    );
}
