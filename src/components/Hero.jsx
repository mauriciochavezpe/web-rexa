import React from 'react';

export function Hero() {
    return (
        <section
            className="relative min-h-[600px] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat px-4 py-20 rounded-3xl overflow-hidden m-6"
            style={{
                backgroundImage: `linear-gradient(rgba(16, 22, 34, 0.75) 0%, rgba(16, 22, 34, 0.85) 100%), url("/6.jpeg")`
            }}
        >
            {/* Content */}
            <div className="flex flex-col max-w-[960px] text-center items-center gap-6 relative z-10">
                {/* Tag */}
                {/* <div className="inline-flex items-center gap-2 mb-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <span className="material-symbols-outlined text-rexa-blue text-lg">local_shipping</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/80">
                        Ingeniería en Transporte
                    </span>
                </div> */}

                {/* Title */}
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                    Excelencia en Transporte y
                    <br className="hidden sm:block" />
                    <span className="text-rexa-blue"> Distribución de Carga</span>
                </h1>

                {/* Subtitle */}
                <h2 className="text-gray-200 text-lg md:text-xl font-normal max-w-[720px] leading-relaxed">
                    Soluciones logísticas B2B de alto nivel para cadenas de suministro exigentes en Lima y Callao.
                </h2>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <a
                        href="https://wa.me/51956914559"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 min-w-[200px] bg-rexa-blue text-white px-8 py-4 text-sm font-bold uppercase tracking-wider shadow-2xl shadow-rexa-blue/40 hover:bg-white hover:text-rexa-blue transition-all duration-300"
                    >
                        <span className="material-symbols-outlined text-lg">send</span>
                        Solicitar Propuesta
                    </a>
                    <a
                        href="#servicios"
                        className="flex items-center justify-center gap-2 min-w-[200px] bg-transparent border-2 border-white/30 text-white px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-oxford-gray hover:border-white transition-all duration-300"
                    >
                        <span className="material-symbols-outlined text-lg">visibility</span>
                        Ver Servicios
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
                <span className="text-[10px] uppercase tracking-widest">Explorar</span>
                <span className="material-symbols-outlined">expand_more</span>
            </div>
        </section>
    );
}

export default Hero;
