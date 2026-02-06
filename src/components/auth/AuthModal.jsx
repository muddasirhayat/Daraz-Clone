import React, { useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';

const AuthModal = ({ isOpen, onClose, initialMode = 'login' }) => {
    const [mode, setMode] = useState(initialMode); // 'login' or 'signup'
    const [loginMethod, setLoginMethod] = useState('password'); // 'password' or 'phone'
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError(''); // Clear error on input change
    };

    const handleSignup = (e) => {
        e.preventDefault();

        // Get existing users from localStorage
        const existingUsers = JSON.parse(localStorage.getItem('daraz_users') || '[]');

        // Check if email already exists
        const emailExists = existingUsers.some(user => user.email === formData.email);
        if (emailExists) {
            setError('Email already registered. Please login.');
            return;
        }

        // Check if phone already exists
        const phoneExists = existingUsers.some(user => user.phone === formData.phone);
        if (phoneExists) {
            setError('Phone number already registered. Please login.');
            return;
        }

        // Create new user object
        const newUser = {
            id: Date.now(),
            fullName: formData.fullName,
            email: formData.email,
            password: formData.password, // In production, this should be hashed
            phone: formData.phone,
            createdAt: new Date().toISOString()
        };

        // Add new user to users array
        existingUsers.push(newUser);
        localStorage.setItem('daraz_users', JSON.stringify(existingUsers));

        // Set as logged in user
        const loggedInUser = {
            id: newUser.id,
            fullName: newUser.fullName,
            email: newUser.email,
            phone: newUser.phone
        };
        localStorage.setItem('daraz_logged_in_user', JSON.stringify(loggedInUser));

        // Close modal and reload
        onClose();
        window.location.reload();
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // Get existing users from localStorage
        const existingUsers = JSON.parse(localStorage.getItem('daraz_users') || '[]');

        // Find user by email or phone
        const user = existingUsers.find(u =>
            (u.email === formData.email || u.phone === formData.email) &&
            u.password === formData.password
        );

        if (!user) {
            setError('Invalid email/phone or password. Please try again.');
            return;
        }

        // Set as logged in user
        const loggedInUser = {
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            phone: user.phone
        };
        localStorage.setItem('daraz_logged_in_user', JSON.stringify(loggedInUser));

        // Close modal and reload
        onClose();
        window.location.reload();
    };

    const handleSubmit = (e) => {
        if (mode === 'signup') {
            handleSignup(e);
        } else {
            handleLogin(e);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-md relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                >
                    <X size={24} />
                </button>

                {mode === 'login' ? (
                    <>
                        {/* Login Tabs */}
                        <div className="flex border-b border-gray-200">
                            <button
                                onClick={() => setLoginMethod('password')}
                                className={`flex-1 py-4 text-sm font-medium transition-colors ${loginMethod === 'password'
                                        ? 'text-gray-800 border-b-2 border-[#f85606]'
                                        : 'text-gray-400'
                                    }`}
                            >
                                Password
                            </button>
                            <button
                                onClick={() => setLoginMethod('phone')}
                                className={`flex-1 py-4 text-sm font-medium transition-colors ${loginMethod === 'phone'
                                        ? 'text-gray-800 border-b-2 border-[#f85606]'
                                        : 'text-gray-400'
                                    }`}
                            >
                                Phone Number
                            </button>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded text-sm">
                                    {error}
                                </div>
                            )}

                            <div>
                                <input
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#f85606] focus:border-[#f85606]"
                                    placeholder="Please enter your Phone or Email"
                                />
                            </div>

                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#f85606] focus:border-[#f85606]"
                                    placeholder="Please enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>

                            <div className="text-right">
                                <a href="#" className="text-xs text-gray-400 hover:text-[#f85606]">
                                    Forgot password?
                                </a>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#f85606] text-white py-3 rounded font-medium hover:bg-[#e04e05] transition-colors uppercase text-sm tracking-wide"
                            >
                                Login
                            </button>

                            <div className="text-center text-sm text-gray-500">
                                Don't have an account?{' '}
                                <button
                                    type="button"
                                    onClick={() => {
                                        setMode('signup');
                                        setError('');
                                        setFormData({ fullName: '', email: '', password: '', phone: '' });
                                    }}
                                    className="text-[#1e88e5] hover:underline font-medium"
                                >
                                    Sign up
                                </button>
                            </div>

                            {/* Social Login */}
                            <div className="pt-4">
                                <p className="text-center text-xs text-gray-400 mb-3">Or, login with</p>
                                <div className="flex gap-3 justify-center">
                                    <button
                                        type="button"
                                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                        </svg>
                                        <span className="text-sm text-gray-600">Google</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                        <span className="text-sm text-gray-600">Facebook</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </>
                ) : (
                    <>
                        {/* Signup Header */}
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-xl font-bold text-gray-800">Create Account</h2>
                            <p className="text-sm text-gray-500 mt-1">Sign up to get started</p>
                        </div>

                        {/* Signup Form */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded text-sm">
                                    {error}
                                </div>
                            )}

                            <div>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#f85606] focus:border-[#f85606]"
                                    placeholder="Full Name"
                                />
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#f85606] focus:border-[#f85606]"
                                    placeholder="Phone Number"
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#f85606] focus:border-[#f85606]"
                                    placeholder="Email Address"
                                />
                            </div>

                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    minLength={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#f85606] focus:border-[#f85606]"
                                    placeholder="Password (min 6 characters)"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#f85606] text-white py-3 rounded font-medium hover:bg-[#e04e05] transition-colors uppercase text-sm tracking-wide"
                            >
                                Sign Up
                            </button>

                            <div className="text-center text-sm text-gray-500">
                                Already have an account?{' '}
                                <button
                                    type="button"
                                    onClick={() => {
                                        setMode('login');
                                        setError('');
                                        setFormData({ fullName: '', email: '', password: '', phone: '' });
                                    }}
                                    className="text-[#1e88e5] hover:underline font-medium"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default AuthModal;
