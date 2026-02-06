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
        <div className="bg-white rounded-sm overflow-hidden flex shadow-sm h-[180px] sm:h-[240px] md:h-[300px] lg:h-[344px]">
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
                            className="w-full h-full object-cover sm:object-fill lg:object-cover"
                        />
                    </div>
                ))}

                <button
                    onClick={() => setCurrent(prev => (prev - 1 + slides.length) % slides.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/10 hover:bg-black/30 text-white p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                >
                    <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
                </button>
                <button
                    onClick={() => setCurrent(prev => (prev + 1) % slides.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/10 hover:bg-black/30 text-white p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                >
                    <ChevronRight size={16} className="sm:w-5 sm:h-5" />
                </button>

                <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5 z-10">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`w-4 sm:w-6 h-0.5 transition-all ${i === current ? 'bg-daraz-orange' : 'bg-white/60'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroSlider;
