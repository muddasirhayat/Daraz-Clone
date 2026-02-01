import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

import logo from '../../assets/Images/daraz_brand_logo_white_1769870721373.png';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { cartCount } = useCart();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('daraz_logged_in_user'));

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <nav className="bg-[#f57224] sticky top-0 z-50 shadow-md">
            <div className="container py-3 flex items-center gap-4 md:gap-12">
                <Link to="/" className="flex-shrink-0 flex items-center">
                    <img
                        src={logo}
                        alt="Daraz Logo"
                        className="h-7 md:h-10 object-contain"
                    />
                </Link>

                <form onSubmit={handleSearch} className="flex-grow flex max-w-[800px]">
                    <div className="relative w-full flex">
                        <input
                            type="text"
                            placeholder="Search in Daraz"
                            className="w-full bg-[#eff0f5] py-2.5 px-5 rounded-sm focus:outline-none text-[14px] text-gray-800 placeholder:text-gray-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="absolute right-0 top-0 bottom-0 w-12 bg-[#ffe1d2] text-[#f57224] flex items-center justify-center rounded-r-sm hover:bg-[#f57224] hover:text-white transition-all"
                        >
                            <Search size={20} strokeWidth={2.5} />
                        </button>
                    </div>
                </form>

                <div className="flex items-center gap-6">
                    <Link to={user ? "/profile" : "/login"} className="text-white hover:opacity-80 transition-opacity flex items-center gap-2 group">
                        <User size={28} strokeWidth={2} />
                        <span className="text-[13px] hidden xl:block font-medium">
                            {user ? user.fullName : "Login / Signup"}
                        </span>
                    </Link>

                    <Link to="/cart" className="relative p-1 flex items-center group">
                        <ShoppingCart className="text-white group-hover:scale-110 transition-transform" size={28} strokeWidth={2} />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-2 bg-[#f57224] text-white text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full border-2 border-[#f57224] font-bold px-1">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                    <div className="hidden lg:flex items-center gap-2 text-white cursor-pointer hover:opacity-80 transition-opacity">
                        <img src="https://img.alicdn.com/imgextra/i4/O1CN01S9n9cM1YpP5y5y5y5_!!6000000003110-2-tps-144-144.png" className="w-10 h-10 object-contain" alt="app" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
