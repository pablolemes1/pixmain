"use client";

import { memo, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import Script from "next/script";
import { MdWarning } from "react-icons/md";
import { appendSrcParamToUrl } from "@/lib/urlParams";

interface Step14Props {
    nextStep: () => void;
}

const VSLComponent = memo(() => (
    <>
        <div
            dangerouslySetInnerHTML={{
                __html: `<div id="vid_6847ccaae73418f1e62260dc" style="position: relative; width: 100%; padding: 56.25% 0 0;"> <img id="thumb_6847ccaae73418f1e62260dc" src="https://images.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/players/6847ccaae73418f1e62260dc/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> <div id="backdrop_6847ccaae73418f1e62260dc" style=" -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%; "></div>`,
            }}
        />
        <Script
            type="text/javascript"
            id="scr_6847ccaae73418f1e62260dc"
            src="https://scripts.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/players/6847ccaae73418f1e62260dc/player.js"
            async
        />
    </>
));

export function Step14({ nextStep }: Step14Props) {
    const [isVslDone, setIsVslDone] = useState(false);
    const [time, setTime] = useState(0);
    const [checkoutHref, setCheckoutHref] = useState("https://go.perfectpay.com.br/PPU38CPPTFA");

    useEffect(() => {
        const SECONDS_TO_DISPLAY = 353; // 5 minutes and 53 seconds
        let attempts = 0;

        const urlParams = new URLSearchParams(window.location.search);
        const noDelay = urlParams.get('nodelay') === 'true';
        let elsDisplayed = noDelay;
        const alreadyDisplayedKey = `alreadyElsDisplayed${SECONDS_TO_DISPLAY}`;
        const alreadyElsDisplayed = noDelay
            ? 'true'
            : localStorage.getItem(alreadyDisplayedKey);

        const showHiddenElements = function () {
            elsDisplayed = true;
            setIsVslDone(true);
            localStorage.setItem(alreadyDisplayedKey, 'true');
        };

        // if (alreadyElsDisplayed === 'true') {
        // showHiddenElements();
        // return;
        // }

        const startWatchVideoProgress = function () {
            // @ts-ignore
            if (typeof smartplayer === 'undefined' || !smartplayer.instances) {
                if (attempts >= 10) return console.log('no smartplayer found');
                attempts += 1;
                return setTimeout(function () {
                    startWatchVideoProgress();
                }, 1000);
            }

            // @ts-ignore
            const instance = smartplayer.instances.find(
                (inst: any) => inst.options.id === '6847ccaae73418f1e62260dc'
            );

            if (!instance) {
                if (attempts >= 10) return;
                attempts += 1;
                return setTimeout(function () {
                    startWatchVideoProgress();
                }, 1000);
            }

            instance.on('timeupdate', () => {
                // @ts-ignore
                const allTime = instance.video.currentTime;
                setTime(allTime);
                console.log({ allTime })
                if (elsDisplayed || instance.smartAutoPlay) return;
                if (allTime < SECONDS_TO_DISPLAY) return;
                showHiddenElements();
            });
        };

        startWatchVideoProgress();
    }, []);

    useEffect(() => {
        setCheckoutHref(appendSrcParamToUrl("https://go.perfectpay.com.br/PPU38CPPTFA"));
    }, []);

    return (
        <div className="flex flex-col px-4 py-8 max-w-md mx-auto w-full">
            {/* Warning text with icon */}
            <div className="flex items-center justify-center gap-2 mb-6">
                <MdWarning className="text-xl text-red-600" />
                <p className="font-semibold text-primary text-center">
                    Assista esse vídeo com atenção!
                </p>
            </div>

            {/* Video player */}
            <div className="w-full rounded-lg overflow-hidden shadow-lg mb-6">
                <VSLComponent />
            </div>

            {/* Action button */}
            {isVslDone && (
                <a
                    href={checkoutHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block"
                >
                    <Button
                        animated
                        className="w-full py-4 text-lg font-bold text-center"
                    >
                        Liberar acesso
                    </Button>
                </a>
            )}
        </div>
    );
}
