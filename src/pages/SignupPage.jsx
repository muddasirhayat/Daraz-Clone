import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        fullName: '',
        gender: '',
        birthday: { day: '', month: '', year: '' }
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('daraz_users') || '[]');

        if (users.find(u => u.email === formData.email)) {
            setError('Email already exists');
            return;
        }

        users.push(formData);
        localStorage.setItem('daraz_users', JSON.stringify(users));
        navigate('/login');
    };

    return (
        <div className="bg-[#eff0f5] min-h-screen py-6 md:py-10">
            <div className="container max-w-[900px] px-4 md:px-0">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
                    <h1 className="text-lg md:text-[22px] text-[#424242] font-medium">Create your Daraz Account</h1>
                    <p className="text-[12px] md:text-[13px] text-[#757575]">
                        Already a member? <Link to="/login" className="text-[#1a9cb7] hover:underline">Login</Link> here.
                    </p>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm">
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-6 md:gap-10">
                        <div className="flex-grow space-y-5">
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
                                    placeholder="Minimum 6 characters, number and letter"
                                    className="w-full border border-gray-300 rounded-sm px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#f57224] bg-white transition-all"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-[400px] space-y-5 border-t md:border-t-0 md:border-l pt-6 md:pt-0 md:pl-10 border-gray-100">
                            <div>
                                <label className="block text-[12px] md:text-[13px] text-[#424242] mb-1.5 font-medium">Full name*</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Enter your first and last name"
                                    className="w-full border border-gray-300 rounded-sm px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#f57224] bg-white transition-all"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <span className="text-[12px] md:text-[13px] text-[#424242] font-medium">Gender:</span>
                                <div className="flex gap-6 items-center">
                                    <label className="flex items-center gap-2 text-[13px] cursor-pointer">
                                        <input type="radio" name="gender" value="male" className="accent-[#f57224]" onChange={handleChange} />
                                        <span>Male</span>
                                    </label>
                                    <label className="flex items-center gap-2 text-[13px] cursor-pointer">
                                        <input type="radio" name="gender" value="female" className="accent-[#f57224]" onChange={handleChange} />
                                        <span>Female</span>
                                    </label>
                                </div>
                            </div>

                            {error && <p className="text-red-500 text-[12px] font-medium">{error}</p>}

                            <button
                                type="submit"
                                className="w-full bg-[#f57224] text-white py-3.5 rounded-sm font-bold hover:bg-[#d35400] transition-colors uppercase text-[14px] tracking-wide shadow-sm mt-2"
                            >
                                SIGN UP
                            </button>

                            <p className="text-[11px] md:text-[12px] text-gray-400 mt-4 leading-relaxed">
                                By clicking “SIGN UP”, I agree to Daraz's <a href="#" className="text-[#1a9cb7] hover:underline">Terms of Use</a> and <a href="#" className="text-[#1a9cb7] hover:underline">Privacy Policy</a>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
