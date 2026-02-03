import React from 'react';

export function CTASection() {
    return (
        <section className="w-full bg-rexa-blue py-16 px-4 overflow-hidden relative">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url("/4.jpeg")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-rexa-blue via-rexa-blue/95 to-rexa-blue" />

            <div className="mx-auto max-w-[960px] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative z-10">
                <div className="flex flex-col gap-2">
                    <h2 className="text-white text-2xl sm:text-3xl font-black tracking-tight">
                        Optimice su cadena de suministro hoy
                    </h2>
                    <p className="text-blue-100/80 text-base sm:text-lg">
                        Soluciones a medida para empresas líderes en el mercado.
                    </p>
                </div>
                <a
                    href="https://wa.me/51956914559"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-rexa-blue px-8 py-4 rounded font-bold text-sm uppercase tracking-wider hover:bg-gray-100 hover:shadow-xl transition-all duration-300 shadow-lg whitespace-nowrap"
                >
                    <span className="material-symbols-outlined text-lg">chat</span>
                    Contáctenos Ahora
                </a>
            </div>
        </section>
    );
}

export default CTASection;
