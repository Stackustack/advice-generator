import { useEffect } from "react";

import { useAtom, atom } from "jotai";

const storageKey = "useDarkTheme";

const themeState = atom(window.localStorage.getItem(storageKey) ?? "light");

export const useDarkTheme = (
    initialDark = false,
    { darkClass = "dark", lightClass = "light" } = {}
) => {
    const [theme, setTheme] = useAtom(themeState);

    useEffect(() => {
        if (initialDark) {
            setTheme("dark");
            return;
        }

        if (!window.matchMedia) return;

        let darkScheme: MediaQueryList | null = null;
        const localTheme = window.localStorage.getItem(storageKey);
        // const listener = (e: MediaQueryListEvent) => setTheme(e.matches ? darkClass : lightClass);
        const listener = (e: any) => setTheme(e.matches ? darkClass : lightClass);

        darkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        darkScheme.addEventListener("change", listener);
        setTheme(localTheme ?? (darkScheme.matches ? "dark" : "light"));

        return () => {
            if (darkScheme) darkScheme.removeEventListener("change", listener);
        };
    }, []);

    useEffect(() => {
        const addClass = theme === "dark" ? darkClass : lightClass;
        const removeClass = theme === "dark" ? lightClass : darkClass;
        document.body.classList.add(addClass);
        document.body.classList.remove(removeClass);
        window.localStorage.setItem(storageKey, theme);
    }, [theme]);

    return [theme, setTheme] as const;
};
