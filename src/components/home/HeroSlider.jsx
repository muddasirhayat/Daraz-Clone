import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import heroRamadan from '../../assets/Images/hero_banner_ramadan_bazaar_1769870798355.png';
import heroTech from '../../assets/Images/hero_banner_tech_sale_1769870745352.png';
import heroFashion from '../../assets/Images/hero_banner_fashion_sale_1769870771319.png';

const slides = [heroRamadan, heroTech, heroFashion];

const categories = [
    "Women's Fashion", "Health & Beauty", "Men's Fashion", "Watches & Accessories",
    "Electronic Devices", "TV & Home Appliances", "Electronic Accessories",
    "Groceries & Pets", "Babies & Toys", "Home & Lifestyle", "Sports & Outdoor",
    "Motors, Tools & DIY"
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex gap-4 mt-4 h-[344px]">
            <div className="flex-grow bg-white rounded-sm overflow-hidden flex shadow-sm min-h-0">
                <div className="hidden lg:block w-52 border-r border-gray-100 py-1.5 flex-shrink-0">
                    <ul className="h-full flex flex-col justify-between">
                        {categories.map((cat, i) => (
                            <li key={i} className="px-3 py-1 text-[13px] text-gray-700 hover:text-daraz-orange hover:bg-gray-50 cursor-pointer flex justify-between items-center transition-colors group">
                                <span className="truncate">{cat}</span>
                                <ChevronRight size={14} className="text-gray-300 group-hover:text-daraz-orange transition-colors" />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex-grow relative group overflow-hidden bg-gray-50">
                    {slides.map((slide, i) => (
                        <div
                            key={i}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === current ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <img
                                src={slide}
                                alt={`Banner ${i}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}

                    <button
                        onClick={() => setCurrent(prev => (prev - 1 + slides.length) % slides.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/10 hover:bg-black/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => setCurrent(prev => (prev + 1) % slides.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/10 hover:bg-black/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    >
                        <ChevronRight size={20} />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-6 h-0.5 transition-all ${i === current ? 'bg-daraz-orange' : 'bg-white/60'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="hidden xl:block w-48 rounded-sm overflow-hidden flex flex-col shadow-sm border border-gray-100">
                <div className="bg-white p-3 flex-grow flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-daraz-orange flex items-center justify-center text-white">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                        </div>
                        <span className="text-[12px] font-bold text-gray-800 tracking-tight uppercase">TRY DARAZ APP</span>
                    </div>

                    <div className="bg-gradient-to-br from-[#f57224] to-[#ff8f4d] rounded-lg p-3 text-white mb-3 shadow-inner">
                        <div className="flex items-center gap-1 mb-1">
                            <div className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full flex items-center gap-1 font-bold">
                                <span className="text-yellow-300">★</span> 4.8 Rated
                            </div>
                        </div>
                        <div className="text-[11px] font-bold mb-3 italic">Download the App now</div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center text-[10px]">🚚</div>
                                <span className="text-[10px] font-bold">Free Shipping</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center text-[10px]">🎫</div>
                                <span className="text-[10px] font-bold">Exclusive Vouchers</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto flex gap-2 items-center">
                        <div className="w-16 h-16 bg-white border border-gray-200 p-1 rounded flex items-center justify-center">
                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=https://www.daraz.pk" className="w-full h-full" alt="QR Code" />
                        </div>
                        <div className="flex flex-col gap-1.5 flex-grow">
                            <div className="h-6 bg-black rounded flex items-center justify-center text-[8px] text-white font-bold cursor-pointer hover:bg-gray-800 transition-colors uppercase">App Store</div>
                            <div className="h-6 bg-black rounded flex items-center justify-center text-[8px] text-white font-bold cursor-pointer hover:bg-gray-800 transition-colors uppercase">Google Play</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSlider;
