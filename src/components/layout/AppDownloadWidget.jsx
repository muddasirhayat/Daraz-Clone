import React from 'react';
import { Star, Truck, Tag } from 'lucide-react';
import logo from '../../assets/Images/daraz_brand_logo_white_1769870721373.png';

const AppDownloadWidget = () => {
    return (
        <div className="sticky top-20 bg-white rounded shadow-md overflow-hidden w-full">
            {/* Header */}
            <div className="bg-white px-3 py-1.5 flex items-center gap-2 border-b border-gray-100">
                <div className="w-5 h-5 bg-[#f57224] rounded flex items-center justify-center flex-shrink-0 p-1">
                    <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wide">Try Daraz App</span>
            </div>

            {/* Orange Card Section */}
            <div className="mx-2 my-2 bg-gradient-to-br from-[#f85606] to-[#f57224] rounded-lg p-2 space-y-1.5">
                {/* Rating */}
                <div className="flex items-center gap-1">
                    <Star size={10} fill="white" stroke="white" />
                    <span className="text-white text-[10px] font-bold">4.8 Rated</span>
                </div>

                {/* Download Text */}
                <p className="text-white text-[11px] font-bold leading-tight italic">
                    Download the App now
                </p>

                {/* Features */}
                <div className="space-y-1 pt-0.5">
                    {/* Free Shipping */}
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-white/90 rounded flex items-center justify-center flex-shrink-0">
                            <Truck size={10} className="text-[#00bcd4]" strokeWidth={2.5} />
                        </div>
                        <span className="text-white text-[10px] font-bold">Free Shipping</span>
                    </div>

                    {/* Exclusive Vouchers */}
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-white/90 rounded flex items-center justify-center flex-shrink-0">
                            <Tag size={10} className="text-[#ff4081]" strokeWidth={2.5} />
                        </div>
                        <span className="text-white text-[10px] font-bold">Exclusive Vouchers</span>
                    </div>
                </div>
            </div>

            {/* QR Code */}
            <div className="px-2 pb-1.5">
                <div className="bg-white border-2 border-gray-200 rounded p-1">
                    <img
                        src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://www.daraz.pk/mobile-apps/"
                        alt="QR Code"
                        className="w-full h-auto max-w-[100px] mx-auto"
                    />
                </div>
            </div>

            {/* App Store Buttons */}
            <div className="px-2 pb-2 space-y-1">
                <a
                    href="#"
                    className="flex items-center justify-center gap-1 px-3 py-1.5 bg-black text-white rounded hover:bg-gray-800 transition-colors"
                >
                    <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="white">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <span className="text-[9px] font-bold uppercase tracking-wide">App Store</span>
                </a>

                <a
                    href="#"
                    className="flex items-center justify-center gap-1 px-3 py-1.5 bg-black text-white rounded hover:bg-gray-800 transition-colors"
                >
                    <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="white">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5Z" />
                        <path d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z" />
                        <path d="M14.54,11.15L6.05,2.66L16.81,8.88L14.54,11.15Z" />
                    </svg>
                    <span className="text-[9px] font-bold uppercase tracking-wide">Google Play</span>
                </a>
            </div>
        </div>
    );
};

export default AppDownloadWidget;
