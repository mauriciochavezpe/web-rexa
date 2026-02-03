import React from 'react';

const capabilities = [
    {
        image: '/4.jpeg',
        icon: 'local_shipping',
        title: 'Flota Diversificada',
        description: 'Desde unidades ligeras de 2T hasta tráilers de transporte pesado.',
    },
    {
        image: '/5.jpeg',
        icon: 'map',
        title: 'Cobertura Total',
        description: 'Operaciones concentradas en Lima y Callao con alcance nacional.',
    },
    {
        image: '/9.jpeg',
        icon: 'hub',
        title: 'Flexibilidad',
        description: 'Adaptabilidad ante picos de demanda estacional o campañas.',
    },
];

export function OperationalCapacity() {
    return (
        <section className="w-full bg-white py-16 sm:py-20 px-4 md:px-20 lg:px-40 border-y border-gray-100">
            <div className="mx-auto max-w-[960px] flex flex-col gap-10">
                {/* Header */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-xs font-bold text-rexa-blue uppercase tracking-[0.4em] mb-2">
                        Infraestructura
                    </h2>
                    <h3 className="text-oxford-gray text-3xl sm:text-4xl font-extrabold leading-tight">
                        Capacidad Operativa
                    </h3>
                    <p className="text-gray-600 text-base font-normal max-w-[720px] leading-relaxed">
                        Infraestructura flexible diseñada para adaptarse a la demanda de su negocio.
                    </p>
                </div>

                {/* Capabilities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {capabilities.map((capability) => (
                        <div
                            key={capability.title}
                            className="group flex flex-col rounded-xl overflow-hidden bg-soft-gray hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="h-40 overflow-hidden">
                                <img
                                    src={capability.image}
                                    alt={capability.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-rexa-blue text-2xl">
                                        {capability.icon}
                                    </span>
                                    <h4 className="text-oxford-gray text-lg font-bold">{capability.title}</h4>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed">{capability.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OperationalCapacity;
