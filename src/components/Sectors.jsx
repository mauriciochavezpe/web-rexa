import React from 'react';

const sectors = [
    {
        icon: 'storefront',
        title: 'Retail',
        description: 'Entregas en grandes superficies y tiendas por departamento.',
    },
    {
        icon: 'shopping_cart',
        title: 'Consumo Masivo',
        description: 'Alta rotación y distribución capilar en Lima Metropolitana.',
    },
    {
        icon: 'forklift',
        title: 'Distribución',
        description: 'Gestión de centros de distribución y cross-docking.',
    },
    {
        icon: 'inventory_2',
        title: '3PL',
        description: 'Integración con operadores logísticos terceros.',
    },
];

export function Sectors() {
    return (
        <section className="py-16 sm:py-24 bg-white" id="sectores">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left - Sectors Grid */}
                    <div className="flex flex-col gap-6">
                        <div className="mb-4">
                            <h2 className="text-xs font-bold text-rexa-blue uppercase tracking-[0.4em] mb-4">
                                Experiencia Sectorial
                            </h2>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-oxford-gray tracking-tight">
                                Sectores Atendidos
                            </h3>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {sectors.map((sector) => (
                                <div
                                    key={sector.title}
                                    className="p-5 bg-soft-gray rounded-xl border border-gray-100 hover:border-rexa-blue/30 hover:shadow-lg transition-all duration-300 group text-center"
                                >
                                    <span className="material-symbols-outlined text-gray-400 group-hover:text-rexa-blue text-3xl mb-3 transition-colors duration-300">
                                        {sector.icon}
                                    </span>
                                    <h4 className="font-bold text-sm text-oxford-gray mb-1">{sector.title}</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed">{sector.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Compliance Section */}
                    <div className="flex flex-col gap-6">
                        <div className="mb-4">
                            <h2 className="text-xs font-bold text-rexa-blue uppercase tracking-[0.4em] mb-4">
                                Garantía de Servicio
                            </h2>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-oxford-gray tracking-tight">
                                Cumplimiento y Seguridad
                            </h3>
                        </div>

                        <div className="flex gap-4 items-start p-4 bg-soft-gray rounded-xl">
                            <div className="h-full w-1 bg-rexa-blue rounded-full shrink-0" />
                            <p className="text-gray-600 text-sm leading-relaxed">
                                En REXA, la seguridad no es negociable. Contamos con rigurosos protocolos de gestión de
                                riesgos para proteger su patrimonio y reputación. Todos nuestros procesos están diseñados
                                para garantizar la integridad de su carga desde el origen hasta el destino final.
                            </p>
                        </div>

                        {/* Compliance Features */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 p-4 bg-soft-gray rounded-lg">
                                <span className="material-symbols-outlined text-rexa-blue">verified_user</span>
                                <span className="text-sm font-medium text-oxford-gray">SCTR Activo</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-soft-gray rounded-lg">
                                <span className="material-symbols-outlined text-rexa-blue">shield</span>
                                <span className="text-sm font-medium text-oxford-gray">Seguro de Carga</span>
                            </div>
                            {/* <div className="flex items-center gap-3 p-4 bg-soft-gray rounded-lg">
                                <span className="material-symbols-outlined text-rexa-blue">gpp_good</span>
                                <span className="text-sm font-medium text-oxford-gray">Homologación SAP</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-soft-gray rounded-lg">
                                <span className="material-symbols-outlined text-rexa-blue">fact_check</span>
                                <span className="text-sm font-medium text-oxford-gray">Control POD</span>
                            </div> */}
                        </div>

                        {/* Image - Real cargo */}
                        <div className="h-48 w-full rounded-xl overflow-hidden shadow-lg">
                            <img
                                src="/2.jpeg"
                                alt="Mercadería en pallets"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sectors;
