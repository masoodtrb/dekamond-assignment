'use client';

import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { User, AuthContextType } from '@/types/auth';

// action types
type AuthAction =
    | { type: 'SET_LOADING'; payload: boolean }
    | { type: 'SET_USER'; payload: User | null }
    | { type: 'LOGIN'; payload: User }
    | { type: 'LOGOUT' }
    | { type: 'INITIALIZE' };

// state
interface AuthState {
    user: User | null;
    isLoading: boolean;
}

// reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload,
            };

        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
            };

        case 'LOGIN':
            localStorage.setItem('user', JSON.stringify(action.payload));
            return {
                ...state,
                user: action.payload,
                isLoading: false,
            };

        case 'LOGOUT':
            localStorage.removeItem('user');
            return {
                ...state,
                user: null,
            };

        case 'INITIALIZE':
            return {
                ...state,
                isLoading: false,
            };

        default:
            return state;
    }
};

// initial state
const initialState: AuthState = {
    user: null,
    isLoading: true,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        // Check for existing user in localStorage on mount
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                const user = JSON.parse(storedUser);
                dispatch({ type: 'SET_USER', payload: user });
            } catch (error) {
                console.error('Error parsing stored user:', error);
                localStorage.removeItem('user');
            }
        }
        dispatch({ type: 'INITIALIZE' });
    }, []);

    const login = (userData: User) => {
        dispatch({ type: 'LOGIN', payload: userData });
    };

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    const value: AuthContextType = {
        user: state.user,
        login,
        logout,
        isLoading: state.isLoading,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}; 