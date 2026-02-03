import React from 'react';

const trackingFeatures = [
    {
        icon: 'satellite_alt',
        title: 'Monitoreo GPS',
        description: 'Visibilidad total de su mercadería 24/7 con reportes de estado en tiempo real.',
    },
    {
        icon: 'notifications_active',
        title: 'Alertas en Tiempo Real',
        description: 'Notificaciones inmediatas de eventos críticos: llegada, descarga y confirmación de entrega.',
    },
    {
        icon: 'description',
        title: 'Gestión POD',
        description: 'Digitalización y entrega eficiente de pruebas de entrega y conformidades.',
    },
];

export function ControlTracking() {
    return (
        <section className="w-full bg-deep-navy py-20 px-4 md:px-20 lg:px-40 text-white overflow-hidden relative">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `url("/5.jpeg")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/95 to-deep-navy/80" />

            <div className="mx-auto max-w-[960px] flex flex-col gap-10 relative z-10">
                {/* Header */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-xs font-bold text-rexa-blue uppercase tracking-[0.4em] mb-2">
                        Tecnología Aplicada
                    </h2>
                    <h3 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight">
                        Control y Seguimiento
                    </h3>
                    <p className="text-blue-100/60 text-base font-normal max-w-[720px]">
                        Tecnología aplicada a la seguridad de su carga.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {trackingFeatures.map((feature) => (
                        <div
                            key={feature.title}
                            className="flex flex-col gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-rexa-blue/50 hover:bg-white/10 transition-all duration-300 group"
                        >
                            <span className="material-symbols-outlined text-rexa-blue text-4xl group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </span>
                            <h4 className="text-lg font-bold">{feature.title}</h4>
                            <p className="text-blue-100/60 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ControlTracking;
