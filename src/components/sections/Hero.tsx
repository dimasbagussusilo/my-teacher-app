import React from 'react';
import Button from '../ui/Button';
import { getHero } from '../../utils/settings';

const Hero: React.FC = () => {
    // Get hero settings from JSON
    const heroSettings = getHero();

    return (
        <section id="home" className="bg-gradient-to-r from-blue-50 to-indigo-100 pt-20 xs:pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 xs:pb-20 sm:pb-24 md:pb-28 lg:pb-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="md:w-1/2 lg:w-3/5 md:pr-8 lg:pr-12">
                        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-3 xs:mb-4 leading-tight">
                            {heroSettings.heading}
                        </h1>
                        <p className="text-base xs:text-lg md:text-xl text-gray-600 mb-6 xs:mb-7 sm:mb-8 max-w-2xl">
                            {heroSettings.description}
                        </p>
                        <Button 
                            onClick={() => {
                                const contactSection = document.getElementById('contact');
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }} 
                            className="text-sm xs:text-base py-2.5 xs:py-3 px-4 xs:px-5 touch-manipulation"
                        >
                            {heroSettings.ctaButton}
                        </Button>
                    </div>
                    <div className="md:w-1/2 lg:w-2/5 flex justify-center md:justify-end mt-8 md:mt-0">
                        <div className="relative w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40">
                            <img
                                src={heroSettings.image.src}
                                alt={heroSettings.image.alt}
                                className="w-full h-full rounded-full border-2 xs:border-3 sm:border-4 border-white shadow-lg object-cover"
                                // Add onerror fallback
                                onError={(e) => { const target = e.target as HTMLImageElement; target.onerror = null; target.src='https://placehold.co/150x150/CCCCCC/FFFFFF?text=Error'; }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
