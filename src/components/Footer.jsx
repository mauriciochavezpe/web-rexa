import React from 'react';

const certifications = ['MTC Peru', 'Homologado', 'SCTR 2024'];

const footerLinks = [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Cobertura', href: '#sectores' },
    { label: 'Cotizar', href: 'https://wa.me/51956914559' },
];

export function Footer() {
    return (
        <footer className="bg-deep-navy text-white pt-16 sm:pt-24 pb-8 sm:pb-12" id="contacto">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 sm:mb-16">
                    {/* Company Info */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 mb-2">
                            <img
                                src="/logo.avif"
                                alt="REXA Logo"
                                className="h-10 w-auto object-contain brightness-0 invert"
                            />
                            {/* <span className="text-xl font-bold tracking-tight text-white">REXA</span> */}
                        </div>
                        <p className="text-blue-100/40 text-sm leading-relaxed">
                            REXA Operador Logístico S.A.C.
                            <br />
                            RUC 20612992046
                            <br /><br />
                            Comprometidos con la excelencia en el transporte de carga B2B en Perú.
                        </p>
                        {/* <button className="w-fit mt-4 bg-white text-deep-navy px-6 py-3 text-[10px] font-extrabold uppercase tracking-[0.15em] hover:bg-rexa-blue hover:text-white transition-all duration-300 rounded">
                            Descargar Brochure de Servicios
                        </button> */}
                    </div>

                    {/* Enlaces */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-rexa-blue mb-2">
                            Enlaces Rápidos
                        </h4>
                        <div className="flex flex-col gap-3 text-sm">
                            {footerLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-blue-100/60 hover:text-white hover:translate-x-1 transition-all duration-200"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contacto */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-rexa-blue mb-2">
                            Contacto
                        </h4>
                        <div className="flex flex-col gap-4 text-sm">
                            <div className="flex gap-3 items-start">
                                <span className="material-symbols-outlined text-rexa-blue text-sm mt-0.5">location_on</span>
                                <p className="text-blue-100/60">
                                    Asoc. Livomarket Mz. O Lote 10
                                    <br />
                                    Ate, Lima, Perú
                                </p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined text-rexa-blue text-sm">mail</span>
                                <a
                                    className="text-blue-100/60 hover:text-white transition-colors"
                                    href="mailto:contacto@rexa.pe"
                                >
                                    contacto@rexa.pe
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined text-rexa-blue text-sm">call</span>
                                <a
                                    className="text-blue-100/60 hover:text-white transition-colors"
                                    href="tel:+51956914559"
                                >
                                    +51 956 914 559
                                </a>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="mt-4">
                            <div className="flex flex-wrap gap-2">
                                {certifications.map((cert) => (
                                    <span
                                        key={cert}
                                        className="px-3 py-1.5 border border-white/10 rounded text-[9px] font-bold uppercase tracking-widest text-blue-100/40 hover:border-rexa-blue/50 hover:text-rexa-blue transition-all"
                                    >
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] text-blue-100/20 uppercase tracking-widest text-center md:text-left">
                        © 2024 REXA Operador Logístico S.A.C. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6">
                        <a
                            className="text-[10px] text-blue-100/20 uppercase tracking-widest hover:text-white transition-colors"
                            href="#"
                        >
                            Política de Privacidad
                        </a>
                        <a
                            className="text-[10px] text-blue-100/20 uppercase tracking-widest hover:text-white transition-colors"
                            href="#"
                        >
                            Términos de Servicio
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
