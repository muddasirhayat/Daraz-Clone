import React, { useState } from 'react';
import { X } from 'lucide-react';

const SignupModal = ({ isOpen, onClose, onSwitchToLogin }) => {
    const [formData, setFormData] = useState({
        phoneNumber: '',
        countryCode: '+92',
        agreeToTerms: false
    });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.agreeToTerms) {
            alert('Please agree to the Terms of Use and Privacy Policy');
            return;
        }
        // Handle signup logic here
        console.log('Signup:', formData);
        // For demo purposes, just close the modal
        onClose();
    };

    const handleSocialSignup = (provider) => {
        console.log(`Signup with ${provider}`);
        // Handle social signup logic
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-[480px] mx-4 animate-fadeIn">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                >
                    <X size={24} />
                </button>

                {/* Header */}
                <div className="py-6 px-8 border-b border-gray-200">
                    <h2 className="text-[20px] font-medium text-gray-800 text-center">Sign up</h2>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8">
                    {/* Phone Number Input */}
                    <div className="mb-4">
                        <div className="flex gap-2">
                            {/* Country Code */}
                            <div className="w-[100px]">
                                <input
                                    type="text"
                                    value={formData.countryCode}
                                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#f57224] text-[14px] text-gray-700 text-center"
                                    placeholder="PK+92"
                                />
                            </div>

                            {/* Phone Number */}
                            <input
                                type="tel"
                                placeholder="Please enter your phone number"
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#f57224] text-[14px] text-gray-700 placeholder:text-gray-400"
                                value={formData.phoneNumber}
                                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                            />
                        </div>
                    </div>

                    {/* Terms Checkbox */}
                    <div className="mb-6">
                        <label className="flex items-start gap-2 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={formData.agreeToTerms}
                                onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                                className="mt-1 w-4 h-4 text-[#f57224] border-gray-300 rounded focus:ring-[#f57224] cursor-pointer"
                            />
                            <span className="text-[12px] text-gray-600 leading-relaxed">
                                By creating and/or using your account, you agree to our{' '}
                                <a href="#" className="text-[#1a9cb7] hover:underline">Terms of Use</a>
                                {' '}and{' '}
                                <a href="#" className="text-[#1a9cb7] hover:underline">Privacy Policy</a>.
                            </span>
                        </label>
                    </div>

                    {/* WhatsApp Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#f57224] text-white py-3 rounded-md font-medium text-[15px] hover:bg-[#e66314] transition-colors mb-4 flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Send code via Whatsapp
                    </button>

                    {/* Login Link */}
                    <div className="text-center mb-6">
                        <span className="text-[13px] text-gray-600">
                            Already have an account?{' '}
                            <button
                                type="button"
                                onClick={onSwitchToLogin}
                                className="text-[#1a9cb7] hover:underline font-medium"
                            >
                                Log in Now
                            </button>
                        </span>
                    </div>

                    {/* Divider */}
                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-white px-4 text-[13px] text-gray-500">Or, sign up with</span>
                        </div>
                    </div>

                    {/* Social Signup Buttons */}
                    <div className="flex gap-4">
                        <button
                            type="button"
                            onClick={() => handleSocialSignup('google')}
                            className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            <span className="text-[14px] text-gray-700">Google</span>
                        </button>

                        <button
                            type="button"
                            onClick={() => handleSocialSignup('facebook')}
                            className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            <span className="text-[14px] text-gray-700">Facebook</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupModal;
