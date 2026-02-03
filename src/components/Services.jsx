import React from 'react';

const services = [
    {
        image: '/1.jpeg',
        icon: 'local_shipping',
        title: 'Distribución (Última Milla)',
        description: 'Planificación de rutas dinámicas y flota certificada para entregas en Retail e Industria. Control de protocolos SCTR y EPP obligatorio en cada descarga.',
        features: ['Flota de 2T y 3.5T', 'Retorno de guías 24h'],
    },
    {
        image: '/7.jpeg',
        icon: 'swap_horiz',
        title: 'Cross-Docking',
        description: 'Sincronización de flujos para despacho inmediato. Ingeniería de clasificación por punto de venta para optimizar los tiempos de tránsito y costos de stock.',
        features: ['Cero almacenamiento prolongado', 'Picking especializado'],
    },
    {
        image: '/10.jpeg',
        icon: 'inventory_2',
        title: 'Almacenaje',
        description: 'Infraestructura propia de 1,000m² en Huachipa-Ate. Gestión administrativa con precisión técnica para control de inventarios de alta rotación.',
        features: ['WMS de control interno', 'Vigilancia 24/7'],
    },
];

export function Services() {
    return (
        <section className="py-16 sm:py-24 bg-white" id="servicios">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-20">
                    <h2 className="text-xs font-bold text-rexa-blue uppercase tracking-[0.4em] mb-3 sm:mb-4">
                        Portafolio de Soluciones B2B
                    </h2>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-oxford-gray tracking-tight">
                        Estructura Operativa de Alto Nivel
                    </h3>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="group flex flex-col rounded-xl overflow-hidden bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col gap-4">
                                {/* Title */}
                                <h4 className="text-lg sm:text-xl font-extrabold text-rexa-blue uppercase tracking-tight">
                                    {service.title}
                                </h4>

                                {/* Description */}
                                <p className="text-sm text-gray-600 leading-relaxed font-light">
                                    {service.description}
                                </p>

                                {/* Divider */}
                                <div className="h-[2px] w-12 bg-rexa-blue/30 group-hover:w-full group-hover:bg-rexa-blue transition-all duration-500"></div>

                                {/* Features */}
                                <ul className="space-y-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-rexa-blue rounded-full"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
