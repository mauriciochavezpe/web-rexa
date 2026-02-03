import React from 'react';

const steps = [
    {
        number: 1,
        title: 'Planificación Estratégica',
        description: 'Análisis de ruta y carga.',
    },
    {
        number: 2,
        title: 'Ejecución Operativa',
        description: 'Despliegue de flota y personal.',
    },
    {
        number: 3,
        title: 'Monitoreo Real-Time',
        description: 'Seguimiento constante GPS.',
    },
    {
        number: 4,
        title: 'Control Documentario',
        description: 'Gestión de POD y cierre.',
    },
];

export function WorkModel() {
    return (
        <section className="w-full bg-soft-gray py-16 sm:py-20 px-4 md:px-20 lg:px-40">
            <div className="mx-auto max-w-[960px] flex flex-col gap-12">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-xs font-bold text-rexa-blue uppercase tracking-[0.4em] mb-4">
                        Proceso Estructurado
                    </h2>
                    <h3 className="text-oxford-gray text-3xl sm:text-4xl font-extrabold mb-4">
                        Nuestro Modelo de Trabajo
                    </h3>
                    <p className="text-gray-600 max-w-lg mx-auto">
                        Un proceso estructurado para garantizar la excelencia en cada operación.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-rexa-blue via-rexa-blue/50 to-rexa-blue z-0" />

                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="flex flex-col items-center text-center gap-4 relative p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 z-10 group"
                        >
                            <div className="w-12 h-12 rounded-full bg-rexa-blue text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-rexa-blue/30 group-hover:scale-110 transition-transform duration-300">
                                {step.number}
                            </div>
                            <h4 className="font-bold text-oxford-gray text-sm">{step.title}</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WorkModel;
