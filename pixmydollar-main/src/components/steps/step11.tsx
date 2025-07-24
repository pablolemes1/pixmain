"use client"
import { Product } from "../product";
import { VALUES } from "@/lib/values";

const INDEX = 4;

export function Step11({
    nextStep,
    addCurrency
}: {
    nextStep: () => void;
    addCurrency: (amount: number) => void;
}) {
    return (
        <div className="flex flex-col h-screen items-center flex-1 px-4 py-8 max-w-md mx-auto w-full font-semibold">
            <Product
                addCurrency={addCurrency}
                nextStep={nextStep}
                value={VALUES[INDEX]}
                img={`/assets/${INDEX + 1}.webp`}
            />
        </div>
    );
}
