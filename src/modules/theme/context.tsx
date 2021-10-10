import { createContext, useState } from 'react';

const defaultThemeMode = 'light';

export type ThemeMode = 'light' | 'dark';

export const ThemeContext = createContext<{
    themeMode: ThemeMode;
    setThemeMode: (themeMode: ThemeMode) => void;
}>({
    themeMode: defaultThemeMode,
    setThemeMode: (): void => {
        throw new Error('setThemeMode function must be overridden');
    },
});

type Props = {
    children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
    const [themeMode, setThemeMode] = useState<ThemeMode>(defaultThemeMode);

    return (
        <ThemeContext.Provider
            value={{
                themeMode,
                setThemeMode: (mode: ThemeMode) => setThemeMode(mode),
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}
