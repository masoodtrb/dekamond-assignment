'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { fetchRandomUser } from '@/services/api';
import { validateForm, ValidationErrors } from '@/utils/validation';
import { FormData } from '@/types/auth';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import styles from './page.module.scss';

export default function AuthPage() {
    const router = useRouter();
    const { login } = useAuth();
    const [formData, setFormData] = useState<FormData>({ phone: '' });
    const [errors, setErrors] = useState<ValidationErrors>({});
    const [isLoading, setIsLoading] = useState(false);
    const phoneInputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // For phone field, only allow numeric input and convert Persian numbers to English
        let processedValue = value;
        if (name === 'phone') {
            // Convert Persian numbers to English numbers
            const persianToEnglish = {
                '۰': '0', '۱': '1', '۲': '2', '۳': '3', '۴': '4',
                '۵': '5', '۶': '6', '۷': '7', '۸': '8', '۹': '9'
            };

            // Replace Persian numbers with English equivalents
            let convertedValue = value;
            Object.entries(persianToEnglish).forEach(([persian, english]) => {
                convertedValue = convertedValue.replace(new RegExp(persian, 'g'), english);
            });

            // Remove all non-numeric characters
            processedValue = convertedValue.replace(/[^0-9]/g, '');
        }

        setFormData(prev => ({ ...prev, [name]: processedValue }));

        // Clear error when user starts typing
        if (errors[name as keyof ValidationErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate form
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        setIsLoading(true);

        try {
            // Fetch random user from API
            const response = await fetchRandomUser();
            const user = response.results[0];

            // Login user
            login(user);

            // Redirect to dashboard
            router.push('/dashboard');
        } catch (error) {
            console.error('Login error:', error);
            setErrors({ phone: 'خطا در ورود به سیستم' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.authCard}>
                <div className={styles.header}>
                    <h1 className={styles.title}>ورود به سیستم</h1>
                    <p className={styles.subtitle}>
                        لطفاً شماره تلفن خود را وارد کنید
                    </p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <Input
                        ref={phoneInputRef}
                        type="tel"
                        name="phone"
                        label="شماره تلفن"
                        placeholder="مثال: 09123456789"
                        value={formData.phone}
                        onChange={handleInputChange}
                        error={errors.phone}
                        helperText="شماره تلفن ایران را وارد کنید"
                        required
                    />

                    <Button
                        type="submit"
                        variant="primary"
                        size="large"
                        isLoading={isLoading}
                        className={styles.submitButton}
                    >
                        ورود
                    </Button>
                </form>
            </div>
        </div>
    );
} 