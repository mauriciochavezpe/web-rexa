import React, { useState } from 'react';
import { Button } from './ui/button';

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: '#nosotros', label: 'Nosotros' },
        { href: '#servicios', label: 'Servicios' },
        { href: '#sectores', label: 'Sectores' },
        { href: '#clientes', label: 'Clientes' },
        { href: '#contacto', label: 'Contacto' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10 py-3">
                {/* Logo */}
                <a href="/" className="flex items-center gap-3">
                    <img
                        src="/logo.avif"
                        alt="REXA Logo"
                        className="h-10 w-auto object-contain"
                    />
                    <div className="flex flex-col -space-y-0.5">
                        {/* <span className="text-xl font-bold leading-tight tracking-tight text-oxford-gray"></span> */}
                        {/* <span className="text-[9px] font-medium tracking-wide uppercase text-gray-400">
                            Operador Logístico
                        </span> */}
                    </div>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex flex-1 justify-end gap-8 items-center">
                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-oxford-gray text-sm font-medium hover:text-rexa-blue transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <Button asChild>
                        <a
                            href="https://wa.me/51956914559"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-rexa-blue text-white px-6 py-2.5 text-sm font-bold rounded shadow-lg shadow-rexa-blue/20 hover:bg-deep-navy hover:shadow-xl transition-all duration-200"
                        >
                            <span className="material-symbols-outlined text-lg">send</span>
                            Cotizar
                        </a>
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-oxford-gray p-2 hover:bg-gray-100 rounded transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="material-symbols-outlined text-2xl">
                        {isMobileMenuOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="lg:hidden border-t border-gray-100 bg-white shadow-xl">
                    <nav className="flex flex-col px-4 py-6 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-oxford-gray text-sm font-medium hover:text-rexa-blue hover:bg-gray-50 transition-colors py-3 px-4 rounded"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="pt-4 mt-4 border-t border-gray-100">
                            <a
                                href="https://wa.me/51956914559"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-rexa-blue text-white px-6 py-4 text-sm font-bold rounded shadow-lg shadow-rexa-blue/20 hover:bg-deep-navy transition-all"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span className="material-symbols-outlined text-lg">send</span>
                                Cotizar Ahora
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;
