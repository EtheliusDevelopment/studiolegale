"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie_consent", "true");
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-brand-navy p-4 shadow-top z-50 animate-fade-in-up">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-gray-300 text-sm leading-relaxed">
                    <p>
                        Questo sito utilizza solo cookie tecnici essenziali per garantire il corretto funzionamento.
                        Non utilizziamo cookie di profilazione o di terze parti.
                        <br className="hidden md:block" />
                        Continuando la navigazione, acconsenti all'uso di questi cookie.
                    </p>
                </div>
                <div className="flex gap-4 shrink-0">
                    <button
                        onClick={acceptCookies}
                        className="px-6 py-2 bg-brand-teal text-white text-sm font-medium rounded-sm hover:bg-brand-dark-teal transition-colors"
                    >
                        Accetta
                    </button>
                </div>
            </div>
        </div>
    );
}
