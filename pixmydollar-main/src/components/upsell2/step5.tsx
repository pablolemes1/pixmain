"use client";
import { Button } from "@/components/ui/Button";
import { useState, useEffect } from "react";
import { MdHome, MdAccountCircle, MdAccountBalanceWallet } from "react-icons/md";

export default function Upsell2Step5({ nextStep }: { nextStep: () => void }) {
    const [selectedAmount, setSelectedAmount] = useState("1398.74");
    const [pixKeyType, setPixKeyType] = useState("CPF");
    const [pixKey, setPixKey] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [focused, setFocused] = useState(false);
    const [showError, setShowError] = useState(false);

    // Show popup after 200ms
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const formatCurrency = (value: string) => {
        return `R$ ${parseFloat(value).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    // Dynamic mask based on PIX key type
    const formatPixKey = (value: string, type: string) => {
        switch (type) {
            case "CPF":
                const numbers = value.replace(/\D/g, '');
                return numbers
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                    .replace(/(-\d{2})\d+?$/, '$1');
            case "Telefone":
                const phoneNumbers = value.replace(/\D/g, '');
                return phoneNumbers
                    .replace(/(\d{2})(\d)/, '($1) $2')
                    .replace(/(\d{5})(\d)/, '$1-$2')
                    .replace(/(-\d{4})\d+?$/, '$1');
            case "Email":
                return value; // Email doesn't need formatting
            default:
                return value;
        }
    };

    const validatePixKey = (value: string, type: string) => {
        switch (type) {
            case "CPF":
                const cpfNumbers = value.replace(/\D/g, '');
                return cpfNumbers.length === 11;
            case "Telefone":
                const phoneNumbers = value.replace(/\D/g, '');
                return phoneNumbers.length === 11;
            case "Email":
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value);
            default:
                return false;
        }
    };

    const handlePixKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPixKey(e.target.value, pixKeyType);
        setPixKey(formatted);

        // Validate and show error if needed
        if (formatted && !validatePixKey(formatted, pixKeyType)) {
            setShowError(true);
        } else {
            setShowError(false);
        }
    };

    const handlePixKeyTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPixKeyType(e.target.value);
        setPixKey(""); // Clear the input when type changes
        setShowError(false); // Clear error when type changes
    };

    const getLabelText = (type: string) => {
        switch (type) {
            case "CPF":
                return "Digite seu CPF";
            case "Telefone":
                return "Digite seu telefone";
            case "Email":
                return "Digite seu e-mail";
            default:
                return "Digite sua chave PIX";
        }
    };

    const getPlaceholder = (type: string) => {
        switch (type) {
            case "CPF":
                return "000.000.000-00";
            case "Telefone":
                return "(11) 99999-9999";
            case "Email":
                return "exemplo@email.com";
            default:
                return "";
        }
    };

    const getMaxLength = (type: string) => {
        switch (type) {
            case "CPF":
                return 14;
            case "Telefone":
                return 15;
            case "Email":
                return 50;
            default:
                return 50;
        }
    };

    const withdrawalAmounts = ["5.00", "30.00", "50.00", "1398.74"];
    const isFormValid = validatePixKey(pixKey, pixKeyType);

    return (
        <>
            <style jsx>{`
                @keyframes scale-pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
            `}</style>
            <div className="flex flex-col h-screen bg-gray-50">
                {/* Header with balance */}
                <div className="bg-white pt-4">
                    <div className="flex px-4 flex-col items-end">
                        <span className="text-secondary text-2xl font-bold">{1398.74.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2, minimumFractionDigits: 2 })}</span>
                        <span className="text-primary text-sm font-souvenir font-bold">US$ 226.70</span>
                    </div>
                    <hr className="mt-2" />
                    <div className="bg-[#F7F0CF] w-full p-4">
                        <div className="text-center">
                            <div className="text-primary font-bold text-sm mb-2">Seu saldo</div>
                            <div className="text-red-500 font-bold text-5xl mb-1">
                                R$ 1.398,74
                            </div>
                            <div className="text-primary font-souvenir text-lg">
                                US$ 226.70
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="" />

                {/* Main content */}
                <div className="flex-1">
                    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                        <h2 className="text-primary font-bold text-center my-4 mb-8">Sacar dinheiro</h2>

                        {/* Amount selection */}
                        <div className="grid grid-cols-4 gap-4 mb-6">
                            {withdrawalAmounts.map((amount) => (
                                <button
                                    key={amount}
                                    onClick={() => setSelectedAmount(amount)}
                                    className={`py-3 px-2 rounded-lg text-nowrap w-20 text-xs font-medium transition-all duration-200 ${selectedAmount === amount
                                        ? amount === "1398.74"
                                            ? 'bg-secondary text-white animate-pulse scale-105'
                                            : 'bg-primary text-white animate-pulse scale-105'
                                        : 'bg-gray-200 text-primary'
                                        }`}
                                    style={selectedAmount === amount ? {
                                        animation: 'scale-pulse 1s ease-in-out infinite'
                                    } : {}}
                                >
                                    {Number(amount).toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',
                                        maximumFractionDigits: 2,
                                        minimumFractionDigits: 2
                                    })}
                                </button>
                            ))}
                        </div>                    {/* PIX Key Type Selection */}
                        <div className="mb-6">
                            <div className="relative">
                                <select
                                    value={pixKeyType}
                                    onChange={handlePixKeyTypeChange}
                                    className="block w-full bg-transparent border-0 border-b-2 border-primary text-lg px-0 pt-6 pb-2 focus:outline-none focus:ring-0 focus:border-primary appearance-none text-primary"
                                >
                                    <option value="CPF">CPF</option>
                                    <option value="Email">Email</option>
                                    <option value="Telefone">Telefone</option>
                                </select>
                                <div className="absolute right-0 top-10 transform -translate-y-1/2">
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* PIX Key Input with Floating Label */}
                        <div className="relative w-full mb-8">
                            <input
                                type={pixKeyType === "Email" ? "email" : "text"}
                                value={pixKey}
                                onChange={handlePixKeyChange}
                                onFocus={() => setFocused(true)}
                                onBlur={() => setFocused(false)}
                                className={`block w-full bg-transparent border-0 border-b-2 border-primary text-lg px-0 pt-6 pb-2 focus:outline-none focus:ring-0 focus:border-primary placeholder-transparent ${showError ? 'border-red-500' : ''}`}
                                placeholder=" "
                                maxLength={getMaxLength(pixKeyType)}
                                autoComplete="off"
                                required
                            />
                            <label
                                className={`absolute left-0 top-6 text-primary transition-all duration-200 pointer-events-none ${focused || pixKey ? '-translate-y-3 -translate-x-6 scale-70 text-primary' : 'translate-y-2 translate-x-0 scale-100 text-black/60'}`}
                            >
                                {getLabelText(pixKeyType)}
                            </label>
                            {showError && (
                                <span className="text-red-600 text-xs absolute left-0 top-full mt-1">
                                    {pixKeyType === "Email" ? "E-mail inválido" : `${pixKeyType} inválido`}
                                </span>
                            )}
                        </div>

                        {/* Withdraw Button */}
                        <Button
                            onClick={nextStep}
                            animated={isFormValid}
                            color="secondary"
                            style={{ opacity: isFormValid ? 1 : 0.5 }}
                            disabled={!isFormValid}
                        >
                            Realizar saque
                        </Button>
                    </div>

                    {/* Footer text */}
                    <div className=" text-gray-500 text-xs px-4 leading-relaxed">
                        Para sacar o seu dinheiro, você precisa de um saldo mínimo de R$ 1,50. Os limites de saque para transações individuais e mensais podem variar conforme o país ou região.
                    </div>
                </div>

                {/* Bottom navigation - Same as other pages */}
                <footer className="w-full border-t border-[#e6e6e6] flex justify-around items-center py-3 gap-8">
                    <div className="flex flex-col items-center">
                        <MdHome size={32} className="text-dark/50" />
                        <span className="text-dark text-xs">Início</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <MdAccountBalanceWallet size={32} className="text-dark/80" />
                        <span className="text-dark text-xs">Carteira</span>
                    </div>
                    <MdAccountCircle size={32} className="text-dark/50" />
                </footer>

                {/* Popup Modal */}
                {showPopup && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-primary">
                        <div className="bg-white rounded-xl p-6 py-8 max-w-md w-full mx-4 transform transition-all animate-fadeIn relative z-10 shadow-lg">
                            <div className="text-center">
                                <h1 className="text-3xl text-primary font-bold mb-6 text-center leading-[24px]" style={{ fontFamily: 'Souvenir, serif' }}>
                                    Realize agora o seu saque de <span className="text-[var(--color-secondary)] font-bold">R$ 1.398,74!</span>
                                </h1>

                                <p className="text-lg mb-2 text-center leading-[24px] my-6">
                                    Chegou a hora boa! Coloque sua chave PIX corretamente, e receba seu saque de imediato.
                                </p>

                                <p className="mb-4 text-center text-lg text-gray-700 leading-[24px] my-6">
                                    <span className="text-[var(--color-secondary)] font-bold">Atenção:</span> Coloque a mesma <span className="font-bold">chave PIX</span> já cadastrada em nosso sistema!
                                </p>

                                <Button
                                    animated
                                    onClick={handleClosePopup}
                                    className=""
                                >
                                    Ok!
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
