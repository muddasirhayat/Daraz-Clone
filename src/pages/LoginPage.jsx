import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('daraz_users') || '[]');
        const user = users.find(u => u.email === formData.email && u.password === formData.password);

        if (user) {
            localStorage.setItem('daraz_logged_in_user', JSON.stringify(user));
            navigate('/');
            window.location.reload(); // To update Navbar state
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="bg-[#eff0f5] min-h-screen py-6 md:py-10">
            <div className="container max-w-[900px] px-4 md:px-0">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
                    <h1 className="text-lg md:text-[22px] text-[#424242] font-medium">Welcome to Daraz! Please login.</h1>
                    <p className="text-[12px] md:text-[13px] text-[#757575]">
                        New member? <Link to="/signup" className="text-[#1a9cb7] hover:underline">Register</Link> here.
                    </p>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm flex flex-col md:flex-row gap-8 md:gap-10">
                    <div className="flex-grow">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-[12px] md:text-[13px] text-[#424242] mb-1.5 font-medium">Phone Number or Email*</label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Please enter your Phone Number or Email"
                                    className="w-full border border-gray-300 rounded-sm px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#f57224] bg-white transition-all"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-[12px] md:text-[13px] text-[#424242] mb-1.5 font-medium">Password*</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Please enter your password"
                                    className="w-full border border-gray-300 rounded-sm px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#f57224] bg-white transition-all"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="text-right mt-2">
                                    <a href="#" className="text-[12px] text-[#1a9cb7] hover:underline">Forgot Password?</a>
                                </div>
                            </div>
                            {error && <p className="text-red-500 text-[12px] font-medium">{error}</p>}
                            <button
                                type="submit"
                                className="w-full bg-[#f57224] text-white py-3.5 rounded-sm font-bold hover:bg-[#d35400] transition-colors uppercase text-[14px] tracking-wide shadow-sm"
                            >
                                LOGIN
                            </button>
                        </form>
                    </div>

                    <div className="w-full md:w-[280px] flex flex-col gap-3 pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-gray-100 md:pl-10">
                        <span className="text-[12px] text-gray-400 text-center mb-1 md:hidden">Or login with</span>
                        <button className="w-full bg-[#3b5998] text-white py-3 rounded-sm text-[13px] font-bold flex items-center justify-center gap-3 hover:brightness-110 transition-all uppercase tracking-wide">
                            <span className="text-lg font-black">f</span> Facebook
                        </button>
                        <button className="w-full bg-[#d34836] text-white py-3 rounded-sm text-[13px] font-bold flex items-center justify-center gap-3 hover:brightness-110 transition-all uppercase tracking-wide">
                            <span className="text-lg font-black">G</span> Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
