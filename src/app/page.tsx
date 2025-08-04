'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function HomePage() {
    const router = useRouter();
    const { user, isLoading } = useAuth();

    useEffect(() => {
        if (!isLoading) {
            if (user) {
                // اگر کاربر لاگین کرده، به داشبورد هدایت شود
                router.push('/dashboard');
            } else {
                // اگر کاربر لاگین نکرده، به صفحه ورود هدایت شود
                router.push('/auth');
            }
        }
    }, [user, isLoading, router]);

    // نمایش loading state
    if (isLoading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                fontSize: '1.2rem',
                color: '#6b7280'
            }}>
                در حال بارگذاری...
            </div>
        );
    }

    return null;
} 