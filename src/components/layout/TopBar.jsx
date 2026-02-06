import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthModal from '../auth/AuthModal';

const TopBar = () => {
    const user = JSON.parse(localStorage.getItem('daraz_logged_in_user'));
    const navigate = useNavigate();
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [authMode, setAuthMode] = useState('login');

    const handleLogout = () => {
        localStorage.removeItem('daraz_logged_in_user');
        navigate('/');
        window.location.reload();
    };

    const openAuthModal = (mode) => {
        setAuthMode(mode);
        setShowAuthModal(true);
    };

    return (
        <>
            <div className="bg-[#f85606] py-2 hidden md:block">
                <div className="container flex justify-end items-center text-[11px] gap-6 text-white">
                    <a href="#" className="hover:opacity-80 transition-opacity font-normal">
                        SAVE MORE ON APP
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity font-normal">
                        SELL ON DARAZ
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity font-normal">
                        HELP & SUPPORT
                    </a>

                    {user ? (
                        <>
                            <span className="font-medium truncate max-w-[100px]">
                                {user.fullName}
                            </span>
                            <button
                                onClick={handleLogout}
                                className="hover:opacity-80 transition-opacity font-normal"
                            >
                                LOGOUT
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => openAuthModal('login')}
                                className="hover:opacity-80 transition-opacity font-normal"
                            >
                                LOGIN
                            </button>
                            <span className="text-white/60">|</span>
                            <button
                                onClick={() => openAuthModal('signup')}
                                className="hover:opacity-80 transition-opacity font-normal"
                            >
                                SIGN UP
                            </button>
                        </>
                    )}

                    <span className="text-white/60">|</span>
                    <a href="#" className="hover:opacity-80 transition-opacity font-normal flex items-center gap-1">
                        <span>🌐</span>
                        <span>CHANGE LANGUAGE</span>
                    </a>
                </div>
            </div>

            <AuthModal
                isOpen={showAuthModal}
                onClose={() => setShowAuthModal(false)}
                initialMode={authMode}
            />
        </>
    );
};

export default TopBar;
