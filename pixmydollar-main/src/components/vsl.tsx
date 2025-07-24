import Script from 'next/script';
import React, { useEffect } from 'react';

const VSL: React.FC = () => {
    useEffect(() => {
        // Create and append the script to load the video player
        const script = document.createElement('script');
        script.src = "https://scripts.converteai.net/c9ad2a89-1d3d-45e5-8628-2a2ae0a0b34d/players/6812ad12940f2a9b20fb5e3a/player.js";
        script.async = true;
        document.head.appendChild(script);

        // Clean up function to remove script when component unmounts
        return () => {
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
        };
    }, []); // Empty dependency array ensures this runs once on mount

    return (
        <div className=' px-4'>
            <div id="vid_6812ad12940f2a9b20fb5e3a" style={{ position: 'relative', width: '100%', margin: '0 auto', padding: '56.25% 0 0' }}>
                <img
                    id="thumb_6812ad12940f2a9b20fb5e3a"
                    src="https://images.converteai.net/c9ad2a89-1d3d-45e5-8628-2a2ae0a0b34d/players/6812ad12940f2a9b20fb5e3a/thumbnail.jpg"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    alt="thumbnail"
                />
                <div
                    id="backdrop_6812ad12940f2a9b20fb5e3a"
                    style={{
                        WebkitBackdropFilter: 'blur(5px)',
                        backdropFilter: 'blur(5px)',
                        position: 'absolute',
                        top: 0,
                        height: '100%',
                        width: '100%'
                    }}
                ></div>
            </div>
            <Script
                type="text/javascript"
                id="scr_680e482217d1a06e748a3265"
                src="https://scripts.converteai.net/c9ad2a89-1d3d-45e5-8628-2a2ae0a0b34d/players/680e482217d1a06e748a3265/player.js"
                async
            />
        </div>
    );
};

export default VSL;