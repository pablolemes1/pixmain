"use client";
import { MdThumbDown, MdThumbsUpDown, MdThumbUp } from "react-icons/md";
import { Button } from "@/components/ui/Button";
import { useEffect, useState, useRef } from "react";
import Lottie from "lottie-react";
import correctAnimation from "@/animation/correct.json";
import searchAnimation from "@/animation/search.json";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function Product(
    {
        value, img, addCurrency, nextStep, skipLoading = false, skipPopup = false
    }: {
        value: number; // in usd
        img: string;
        addCurrency: (amount: number) => void;
        nextStep: () => void;
        skipLoading?: boolean;
        skipPopup?: boolean;
    }
) {
    const [showLoading, setShowLoading] = useState(!skipLoading);
    const [showPopup, setShowPopup] = useState(false);
    const lottieRef = useRef<any>(null);

    useEffect(() => {
        if (!skipLoading) {
            const timer = setTimeout(() => {
                setShowLoading(false);
            }, 700);
            return () => clearTimeout(timer);
        } else {
            setShowLoading(false);
        }
    }, [skipLoading]);

    if (showLoading) {
        return (
            <div className="flex flex-col h-screen items-center gap-4">
                <div className="w-52 h-52">
                    <Lottie
                        animationData={searchAnimation}
                        loop={true}
                        autoplay={true}
                    />
                </div>
                <div className="flex opacity-40 items-center gap-2">
                    <AiOutlineLoading3Quarters className="animate-spin text-xl" />
                    <p className="font-semibold">PROCURANDO NOVA ATUALIZAÇÃO</p>
                </div>
            </div>
        );
    }

    const onButtonClick = () => {
        addCurrency(value * 100 * 6.17);
        if (skipPopup) {
            nextStep();
        } else {
            setShowPopup(true);
        }
    }

    const Popup = () => {
        if (!showPopup) return null;

        // Ref for audio element
        const audioRef = useRef<HTMLAudioElement>(null);

        useEffect(() => {
            if (showPopup && lottieRef.current) {
                // Set animation speed to 2x
                lottieRef.current.setSpeed(1.4);
                // Play audio
                if (audioRef.current) {
                    audioRef.current.currentTime = 0;
                    audioRef.current.play();
                }
                const timer = setTimeout(() => {
                    setShowPopup(false);
                    nextStep();
                }, 2000);
                return () => clearTimeout(timer);
            }
        }, [showPopup]);

        return (
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <audio ref={audioRef} src="/money.mp3" />
                <div className="fixed inset-0 bg-black opacity-40" />
                <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 transform transition-all animate-fadeIn relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-32 h-32 mb-4">
                            <Lottie
                                lottieRef={lottieRef}
                                animationData={correctAnimation}
                                loop={false}
                                autoplay={true}
                            />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Saldo atualizado!</h2>
                        <p className="text-4xl font-bold text-red-500">{
                            (value * 6.17).toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2
                            })
                        }</p>
                        <p className="mt-4 text-lg">Você recebeu:</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {showPopup && <Popup />}
            <div
                className="w-full h-52 rounded-md flex justify-center items-center overflow-hidden relative"
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <p className="bg-primary rounded-l-full pt-11 -mt-7 absolute top-0 right-0 z-20 text-white py-5 pl-4 pr-2">+US$ {value}</p>
            </div>
            <h2 className="font-bold my-6">Você compraria esse produto?</h2>
            <Button className="h-12 mt-2" onClick={onButtonClick}><p>Com certeza! </p><MdThumbUp size={20} /></Button>
            <Button className="h-12 mt-2" onClick={onButtonClick} color="secondary">Não sei ao certo...</Button>
            <Button className="h-12 mt-2" onClick={onButtonClick} color="black"> <MdThumbDown size={20} /> Jamais!</Button>
        </>
    );
}