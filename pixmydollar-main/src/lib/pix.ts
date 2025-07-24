import axios from 'axios';

export const sendPixRequest = async (pixKey: string, pixType: string) => {
    if (!process.env.NEXT_PUBLIC_SUITPAY_API_URL)
        throw new Error('NEXT_PUBLIC_SUITPAY_API_URL is not defined');

    try {
        const res = await axios.post(process.env.NEXT_PUBLIC_SUITPAY_API_URL, {
            pixType: pixType,
            pixKey: pixKey.replaceAll(
                /[\s\-.()]/g, ''
            ),
            app: process.env.NEXT_PUBLIC_SUITPAY_API_APP,
        });
        return res.data as { status: boolean };
    } catch (error) {
        console.error("Erro ao enviar a requisição PIX:", error);
        return null;
    }
};
