import React from 'react';

const clients = [
    { name: 'GLORIA', color: 'text-blue-800' },
    { name: 'PROMART', color: 'text-orange-600' },
    { name: 'FALABELLA', color: 'text-green-600' },
    { name: 'PAMOLSA', color: 'text-blue-600' },
    // { name: 'CARVAJAL', color: 'text-red-700' },
];

export function Clients() {
    return (
        <section className="py-16 sm:py-20 bg-soft-gray" id="clientes">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-xs font-bold text-rexa-blue uppercase tracking-[0.4em] mb-4">
                        Clientes Corporativos
                    </h2>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-oxford-gray tracking-tight">
                        Validación Corporativa de Alto Perfil
                    </h3>
                </div>

                {/* Clients Logos */}
                <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 md:gap-20">
                    {clients.map((client) => (
                        <div
                            key={client.name}
                            className="group h-16 md:h-20 flex items-center justify-center px-6 py-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                        >
                            <span className={`text-xl sm:text-2xl font-black ${client.color} tracking-tighter grayscale group-hover:grayscale-0 transition-all duration-300`}>
                                {client.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Trust Indicator */}
                <div className="mt-12 text-center">
                    <p className="text-gray-400 text-sm">
                        <span className="text-rexa-blue font-bold">+15</span> empresas confían en nuestros servicios logísticos
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Clients;
