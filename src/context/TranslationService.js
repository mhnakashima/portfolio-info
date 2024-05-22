import { createContext, useContext, useMemo } from "react";

const TranslationContext = createContext();

const TranslationProvider = ({ translationService, children }) => {
    const value = useMemo(() => {
        return {
            t: translationService
        }
    }, [translationService]);

    return (
        <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>
    )
}

const useTranslate = () => {
    const context = useContext(TranslationContext);

    if (!context) {
        throw new Error("Translation Context was used outside of Translation Provider");
    }

    return context;
}

export { TranslationProvider, useTranslate };