'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Button from '@/components/ui/Button';
import styles from './page.module.scss';

export default function DashboardPage() {
    const router = useRouter();
    const { user, logout, isLoading } = useAuth();

    useEffect(() => {
        // Redirect to auth page if user is not logged in
        if (!isLoading && !user) {
            router.push('/auth');
        }
    }, [user, isLoading, router]);

    const handleLogout = () => {
        logout();
        router.push('/auth');
    };

    // Show loading state
    if (isLoading) {
        return (
            <div className={styles.container}>
                <div className={styles.loading}>
                    <div className={styles.spinner}></div>
                    <p>در حال بارگذاری...</p>
                </div>
            </div>
        );
    }

    // Don't render if user is not authenticated
    if (!user) {
        return null;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.welcomeSection}>
                    <h1 className={styles.title}>خوش آمدید به داشبورد</h1>
                    <p className={styles.subtitle}>
                        سلام {user.name.first} {user.name.last}!
                    </p>
                </div>

                <div className={styles.userInfo}>
                    <div className={styles.avatar}>
                        <img
                            src={user.picture.large}
                            alt={`${user.name.first} ${user.name.last}`}
                            className={styles.avatarImage}
                        />
                    </div>

                    <div className={styles.userDetails}>
                        <h3 className={styles.userName}>
                            {user.name.first} {user.name.last}
                        </h3>
                        <p className={styles.userEmail}>{user.email}</p>
                        <p className={styles.userLocation}>
                            {user.location.city}, {user.location.country}
                        </p>
                    </div>
                </div>

                <Button
                    onClick={handleLogout}
                    variant="outline"
                    size="medium"
                    className={styles.logoutButton}
                >
                    خروج
                </Button>
            </div>

            <div className={styles.content}>
                <div className={styles.card}>
                    <h2 className={styles.cardTitle}>اطلاعات کاربر</h2>
                    <div className={styles.infoGrid}>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>نام:</span>
                            <span className={styles.infoValue}>{user.name.first}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>نام خانوادگی:</span>
                            <span className={styles.infoValue}>{user.name.last}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>ایمیل:</span>
                            <span className={styles.infoValue}>{user.email}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>شماره تلفن:</span>
                            <span className={styles.infoValue}>{user.phone}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>شهر:</span>
                            <span className={styles.infoValue}>{user.location.city}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>کشور:</span>
                            <span className={styles.infoValue}>{user.location.country}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 