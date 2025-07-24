// Utility to get the 'src' param from the current URL (browser only)
export function getSrcParam(): string | null {
    if (typeof window === 'undefined') return null;
    const url = new URL(window.location.href);
    return url.searchParams.get('src');
}

// Appends the src param to a given URL if it exists in the current URL
export function appendSrcParamToUrl(url: string): string {
    const src = getSrcParam();
    console.log(src)
    if (!src) return url;
    try {
        const u = new URL(url, window.location.origin);
        u.searchParams.set('src', src);
        return u.toString();
    } catch {
        // fallback for relative URLs
        const hasQuery = url.includes('?');
        const sep = hasQuery ? '&' : '?';
        return url + sep + 'src=' + src;
    }
}
