"use client"

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { MdPhoneIphone, MdAssignmentInd } from "react-icons/md";
import { useBRLtoUSD } from "@/lib/use-usd";
import { Loader, Loader2 } from "lucide-react";
import { sendPixRequest } from "@/lib/pix";

const formatCPF = (value: string) => {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
        .slice(0, 14);
};

const formatPhone = (value: string) => {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .slice(0, 15);
};

export default function Step8({ nextStep }: { nextStep: () => void }) {
    const [tab, setTab] = useState<'cpf' | 'phone'>('cpf');
    const [pixKey, setPixKey] = useState("");
    const [focused, setFocused] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const saldoBRL = 202.09;
    const saldoUSD = "US$ 32.75"; // Or use useBRLtoUSD(saldoBRL * 100)

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let v = e.target.value;
        setPixKey(tab === 'cpf' ? formatCPF(v) : formatPhone(v));
    };

    const handleRegister = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await sendPixRequest(pixKey, tab);
            if (res && res.status) {
                localStorage.setItem('alreadyPixDone', 'true');
                nextStep && nextStep();
            } else {
                setError("Ocorreu um erro ao cadastrar seu PIX. Tente novamente.");
                localStorage.setItem('alreadyPixDone', 'false');
            }
        } catch (err) {
            setError("Ocorreu um erro de comunicação. Verifique sua conexão.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className=" w-full bg-black/20 h-0.5" />
            <section className="flex flex-col h-screen items-center justify-start py-4 max-w-md mx-auto w-full bg-[#fdf8ea] font-semibold">
                <div className="w-full flex flex-col items-center mb-6 px-4">
                    <span className="text-primary font-bold text-lg mb-1">Seu saldo</span>
                    <span className="text-5xl font-extrabold text-red-600 mb-1">R$ 202,09</span>
                    <span className="text-xl font-bold font-souvenir text-[#2b3c4e]">{saldoUSD}</span>
                </div>
                <div className=" w-full bg-black/20 h-0.5" />
                <div className="w-full flex flex-col items-center mb-6 px-4">
                    <span className="text-primary text-center font-bold text-base my-4">Selecione seu tipo de chave PIX</span>
                    <div className="flex gap-4 w-full justify-center w-full mb-4">
                        <button
                            className={`flex flex-col items-center justify-center w-1/2 py-4 rounded-xl border transition-all duration-200 text-lg font-bold ${tab === 'cpf' ? 'bg-primary text-white' : 'bg-yellow-100 text-black/70'}`}
                            onClick={() => setTab('cpf')}
                            type="button"
                        >
                            <MdAssignmentInd size={32} className="mb-1" />
                            CPF
                        </button>
                        <button
                            className={`flex flex-col items-center justify-center w-1/2 py-4 rounded-xl border transition-all duration-200 text-lg font-bold ${tab === 'phone' ? 'bg-primary text-white' : 'bg-yellow-100 text-black/70'}`}
                            onClick={() => setTab('phone')}
                            type="button"
                        >
                            <MdPhoneIphone size={32} className="mb-1" />
                            Telefone
                        </button>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center mb-8 px-4">
                    <div className="relative w-full max-w-md">
                        <input
                            type="text"
                            value={pixKey}
                            onChange={handleInput}
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                            className="block w-full bg-transparent border-0 border-b-2 border-primary text-lg px-0 pt-6 pb-2 focus:outline-none focus:ring-0 focus:border-primary placeholder-transparent"
                            placeholder=" "
                            maxLength={tab === 'cpf' ? 14 : 15}
                            inputMode="numeric"
                            autoComplete="off"
                        />
                        <label
                            className={`absolute left-0 top-6 text-primary transition-all duration-200 pointer-events-none ${focused || pixKey ? '-translate-y-3 -translate-x-6 scale-70 text-primary' : 'translate-y-2 translate-x-0 scale-100 text-black/60'}`}
                        >
                            Cadastre sua chave pix
                        </label>
                    </div>
                </div>
                {error && (
                    <div className="text-red-500 text-center mb-4 px-4">{error}</div>
                )}
                <Button
                    color="main"
                    animated
                    style={{ width: '90%' }}
                    className="bg-red-600 mx-8 hover:bg-red-700 border-b-red-800 text-white text-lg font-bold py-4 mt-2 shadow-lg flex items-center justify-center gap-2"
                    onClick={handleRegister}
                    disabled={loading}
                >
                    {loading && (
                        <Loader2 className=" animate-spin opacity-50" />
                    )}
                    Cadastrar PIX
                </Button>
            </section>
        </>
    );
}
