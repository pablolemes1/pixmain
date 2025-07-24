import { useCallback } from "react";

const EMAIL_KEY = "pixmydollar_email";

export function useEmail() {
    // Get email from localStorage
    const getEmail = useCallback(() => {
        if (typeof window === "undefined") return "";
        return localStorage.getItem(EMAIL_KEY) || "";
    }, []);

    // Set email in localStorage
    const setEmail = useCallback((email: string) => {
        if (typeof window === "undefined") return;
        localStorage.setItem(EMAIL_KEY, email);
    }, []);

    // Remove email from localStorage
    const removeEmail = useCallback(() => {
        if (typeof window === "undefined") return;
        localStorage.removeItem(EMAIL_KEY);
    }, []);

    return { getEmail, setEmail, removeEmail };
}
