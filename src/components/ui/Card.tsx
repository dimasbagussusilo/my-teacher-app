import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variant?: 'default' | 'elevated' | 'bordered' | 'flat';
    hover?: boolean;
}

const Card: React.FC<CardProps> = ({ 
    children, 
    className = '', 
    variant = 'default',
    hover = false,
    ...props 
}) => {
    // Base classes for all cards
    const baseClasses = "rounded-xl overflow-hidden";

    // Variant-specific classes
    const variantClasses = {
        default: "bg-white border border-gray-200 shadow-sm",
        elevated: "bg-white border-none shadow-soft",
        bordered: "bg-white border-2 border-gray-200",
        flat: "bg-gray-50 border border-gray-100",
    };

    // Hover effect classes
    const hoverClasses = hover ? "transition-all duration-300 hover:shadow-elegant hover:-translate-y-1" : "";

    return (
        <div 
            className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`} 
            {...props}
        >
            {children}
        </div>
    );
};

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '', ...props }) => (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
        {children}
    </div>
);

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const CardTitle: React.FC<CardTitleProps> = ({ 
    children, 
    className = '', 
    as: Component = 'h3', 
    ...props 
}) => (
    <Component 
        className={`text-2xl font-semibold leading-none tracking-tight text-gray-900 ${className}`} 
        {...props}
    >
        {children}
    </Component>
);

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}

const CardDescription: React.FC<CardDescriptionProps> = ({ children, className = '', ...props }) => (
    <p className={`text-sm text-gray-500 ${className}`} {...props}>
        {children}
    </p>
);

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({ children, className = '', ...props }) => (
    <div className={`p-6 pt-0 ${className}`} {...props}>
        {children}
    </div>
);

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const CardFooter: React.FC<CardFooterProps> = ({ children, className = '', ...props }) => (
    <div className={`flex items-center p-6 pt-0 ${className}`} {...props}>
        {children}
    </div>
);

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
