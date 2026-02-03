import React from 'react';

const protocols = [
    {
        icon: 'minor_crash',
        title: 'Mantenimiento de Flota',
        description: 'Programa riguroso de mantenimiento preventivo para garantizar cero detenciones operativas.',
    },
    {
        icon: 'description',
        title: 'Precisión Administrativa',
        description: 'Gestión documentaria con "Zero Errors". Trazabilidad absoluta de guías y retornos de POD.',
    },
    {
        icon: 'location_on',
        title: 'Conectividad Huachipa',
        description: 'Ubicación estratégica con acceso directo a Ramiro Prialé y Carretera Central.',
    },
];

export function Protocols() {
    return (
        <section className="py-16 sm:py-24 bg-rexa-blue text-white overflow-hidden relative">
            {/* Background with Team Image */}
            <div
                className="absolute inset-0 opacity-15"
                style={{
                    backgroundImage: `url("/6.jpeg")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-rexa-blue via-rexa-blue/95 to-rexa-blue" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
                <div className="grid lg:grid-cols-3 gap-10 sm:gap-16">
                    {/* Left Content - Protocols */}
                    <div className="lg:col-span-2">
                        <h2 className="text-xs font-bold text-white/60 uppercase tracking-[0.4em] mb-4">
                            Seguridad & Cumplimiento
                        </h2>
                        <h3 className="text-2xl sm:text-3xl font-extrabold mb-8 tracking-tight">
                            Protocolos de Seguridad y Conectividad
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                            {protocols.map((protocol) => (
                                <div
                                    key={protocol.title}
                                    className="flex gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-all">
                                        <span className="material-symbols-outlined text-white/80 text-2xl">
                                            {protocol.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-2 text-sm sm:text-base">
                                            {protocol.title}
                                        </h4>
                                        <p className="text-xs sm:text-sm text-blue-100/70 font-light leading-relaxed">
                                            {protocol.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Quote with Image */}
                    <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl flex flex-col justify-between border border-white/10">
                        {/* Quote */}
                        <div className="text-center mb-6">
                            <span className="material-symbols-outlined text-white/30 text-4xl mb-4">format_quote</span>
                            <p className="text-lg sm:text-xl font-light mb-4 italic leading-relaxed">
                                "Logística que no solo entrega, sino que construye confianza."
                            </p>
                            <div className="w-12 h-1 bg-white/30 rounded-full mx-auto mb-4" />
                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                                REXA Operador Logístico SAC
                            </span>
                        </div>

                        {/* Team Image */}
                        <div className="rounded-xl overflow-hidden mb-4">
                            <img
                                src="/1.jpeg"
                                alt="Personal REXA"
                                className="w-full h-32 object-cover"
                            />
                        </div>

                        <a
                            href="https://wa.me/51956914559"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-white text-rexa-blue px-6 py-3 text-[11px] font-extrabold uppercase tracking-widest hover:bg-gray-100 transition-colors rounded text-center"
                        >
                            Solicitar Cotización
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Protocols;
