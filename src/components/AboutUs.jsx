import React from 'react';

const features = [
    {
        icon: 'verified',
        title: 'Confiabilidad Operativa',
        description: 'Procesos robustos certificados y auditables para asegurar el cumplimiento del 100% en sus entregas.',
    },
    {
        icon: 'domain',
        title: 'Experiencia en B2B',
        description: 'Conocimiento profundo de las necesidades corporativas, atendiendo a grandes empresas en Lima y provincias.',
    },
];

export function AboutUs() {
    return (
        <section className="w-full bg-soft-gray py-16 sm:py-20 px-4 md:px-20 lg:px-40" id="nosotros">
            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Content */}
                    <div className="flex flex-col gap-8">
                        {/* Header */}
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xs font-bold text-rexa-blue uppercase tracking-[0.4em] mb-2">
                                Acerca de Nosotros
                            </h2>
                            <h3 className="text-oxford-gray text-3xl sm:text-4xl font-extrabold leading-tight">
                                Quiénes Somos
                            </h3>
                            <p className="text-gray-600 text-base font-normal leading-relaxed">
                                Más que un proveedor, somos su socio estratégico en logística, garantizando confiabilidad y
                                experiencia en cada entrega. Operamos con los más altos estándares de calidad para asegurar que
                                su negocio nunca se detenga.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature) => (
                                <div
                                    key={feature.title}
                                    className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-lg hover:border-rexa-blue/20 transition-all duration-300 group"
                                >
                                    <div className="text-rexa-blue bg-rexa-blue/10 w-fit p-2 rounded-lg group-hover:bg-rexa-blue group-hover:text-white transition-all duration-300">
                                        <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                                    </div>
                                    <h4 className="text-oxford-gray text-base font-bold">{feature.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Images */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <img
                                src="/17.jpeg"
                                alt="Personal REXA con camión"
                                className="w-full h-64 object-cover rounded-2xl shadow-lg"
                            />
                            <img
                                src="/3.jpeg"
                                alt="Mercadería lista para distribución"
                                className="w-full h-40 object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                        <div className="space-y-4 mt-8">
                            <img
                                src="/16.png"
                                alt="Flota REXA"
                                   className="w-full h-64 object-contain md:object-cover rounded-2xl shadow-lg"
                                />
                            <img
                                src="/18.jpg"
                                alt="Equipo REXA"
                                className="w-full h-40 object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
