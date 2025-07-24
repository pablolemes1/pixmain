import Image from "next/image";

export default function Upsell1Header() {
    return (
        <header className="bg-primary py-6 flex justify-center items-center w-full">
            <Image src="/logo-white.svg" alt="PixMyDollar Logo" width={200} height={40} priority />
        </header>
    );
}
