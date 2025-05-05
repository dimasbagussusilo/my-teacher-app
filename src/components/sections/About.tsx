import React from 'react';
import Button from '../ui/Button';
import { getAbout } from '../../utils/settings';

const About: React.FC = () => {
    // Get about settings from JSON
    const aboutSettings = getAbout();

    return (
        <section id="about" className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 xs:mb-10 sm:mb-12">
                    {aboutSettings.heading}
                </h2>
                <div className="flex flex-col md:flex-row items-start md:space-x-8 lg:space-x-12">
                    <div className="w-full xs:w-4/5 sm:w-3/4 md:w-2/5 lg:w-1/3 mb-6 xs:mb-7 sm:mb-8 md:mb-0">
                        <div className="aspect-w-3 aspect-h-2 rounded-lg shadow-md overflow-hidden">
                            <img
                                src={aboutSettings.image.src}
                                alt={aboutSettings.image.alt}
                                className="w-full h-full object-cover"
                                // Add onerror fallback
                                onError={(e) => { const target = e.target as HTMLImageElement; target.onerror = null; target.src='https://placehold.co/600x400/CCCCCC/FFFFFF?text=Error'; }}
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-3/5 lg:w-2/3 text-gray-700 space-y-3 xs:space-y-4">
                        {aboutSettings.paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-sm xs:text-base md:text-lg leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                        {/* Add a call to action or link to services/contact */}
                        <div className="mt-4 xs:mt-5 sm:mt-6">
                            <Button 
                                onClick={() => {
                                    const servicesSection = document.getElementById('services');
                                    if (servicesSection) {
                                        servicesSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }} 
                                className="text-sm xs:text-base py-2.5 xs:py-3 px-4 xs:px-5 touch-manipulation"
                            >
                                {aboutSettings.ctaButton}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
