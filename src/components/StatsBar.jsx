import React from 'react';

const stats = [
    {
        icon: 'warehouse',
        value: '1,000m²',
        label: 'Centro de Distribución',
        sublabel: 'Huachipa Hub Estratégico',
    },
    {
        icon: 'satellite_alt',
        value: '24/7',
        label: 'Monitoreo GPS',
        sublabel: 'Trazabilidad en Tiempo Real',
    },
    {
        icon: 'verified',
        value: '98.5%',
        label: 'OTIF',
        sublabel: 'Precisión en Entregas',
    },
    {
        icon: 'groups',
        value: '+15',
        label: 'Clientes Activos',
        sublabel: 'Empresas de Alto Perfil',
    },
];

export function StatsBar() {
    return (
        <div className="w-full bg-white relative z-20 -mt-12 sm:-mt-16 mb-12 lg:mb-20">
            <div className="mx-auto max-w-6xl">
                <div className="bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-100">
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.value}
                                className={`p-6 sm:p-8 flex flex-col items-center text-center group hover:bg-rexa-blue/5 transition-colors duration-300
                                    ${index !== stats.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-gray-100' : ''}
                                    ${index === 1 ? 'border-l lg:border-l-0 border-gray-100' : ''}
                                    ${index === 3 ? 'border-l lg:border-l-0 border-gray-100' : ''}`}
                            >
                                <span className="material-symbols-outlined text-rexa-blue text-3xl sm:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                    {stat.icon}
                                </span>
                                <span className="text-2xl sm:text-3xl font-extrabold text-rexa-blue mb-1">
                                    {stat.value}
                                </span>
                                <p className="text-xs font-bold text-oxford-gray uppercase tracking-wider mb-1">
                                    {stat.label}
                                </p>
                                <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                                    {stat.sublabel}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatsBar;
