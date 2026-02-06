import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import AuthModal from '../auth/AuthModal';

import logo from '../../assets/Images/daraz_brand_logo_white_1769870721373.png';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cartCount } = useCart();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('daraz_logged_in_user'));

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
            setIsMenuOpen(false);
        }
    };

    const handleAuthClick = () => {
        if (user) {
            navigate('/profile');
        } else {
            setShowAuthModal(true);
        }
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="bg-[#f85606] sticky top-0 z-50 shadow-sm">
                <div className="container py-3 md:py-4">
                    <div className="flex items-center justify-between gap-4 md:gap-6">
                        {/* Mobile Menu Button - Left */}
                        <button
                            onClick={toggleMenu}
                            className="text-white md:hidden hover:opacity-80 transition-opacity"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        {/* Logo */}
                        <Link to="/" className="flex-shrink-0">
                            <img
                                src={logo}
                                alt="Daraz"
                                className="h-7 md:h-10 object-contain"
                            />
                        </Link>

                        {/* Search Bar - Desktop and Tablet */}
                        <form onSubmit={handleSearch} className="hidden md:flex flex-grow max-w-[800px]">
                            <div className="relative flex w-full">
                                <input
                                    type="text"
                                    placeholder="Search in Daraz"
                                    className="w-full bg-white py-2 px-4 md:py-2.5 text-[14px] text-gray-700 placeholder:text-gray-400 focus:outline-none border-none"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="bg-[#ffeee6] hover:bg-[#ffd7c2] px-4 md:px-6 flex items-center justify-center transition-colors"
                                >
                                    <Search size={20} className="text-[#f85606]" strokeWidth={2.5} />
                                </button>
                            </div>
                        </form>

                        {/* Right Icons */}
                        <div className="flex items-center gap-4 md:gap-8">
                            {/* User Account */}
                            <button
                                onClick={handleAuthClick}
                                className="text-white hover:opacity-80 transition-opacity flex items-center gap-2"
                            >
                                <User size={24} strokeWidth={2} />
                                <span className="text-[13px] hidden lg:block font-normal">
                                    {user ? user.fullName.split(' ')[0] : "Account"}
                                </span>
                            </button>

                            {/* Cart */}
                            <Link to="/cart" className="relative flex items-center text-white hover:opacity-80 transition-opacity">
                                <ShoppingCart size={24} strokeWidth={2} />
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-white text-[#f85606] text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full font-bold px-1">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Search Bar - Visible only on mobile */}
                    <div className="mt-3 md:hidden">
                        <form onSubmit={handleSearch} className="w-full">
                            <div className="relative flex w-full">
                                <input
                                    type="text"
                                    placeholder="Search in Daraz"
                                    className="w-full bg-white py-2 px-4 text-[13px] text-gray-700 placeholder:text-gray-400 focus:outline-none border-none rounded-l-sm"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="bg-[#ffeee6] hover:bg-[#ffd7c2] px-4 flex items-center justify-center transition-colors rounded-r-sm"
                                >
                                    <Search size={18} className="text-[#f85606]" strokeWidth={2.5} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Mobile Drawer/Menu Overlay */}
                {isMenuOpen && (
                    <div className="fixed inset-0 top-[108px] z-40 md:hidden animate-in fade-in duration-200">
                        <div className="absolute inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />
                        <div className="absolute left-0 top-0 bottom-0 w-64 bg-white shadow-xl animate-in slide-in-from-left duration-200 overflow-y-auto">
                            <div className="p-4 border-b border-gray-100 flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[#f85606]">
                                    <User size={24} />
                                </div>
                                <div className="flex flex-col">
                                    {user ? (
                                        <>
                                            <span className="text-[14px] font-bold text-gray-800">{user.fullName}</span>
                                            <span className="text-[12px] text-gray-500">Welcome back!</span>
                                        </>
                                    ) : (
                                        <button
                                            onClick={() => { setShowAuthModal(true); setIsMenuOpen(false); }}
                                            className="text-[14px] font-bold text-[#f85606] text-left hover:underline"
                                        >
                                            Login / Signup
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="py-2">
                                <Link to="/" onClick={() => setIsMenuOpen(false)} className="px-5 py-3 flex items-center gap-3 text-gray-700 hover:bg-gray-50 text-[14px]">
                                    Home
                                </Link>
                                <Link to="/cart" onClick={() => setIsMenuOpen(false)} className="px-5 py-3 flex items-center gap-3 text-gray-700 hover:bg-gray-50 text-[14px]">
                                    Cart
                                </Link>
                                <div className="px-5 py-3 mt-2 border-t border-gray-100 uppercase text-[12px] font-bold text-gray-400">
                                    Categories
                                </div>
                                {["Electronics", "Fashion", "Home & Lifestyle", "Health & Beauty", "Babies & Toys", "Groceries"].map((cat) => (
                                    <Link
                                        key={cat}
                                        to={`/category/${cat.toLowerCase()}`}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="px-5 py-3 flex items-center gap-3 text-gray-700 hover:bg-gray-50 text-[14px]"
                                    >
                                        {cat}
                                    </Link>
                                ))}

                                {user && (
                                    <button
                                        onClick={() => {
                                            localStorage.removeItem('daraz_logged_in_user');
                                            setIsMenuOpen(false);
                                            window.location.reload();
                                        }}
                                        className="w-full text-left px-5 py-3 mt-4 border-t border-gray-100 text-red-500 font-medium text-[14px]"
                                    >
                                        Logout
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            <AuthModal
                isOpen={showAuthModal}
                onClose={() => setShowAuthModal(false)}
                initialMode="login"
            />
        </>
    );
};

export default Navbar;

