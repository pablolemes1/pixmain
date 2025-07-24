"use client";

import { memo, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import Script from "next/script";
import { MdWarning } from "react-icons/md";

interface Step6Props {
    nextStep: () => void;
}

const VSLComponent = memo(() => (
    <>
        <div
            dangerouslySetInnerHTML={{
                __html: `<div id="vid_6854e4a36ea118875f811527" style="position: relative; width: 100%; padding: 56.25% 0 0;"> <img id="thumb_6854e4a36ea118875f811527" src="https://images.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/players/6854e4a36ea118875f811527/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> <div id="backdrop_6854e4a36ea118875f811527" style=" -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%; "></div>`,
            }}
        />
        <Script
            type="text/javascript"
            id="scr_6854e4a36ea118875f811527"
            src="https://scripts.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/players/6854e4a36ea118875f811527/player.js"
            async
        />

    </>
));

export function Step6({ nextStep }: Step6Props) {
    const [isVslDone, setIsVslDone] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        const SECONDS_TO_DISPLAY = 637; // 10 minutes and 59 seconds
        // const SECONDS_TO_DISPLAY = 10; // 10 minutes and 59 seconds
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

        if (alreadyElsDisplayed === 'true') {
            showHiddenElements();
            return;
        }

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
                (inst: any) => inst.options.id === '6854e4a36ea118875f811527'
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
                const allTime = smartplayer.instances.reduce(
                    (acc: number, instance: any) => {
                        if (!instance.video) return acc;
                        return acc + instance.video.currentTime;
                    },
                    0
                );
                setTime(allTime);
                if (elsDisplayed || instance.smartAutoPlay) return;
                if (allTime < SECONDS_TO_DISPLAY) return;
                showHiddenElements();
            });
        };

        startWatchVideoProgress();
    }, []);
    console.log(time);
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
                <Button
                    animated
                    onClick={nextStep}
                    className="w-full py-4 text-lg font-bold"
                >
                    Liberar acesso
                </Button>
            )}
        </div>
    );
}
