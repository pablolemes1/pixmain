"use client";
import { useState } from "react";
import { Button } from "../ui/Button";
import { appendSrcParamToUrl } from "@/lib/urlParams";

export interface PlanData {
    title: string;
    description: string;
    price: string;
    oldPrice?: string;
    vagas: number;
    href: string;
    badge?: string;
    icon?: React.ReactNode;
    highlight?: boolean;
    nextId?: string;
    id: string;
}

export function PlanCard({ plan, nextId, isLast }: { plan: PlanData; nextId?: string; isLast?: boolean }) {
    const getCheckoutHref = (href: string) => {
        return appendSrcParamToUrl(href);
    };

    return (
        <div id={plan.id} style={{
            paddingTop: plan.badge ? '2.5rem' : '',
        }} className={`rounded-xl relative bg-background/20 p-5 mb-6 flex flex-col items-center w-full max-w-md mx-auto border border-b/80`}>
            <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl font-souvenir font-bold text-primary text-center">{plan.title}</span>
                {/* {plan.icon && <span>{plan.icon}</span>} */}
                {plan.badge && (
                    <img className=" absolute w-32 -right-8 -top-13" src={'/assets/upsell/choice.png'} />
                )}
            </div>
            <div className="text-center text-base text-primary font-semibold mb-2 whitespace-pre-line">{plan.description}</div>
            {plan.oldPrice && <div className="text-center text-red-600 font-bold line-through text-lg">{plan.oldPrice}</div>}
            <span className=" my-2 text-dark text-lg">Por apenas...</span>
            <div className="text-center text-green-600 font-extrabold text-5xl mb-2">{plan.price}</div>
            <div className=" my-4 bg-black/10 rounded-full h-0.5 w-full" />
            <div className="text-center text-xs text-white bg-red-600 rounded px-2 py-1 mb-3">{plan.vagas} vagas restantes</div>
            <a href={getCheckoutHref(plan.href)} className="w-full">
                <Button animated className="w-full bg-primary text-white font-bold py-3 text-base mb-2">Quero esse plano</Button>
            </a>
            {isLast ? (
                <a href={appendSrcParamToUrl("/upsell2")}
                    className="text-primary underline text-sm font-bold">Não quero esse plano!</a>
            ) : (
                <a href={appendSrcParamToUrl(nextId || "")}
                    className="text-primary underline text-sm font-bold">Não quero esse plano!</a>
            )}
        </div>
    );
}
