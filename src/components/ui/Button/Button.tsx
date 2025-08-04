import React, { forwardRef } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    isLoading?: boolean;
    children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        variant = 'primary',
        size = 'medium',
        isLoading = false,
        children,
        className,
        disabled,
        ...props
    }, ref) => {
        const buttonClasses = [
            styles.button,
            styles[variant],
            styles[size],
            isLoading ? styles.loading : '',
            className || ''
        ].join(' ');

        return (
            <button
                ref={ref}
                className={buttonClasses}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading && (
                    <span className={styles.spinner}>
                        <svg className={styles.spinnerIcon} viewBox="0 0 24 24">
                            <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                                strokeLinecap="round"
                                strokeDasharray="31.416"
                                strokeDashoffset="31.416"
                            />
                        </svg>
                    </span>
                )}
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button; 