import React from 'react';
import {
    getFooter,
    // getNavbar
} from '../../utils/settings';

const Footer: React.FC = () => {
    // Get footer and navbar settings from JSON
    const footerSettings = getFooter();
    // const navbarSettings = getNavbar();

    return (
    <footer className="bg-gray-800 text-gray-300 py-6 xs:py-7 sm:py-8">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 3xl:px-16 4xl:px-20 text-center">
            <p className="text-sm xs:text-base">{footerSettings.copyright.replace('2023', new Date().getFullYear().toString())}</p>
            <p className="text-xs xs:text-sm mt-1.5 xs:mt-2">Website built with React, Vite, & Tailwind CSS</p>
            {/* Footer links */}
            {footerSettings.links.length > 0 && (
                <div className="flex justify-center space-x-4 mt-3">
                    {footerSettings.links.map((link, index) => (
                        <a 
                            key={index} 
                            href={link.href} 
                            className="text-xs xs:text-sm hover:text-white transition-colors"
                        >
                            {link.text}
                        </a>
                    ))}
                </div>
            )}
        </div>
    </footer>
);
}

export default Footer;
