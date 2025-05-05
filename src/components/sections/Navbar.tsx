import React, { useState, useEffect } from 'react';
import { getNavbar } from '../../utils/settings';

const Navbar: React.FC = () => {
    // Get navbar settings from JSON
    const navbarSettings = getNavbar();

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Function to close the mobile menu when a link is clicked
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    // Add scroll event listener to change navbar appearance on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Navbar classes that change based on scroll position
    const navbarClasses = scrolled
        ? "bg-white shadow-elegant sticky top-0 z-50 transition-all duration-300"
        : "bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50 transition-all duration-300";

    return (
        <nav className={navbarClasses}>
            <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="flex items-center justify-between h-16 xs:h-18">
                    <div className="flex items-center">
                        {/* Logo and brand name */}
                        <a href="#home" className="flex items-center group">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold mr-2 transition-transform group-hover:scale-110">
                                {navbarSettings.logo.text.split(' ').map(word => word[0]).join('')}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl xs:text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">{navbarSettings.logo.text}</span>
                                <span className="ml-0.5 text-xs xs:text-sm text-gray-500 hidden xs:inline">{navbarSettings.logo.subtext}</span>
                            </div>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-4 sm:ml-6 md:ml-10 flex items-baseline space-x-1 sm:space-x-2 lg:space-x-4 xl:space-x-6">
                            {navbarSettings.links.map((link, index) => (
                                <a 
                                    key={index} 
                                    href={link.href} 
                                    onClick={handleLinkClick} 
                                    className={
                                        index === navbarSettings.links.length - 1
                                            ? "bg-gradient-to-r from-primary-500 to-secondary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:shadow-md transition-all hover:-translate-y-0.5"
                                            : "text-gray-700 hover:text-primary-600 px-2 sm:px-3 py-2 rounded-md text-sm font-medium transition-colors relative group"
                                    }
                                >
                                    {link.text}
                                    {index !== navbarSettings.links.length - 1 && (
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-1 xs:-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-gray-100 inline-flex items-center justify-center p-1.5 xs:p-2 rounded-md text-gray-500 hover:text-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary-500 transition-colors"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-5 w-5 xs:h-6 xs:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-5 w-5 xs:h-6 xs:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div 
                className={`${isOpen ? 'animate-slide-down' : 'hidden'} md:hidden absolute w-full bg-white shadow-elegant z-40`} 
                id="mobile-menu"
            >
                <div className="px-2 xs:px-3 sm:px-4 pt-2 pb-3 space-y-1">
                    {navbarSettings.links.map((link, index) => (
                        <a 
                            key={index} 
                            href={link.href} 
                            onClick={handleLinkClick} 
                            className={
                                index === navbarSettings.links.length - 1
                                    ? "bg-gradient-to-r from-primary-500 to-secondary-600 text-white block px-3 py-2 rounded-md text-sm xs:text-base font-medium mt-3"
                                    : "text-gray-700 hover:bg-primary-50 hover:text-primary-600 block px-3 py-2 rounded-md text-sm xs:text-base font-medium transition-colors"
                            }
                        >
                            {link.text}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
