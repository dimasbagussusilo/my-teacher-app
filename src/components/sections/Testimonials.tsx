import React, {
    // useState,
    useRef,
    // useEffect
} from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import Button from '../ui/Button';
import { getTestimonials } from '../../utils/settings';

const Testimonials: React.FC = () => {
    // Get testimonials settings from JSON
    const testimonialSettings = getTestimonials();

    // Define the type for a testimonial item
    type TestimonialItem = {
        quote: string;
        name: string;
        info: string;
        avatar?: string;
        featured?: boolean;
        rating?: number;
    };

    // Transform settings items to TestimonialItem type
    // For this example, we'll mark the first testimonial as featured
    const testimonials: TestimonialItem[] = testimonialSettings.items.map((item, index) => ({
        quote: item.text,
        name: item.name,
        info: item.role,
        avatar: item.image,
        rating: item.rating,
        featured: index === 0 // Mark the first one as featured
    }));

    // Get featured testimonial
    const featuredTestimonial = testimonials.find(t => t.featured) || testimonials[0];

    // Ref for the scrollable container
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Scroll functions
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <section id="testimonials" className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 xs:mb-10 sm:mb-12">
                    {testimonialSettings.heading}
                </h2>

                {/* Featured Testimonial */}
                <div className="mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16">
                    <Card className="bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-100 shadow-md overflow-hidden">
                        <CardContent className="p-4 xs:p-6 sm:p-8 md:p-10">
                            <div className="flex flex-col md:flex-row md:items-center gap-4 xs:gap-6 sm:gap-8 md:gap-10">
                                <div className="w-full md:w-1/3 flex flex-col items-center md:items-start lg:items-center">
                                    <div className="relative">
                                        <div className="absolute -top-2 -left-2 text-primary-200 hidden xs:block">
                                            <Quote size={24} className="xs:w-8 xs:h-8 sm:w-10 sm:h-10" />
                                        </div>
                                        <img 
                                            src={featuredTestimonial.avatar || "https://placehold.co/200x200/EBF4FF/4A90E2?text=Student"} 
                                            alt={featuredTestimonial.name}
                                            className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-2 xs:border-4 border-white shadow-lg object-cover z-10 relative"
                                            onError={(e) => { 
                                                const target = e.target as HTMLImageElement; 
                                                target.onerror = null; 
                                                target.src='https://placehold.co/200x200/CCCCCC/FFFFFF?text=Error'; 
                                            }}
                                        />
                                    </div>
                                    <div className="mt-3 xs:mt-4 text-center md:text-left lg:text-center">
                                        <p className="font-bold text-gray-800 text-base xs:text-lg">{featuredTestimonial.name}</p>
                                        <p className="text-sm xs:text-base text-gray-600">{featuredTestimonial.info}</p>
                                        <div className="flex items-center justify-center md:justify-start lg:justify-center mt-1 xs:mt-2">
                                            {[...Array(featuredTestimonial.rating || 5)].map((_, i) => (
                                                <Star key={i} size={16} className="text-yellow-400 mx-0.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" fill="currentColor" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-2/3 mt-4 md:mt-0">
                                    <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-700 italic leading-relaxed">
                                        "{featuredTestimonial.quote}"
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* More Testimonials */}
                <div className="mb-4">
                    <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center mb-4 xs:mb-6">
                        <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold text-gray-800 mb-2 xs:mb-0">More Success Stories</h3>
                        <div className="flex space-x-2 self-end xs:self-auto">
                            <Button 
                                variant="outline" 
                                className="p-1.5 xs:p-2 rounded-full touch-manipulation" 
                                onClick={scrollLeft}
                                aria-label="Scroll left"
                            >
                                <ChevronLeft size={18} className="xs:w-5 xs:h-5" />
                            </Button>
                            <Button 
                                variant="outline" 
                                className="p-1.5 xs:p-2 rounded-full touch-manipulation" 
                                onClick={scrollRight}
                                aria-label="Scroll right"
                            >
                                <ChevronRight size={18} className="xs:w-5 xs:h-5" />
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <div 
                            ref={scrollContainerRef}
                            className="overflow-x-auto pb-4 hide-scrollbar -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
                        >
                            <div className="flex space-x-3 xs:space-x-4 sm:space-x-5 md:space-x-6 w-max">
                                {testimonials.filter(t => !t.featured).map((testimonial, index) => (
                                    <Card 
                                        key={index} 
                                        className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col min-w-[260px] xs:min-w-[280px] sm:min-w-[320px] md:min-w-[340px] max-w-[90vw] xs:max-w-[80vw] sm:max-w-[400px]"
                                    >
                                        <CardContent className="p-3 xs:p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
                                            <div className="flex items-center mb-3 xs:mb-4">
                                                <img 
                                                    src={testimonial.avatar || "https://placehold.co/100x100/EBF4FF/4A90E2?text=Student"} 
                                                    alt={testimonial.name}
                                                    className="w-10 h-10 xs:w-12 xs:h-12 rounded-full mr-2 xs:mr-3 object-cover"
                                                    onError={(e) => { 
                                                        const target = e.target as HTMLImageElement; 
                                                        target.onerror = null; 
                                                        target.src='https://placehold.co/100x100/CCCCCC/FFFFFF?text=Error'; 
                                                    }}
                                                />
                                                <div>
                                                    <p className="font-semibold text-gray-800 text-sm xs:text-base">{testimonial.name}</p>
                                                    <p className="text-xs text-gray-500">{testimonial.info}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center mb-2 xs:mb-3">
                                                {[...Array(testimonial.rating || 5)].map((_, i) => (
                                                    <Star key={i} size={12} className="text-yellow-400 mr-0.5 xs:mr-1 xs:w-3.5 xs:h-3.5" fill="currentColor" />
                                                ))}
                                            </div>
                                            <p className="text-xs xs:text-sm sm:text-base text-gray-700 italic mb-2 xs:mb-3 flex-grow">"{testimonial.quote}"</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
