import { Button } from "../ui/Button";

export function Step2({ onNext, saldoBRL = 467.38 }: { onNext: () => void; saldoBRL?: number }) {
    return (
        <div className="flex flex-col h-screen items-center justify-center flex-1 px-4 py-8 max-w-md mx-auto w-full text-primary bg-primary font-semibold">
            <div className="bg-white p-6 py-8 rounded-xl shadow-lg w-full">
                <h1 className="text-3xl font-bold mb-3 text-center font-souvenir leading-[24px]">
                    Bem vindo ao app!
                </h1>
                <p className="text-lg text-center leading-[24px] my-6">
                    Você tem <span className=" text-secondary">R$ 467,38</span> disponível em sua conta.
                </p>
                <Button
                    animated
                    onClick={onNext}
                    className=""
                >
                    Começar!
                </Button>
            </div>
        </div>
    );
}
