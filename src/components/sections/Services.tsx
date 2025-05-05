import React from 'react';
import { MessageSquare, Briefcase, BookOpen, User, Check, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/Card';
import Button from '../ui/Button';
import { getServices } from '../../utils/settings';

const Services: React.FC = () => {
    // Get services settings from JSON
    const servicesSettings = getServices();

    // Define the type for a service item
    type ServiceItem = {
        icon: React.ReactElement;
        title: string;
        description: string;
        price: string;
        features: string[];
        popular?: boolean;
    };

    // Map icon names from settings to actual icon components
    const getIconComponent = (iconName: string): React.ReactElement => {
        switch (iconName) {
            case 'MessageSquare':
                return <MessageSquare size={40} className="text-primary-600" />;
            case 'Briefcase':
                return <Briefcase size={40} className="text-primary-600" />;
            case 'BookOpen':
                return <BookOpen size={40} className="text-primary-600" />;
            case 'User':
                return <User size={40} className="text-primary-600" />;
            default:
                return <MessageSquare size={40} className="text-primary-600" />;
        }
    };

    // Transform settings items to ServiceItem type with proper icon components
    const services: ServiceItem[] = servicesSettings.items.map(item => ({
        icon: getIconComponent(item.icon),
        title: item.title,
        description: item.description,
        price: item.price,
        features: item.features,
        popular: item.popular
    }));

    return (
        <section id="services" className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 xs:mb-10 sm:mb-12">
                    {servicesSettings.heading}
                </h2>
                <div className="grid grid-cols-1 xs:grid-cols-1 mobile-l:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xs:gap-7 sm:gap-8 md:gap-10">
                    {services.map((service, index) => (
                        <Card 
                            key={index} 
                            className={`bg-white transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full relative ${service.popular ? 'border-2 border-primary-500' : ''}`}
                            hover
                        >
                            {service.popular && (
                                <div className="absolute -top-3 -right-3 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                    Popular
                                </div>
                            )}
                            <CardHeader className="p-4 xs:p-5 sm:p-6 pb-2">
                                <div className="bg-primary-100 rounded-full p-2 xs:p-3 w-16 h-16 flex items-center justify-center mb-3 xs:mb-4">
                                    {service.icon}
                                </div>
                                <CardTitle className="text-lg xs:text-xl">{service.title}</CardTitle>
                                <div className="mt-2 text-2xl font-bold text-gray-900">{service.price}</div>
                            </CardHeader>
                            <CardContent className="p-4 xs:p-5 sm:p-6 pt-0 pb-2 flex-grow">
                                <p className="text-sm xs:text-base text-gray-600 mb-4">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <Check size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-sm text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter className="p-4 xs:p-5 sm:p-6 pt-2">
                                <Button 
                                    variant="outline" 
                                    className="w-full justify-center hover:bg-primary-50 hover:text-primary-700 group"
                                    onClick={() => {
                                        const contactSection = document.getElementById('contact');
                                        if (contactSection) {
                                            contactSection.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    <span>{servicesSettings.ctaButton}</span>
                                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
