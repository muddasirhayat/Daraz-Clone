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
        <div className="bg-[#eff0f5] min-h-screen py-10">
            <div className="container max-w-[900px]">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-[22px] text-[#424242]">Create your Daraz Account</h1>
                    <p className="text-[13px] text-[#757575]">
                        Already member? <Link to="/login" className="text-[#1a9cb7] hover:underline">Login</Link> here.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-sm shadow-sm">
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-10">
                        <div className="flex-grow space-y-5">
                            <div>
                                <label className="block text-[13px] text-[#424242] mb-1">Phone Number or Email*</label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Please enter your Phone Number or Email"
                                    className="w-full border border-gray-300 rounded-sm px-3 py-2 text-[14px] focus:outline-none focus:border-[#f57224]"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-[13px] text-[#424242] mb-1">Password*</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Minimum 6 characters with a number and a letter"
                                    className="w-full border border-gray-300 rounded-sm px-3 py-2 text-[14px] focus:outline-none focus:border-[#f57224]"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-[400px] space-y-5 border-l md:pl-10 border-gray-100">
                            <div>
                                <label className="block text-[13px] text-[#424242] mb-1">Full name*</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Enter your first and last name"
                                    className="w-full border border-gray-300 rounded-sm px-3 py-2 text-[14px] focus:outline-none focus:border-[#f57224]"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex gap-4 items-center py-2">
                                <span className="text-[13px] text-[#424242]">Gender:</span>
                                <label className="flex items-center gap-2 text-[13px]">
                                    <input type="radio" name="gender" value="male" onChange={handleChange} /> Male
                                </label>
                                <label className="flex items-center gap-2 text-[13px]">
                                    <input type="radio" name="gender" value="female" onChange={handleChange} /> Female
                                </label>
                            </div>

                            {error && <p className="text-red-500 text-[12px]">{error}</p>}

                            <button
                                type="submit"
                                className="w-full bg-[#f57224] text-white py-3 rounded-sm font-medium hover:bg-[#d35400] transition-colors uppercase text-[15px] mt-4"
                            >
                                SIGN UP
                            </button>

                            <p className="text-[12px] text-gray-500 mt-4 leading-relaxed">
                                By clicking “SIGN UP”, I agree to Daraz's <a href="#" className="text-[#1a9cb7]">Terms of Use</a> and <a href="#" className="text-[#1a9cb7]">Privacy Policy</a>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
