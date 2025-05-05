import React, { useEffect, lazy, Suspense } from 'react';
import Navbar from './components/sections/Navbar';
import Footer from './components/sections/Footer';
import SEO from './components/SEO';

// Lazy load section components for better performance
const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const Services = lazy(() => import('./components/sections/Services'));
const Testimonials = lazy(() => import('./components/sections/Testimonials'));
const Contact = lazy(() => import('./components/sections/Contact'));

// Main App Component - Renders all sections
const App: React.FC = () => {
    // Add smooth scrolling for anchor links
    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                if (href) {
                    const targetElement = document.querySelector(href);
                    if (targetElement) {
                        // Calculate offset for sticky navbar if needed
                        const navbarHeight = (document.querySelector('nav')?.offsetHeight || 0) + 10; // Get nav height + extra space
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                        });

                        // Close mobile menu if open after clicking a link
                        const mobileMenuButton = document.querySelector('button[aria-controls="mobile-menu"]');
                        if (mobileMenuButton && mobileMenuButton.getAttribute('aria-expanded') === 'true') {
                            (mobileMenuButton as HTMLButtonElement).click(); // Simulate click to close
                        }
                    }
                }
            });
        });
    }, []);

    // Loading fallback component
    const SectionLoading = () => (
        <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );

    return (
        // Add Inter font class if you configured it in tailwind.config.js
        <div className="font-sans">
            <SEO />
            <Navbar />
            <main> {/* Wrap sections in main for semantics */}
                <Suspense fallback={<SectionLoading />}>
                    <Hero />
                </Suspense>
                <Suspense fallback={<SectionLoading />}>
                    <About />
                </Suspense>
                <Suspense fallback={<SectionLoading />}>
                    <Services />
                </Suspense>
                <Suspense fallback={<SectionLoading />}>
                    <Testimonials />
                </Suspense>
                <Suspense fallback={<SectionLoading />}>
                    <Contact />
                </Suspense>
            </main>
            <Footer />
        </div>
    );
}

export default App;
