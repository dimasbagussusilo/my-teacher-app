import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: 'default' | 'filled' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    error?: boolean;
    icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ 
    className = '', 
    variant = 'default',
    size = 'md',
    error = false,
    icon,
    ...props 
}, ref) => {
    // Base classes for all inputs
    const baseClasses = "w-full rounded-md transition-all duration-200 file:border-0 file:bg-transparent file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50";

    // Variant-specific classes
    const variantClasses = {
        default: "border border-gray-300 bg-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500",
        filled: "border border-transparent bg-gray-100 hover:bg-gray-200 focus:bg-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500",
        outline: "border-2 border-gray-300 bg-transparent focus:border-primary-500 focus:ring-0",
    };

    // Size-specific classes
    const sizeClasses = {
        sm: "h-8 px-2 py-1 text-xs",
        md: "h-10 px-3 py-2 text-sm",
        lg: "h-12 px-4 py-3 text-base",
    };

    // Error classes
    const errorClasses = error 
        ? "border-red-500 focus:border-red-500 focus:ring-red-500 placeholder:text-red-300" 
        : "";

    // Container classes for when an icon is present
    const containerClasses = icon ? "relative" : "";

    // Input classes when an icon is present
    const iconInputClasses = icon ? "pl-10" : "";

    return (
        <div className={containerClasses}>
            {icon && (
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    {icon}
                </div>
            )}
            <input
                ref={ref}
                className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${errorClasses} ${iconInputClasses} ${className}`}
                {...props}
            />
        </div>
    );
});

Input.displayName = 'Input';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    variant?: 'default' | 'filled' | 'outline';
    error?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ 
    className = '', 
    variant = 'default',
    error = false,
    ...props 
}, ref) => {
    // Base classes for all textareas
    const baseClasses = "w-full min-h-[80px] rounded-md transition-all duration-200 placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50";

    // Variant-specific classes
    const variantClasses = {
        default: "border border-gray-300 bg-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500",
        filled: "border border-transparent bg-gray-100 hover:bg-gray-200 focus:bg-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500",
        outline: "border-2 border-gray-300 bg-transparent focus:border-primary-500 focus:ring-0",
    };

    // Error classes
    const errorClasses = error 
        ? "border-red-500 focus:border-red-500 focus:ring-red-500 placeholder:text-red-300" 
        : "";

    return (
        <textarea
            ref={ref}
            className={`${baseClasses} ${variantClasses[variant]} ${errorClasses} px-3 py-2 ${className}`}
            {...props}
        />
    );
});

Textarea.displayName = 'Textarea';

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode;
    required?: boolean;
}

const FormLabel: React.FC<FormLabelProps> = ({ 
    children, 
    className = '', 
    required = false,
    ...props 
}) => (
    <label 
        className={`block text-sm font-medium text-gray-700 mb-1 ${className}`} 
        {...props}
    >
        {children}
        {required && <span className="ml-1 text-red-500">*</span>}
    </label>
);

interface FormErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}

const FormError: React.FC<FormErrorProps> = ({ 
    children, 
    className = '', 
    ...props 
}) => (
    <p 
        className={`mt-1 text-xs text-red-500 ${className}`} 
        {...props}
    >
        {children}
    </p>
);

export { Input, Textarea, FormLabel, FormError };
