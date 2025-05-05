import React, {useState} from 'react';
import {Mail, MapPin, Phone, Send} from 'lucide-react';
import Button from '../ui/Button';
import {
    Input, Textarea, FormLabel,
    // FormError
} from '../ui/Input';
import {getContact} from '../../utils/settings';

const Contact: React.FC = () => {
    // Get contact settings from JSON
    const contactSettings = getContact();

    // Define state type
    interface FormData {
        name: string;
        email: string;
        message: string;
    }

    const [formData, setFormData] = useState<FormData>({name: '', email: '', message: ''});
    const [status, setStatus] = useState<string>(''); // Type for status message

    // Type the event parameter for input/textarea changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    // Type the event parameter for form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus(''); // Clear previous status

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('Please fill in all fields.');
            return;
        }
        // Email validation (basic)
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setStatus('Please enter a valid email address.');
            return;
        }

        // --- Form Submission Simulation ---
        // In a real app, replace this with your actual form submission logic
        // (e.g., using fetch to send data to a backend API or a service like Formspree)
        console.log("Form data submitted:", formData);
        setStatus('Sending...'); // Indicate submission in progress

        // Simulate network request
        setTimeout(() => {
            // Assume success for this example
            setStatus(contactSettings.successMessage);
            setFormData({name: '', email: '', message: ''}); // Clear form on success

            // Simulate clearing the success message after a few seconds
            setTimeout(() => setStatus(''), 5000);

        }, 1500); // Simulate 1.5 second delay
        // --- End Simulation ---
    };


    return (
        <section id="contact" className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 xs:mb-10 sm:mb-12">
                    {contactSettings.heading}
                </h2>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 bg-white p-4 xs:p-5 sm:p-6 md:p-8 rounded-lg shadow-md">
                    {/* Contact Info */}
                    <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
                        <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold text-gray-800">Contact
                            Information</h3>
                        <p className="text-sm xs:text-base text-gray-600">
                            {contactSettings.subheading}
                        </p>
                        <div className="flex items-start space-x-2 xs:space-x-3">
                            <Mail size={16} className="text-primary-600 mt-1 flex-shrink-0 xs:w-[18px] xs:h-[18px]"/>
                            <div>
                                <h4 className="font-semibold text-gray-700 text-sm xs:text-base">Email</h4>
                                <a href={`mailto:${contactSettings.email}`}
                                   className="text-primary-600 hover:underline break-all text-xs xs:text-sm sm:text-base">{contactSettings.email}</a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-2 xs:space-x-3">
                            <Phone size={16} className="text-primary-600 mt-1 flex-shrink-0 xs:w-[18px] xs:h-[18px]"/>
                            <div>
                                <h4 className="font-semibold text-gray-700 text-sm xs:text-base">Phone (WhatsApp
                                    preferred)</h4>
                                <a href={`tel:${contactSettings.phone.replace(/\s+/g, '')}`}
                                   className="text-primary-600 hover:underline text-xs xs:text-sm sm:text-base">{contactSettings.phone}</a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-2 xs:space-x-3">
                            <MapPin size={16} className="text-primary-600 mt-1 flex-shrink-0 xs:w-[18px] xs:h-[18px]"/>
                            <div>
                                <h4 className="font-semibold text-gray-700 text-sm xs:text-base">Location</h4>
                                <p className="text-gray-600 text-xs xs:text-sm sm:text-base">{contactSettings.location}</p>
                                <p className="text-xs text-gray-500">(Online lessons available globally)</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="mt-6 md:mt-0">
                        <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold text-gray-800 mb-3 xs:mb-4">{contactSettings.formHeading}</h3>
                        <form onSubmit={handleSubmit} className="space-y-3 xs:space-y-4">
                            <div>
                                <FormLabel htmlFor="name" required
                                           className="text-sm xs:text-base">{contactSettings.formFields.name.label}</FormLabel>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={contactSettings.formFields.name.placeholder}
                                    required
                                    aria-required="true"
                                    variant="filled"
                                    size="md"
                                    className="w-full text-sm xs:text-base touch-manipulation"
                                />
                            </div>
                            <div>
                                <FormLabel htmlFor="email" required
                                           className="text-sm xs:text-base">{contactSettings.formFields.email.label}</FormLabel>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={contactSettings.formFields.email.placeholder}
                                    required
                                    aria-required="true"
                                    variant="filled"
                                    size="md"
                                    className="w-full text-sm xs:text-base touch-manipulation"
                                />
                            </div>
                            <div>
                                <FormLabel htmlFor="message" required
                                           className="text-sm xs:text-base">{contactSettings.formFields.message.label}</FormLabel>
                                <Textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder={contactSettings.formFields.message.placeholder}
                                    required
                                    aria-required="true"
                                    variant="filled"
                                    className="w-full text-sm xs:text-base touch-manipulation min-h-[100px] xs:min-h-[120px]"
                                />
                            </div>
                            {/* Status Message Area */}
                            <div className="h-5 xs:h-6">
                                {status && (
                                    <p className={`text-sm xs:text-base ${
                                        status.includes('Thank you') ? 'text-green-600' :
                                            status.includes('Sending') ? 'text-primary-600' :
                                                'text-red-600'
                                    }`}>
                                        {status}
                                    </p>
                                )}
                            </div>
                            <div>
                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="md"
                                    className="w-full flex justify-center items-center gap-2 py-2.5 xs:py-3 text-sm xs:text-base touch-manipulation"
                                    disabled={status === 'Sending...'}
                                >
                                    {status === 'Sending...' ? 'Sending...' : contactSettings.submitButton}
                                    {status !== 'Sending...' && <Send size={16} className="xs:w-5 xs:h-5"/>}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
