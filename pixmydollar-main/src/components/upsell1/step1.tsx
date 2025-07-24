import { useState } from "react";
import Upsell1Header from "@/components/upsell1/header";
import { useEmail } from "@/lib/use-email";
import { Button } from "@/components/ui/Button";

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function Step1({ onNext }: { onNext: () => void }) {
    const { getEmail, setEmail } = useEmail();
    const [email, setEmailState] = useState(getEmail());
    const [focused, setFocused] = useState(false);
    const [touched, setTouched] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailState(e.target.value);
        setTouched(true);
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (isValidEmail(email)) {
            setEmail(email);
            onNext();
        }
    };

    const showError = touched && !isValidEmail(email) && email.length > 0;

    return (
        <div className="flex flex-col min-h-dvh bg-[#fdf8ea]">
            <Upsell1Header />
            <section className="bg-[#f9f3d6] px-6 py-8 text-center flex flex-col items-center">
                <h1 className="text-3xl font-extrabold text-primary font-souvenir mb-2">Seja bem-vindo!</h1>
                <p className="text-base font-semibold text-primary mb-1 font-souvenir">
                    Coloque abaixo o email que você cadastrou para realizar login no aplicativo!
                </p>
            </section>
            <form className="flex flex-col items-center flex-1 justify-start px-6 pt-8" onSubmit={handleLogin}>
                <div className="relative w-full max-w-md mb-8">
                    <input
                        type="email"
                        value={email}
                        onChange={handleChange}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        className={`block w-full bg-transparent border-0 border-b-2 border-primary text-lg px-0 pt-6 pb-2 focus:outline-none focus:ring-0 focus:border-primary placeholder-transparent ${showError ? 'border-red-500' : ''}`}
                        placeholder=" "
                        autoComplete="email"
                        required
                    />
                    <label
                        className={`absolute left-0 top-6 text-primary transition-all duration-200 pointer-events-none ${focused || email ? '-translate-y-3 -translate-x-6 scale-70 text-primary' : 'translate-y-2 translate-x-0 scale-100 text-black/60'}`}
                    >
                        Digite seu e-mail
                    </label>
                    {showError && (
                        <span className="text-red-600 text-xs absolute left-0 top-full mt-1">E-mail inválido</span>
                    )}
                </div>
                <Button
                    type="submit"
                    color="main"
                    animated={isValidEmail(email)}
                    style={{ width: '100%', opacity: isValidEmail(email) ? 1 : 0.5 }}
                    className="bg-red-600 hover:bg-red-700 border-b-red-800 text-white text-lg font-bold py-4 shadow-lg flex items-center justify-center gap-2 transition-all duration-200"
                    disabled={!isValidEmail(email)}
                >
                    Realizar login
                </Button>
            </form>
        </div>
    );
}
