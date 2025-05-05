import settings from '../settings.json';

// Type definitions for the settings
export interface Settings {
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  navbar: {
    logo: {
      text: string;
      subtext: string;
    };
    links: {
      text: string;
      href: string;
    }[];
  };
  hero: {
    heading: string;
    description: string;
    ctaButton: string;
    image: {
      src: string;
      alt: string;
    };
  };
  about: {
    heading: string;
    image: {
      src: string;
      alt: string;
    };
    paragraphs: string[];
    ctaButton: string;
  };
  services: {
    heading: string;
    items: {
      icon: string;
      title: string;
      description: string;
      price: string;
      features: string[];
      popular?: boolean;
    }[];
    ctaButton: string;
  };
  testimonials: {
    heading: string;
    items: {
      name: string;
      role: string;
      image: string;
      text: string;
      rating: number;
    }[];
  };
  contact: {
    heading: string;
    subheading: string;
    email: string;
    phone: string;
    location: string;
    availabilityHeading: string;
    availabilityText: string;
    hours: string[];
    formHeading: string;
    formFields: {
      name: {
        label: string;
        placeholder: string;
      };
      email: {
        label: string;
        placeholder: string;
      };
      subject: {
        label: string;
        placeholder: string;
      };
      message: {
        label: string;
        placeholder: string;
      };
    };
    submitButton: string;
    successMessage: string;
    errorMessage: string;
  };
  footer: {
    copyright: string;
    links: {
      text: string;
      href: string;
    }[];
    socialMedia: {
      platform: string;
      icon: string;
      href: string;
    }[];
  };
}

// Export the settings with type safety
export const getSettings = (): Settings => {
  return settings as Settings;
};

// Export individual sections for convenience
export const getSEO = () => getSettings().seo;
export const getNavbar = () => getSettings().navbar;
export const getHero = () => getSettings().hero;
export const getAbout = () => getSettings().about;
export const getServices = () => getSettings().services;
export const getTestimonials = () => getSettings().testimonials;
export const getContact = () => getSettings().contact;
export const getFooter = () => getSettings().footer;

export default getSettings;