import React, { forwardRef } from 'react';
import styles from './Input.module.scss';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, helperText, className, ...props }, ref) => {
        return (
            <div className={styles.inputWrapper}>
                {label && (
                    <label className={styles.label}>
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={`${styles.input} ${error ? styles.error : ''} ${className || ''}`}
                    {...props}
                />
                {error && (
                    <span className={styles.errorText}>
                        {error}
                    </span>
                )}
                {helperText && !error && (
                    <span className={styles.helperText}>
                        {helperText}
                    </span>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input; 