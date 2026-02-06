import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../product/ProductCard';

const FlashSale = ({ products }) => {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState({ h: 12, m: 45, s: 30 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { h, m, s } = prev;
                if (s > 0) s--;
                else {
                    s = 59;
                    if (m > 0) m--;
                    else {
                        m = 59;
                        if (h > 0) h--;
                    }
                }
                return { h, m, s };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (t) => t.toString().padStart(2, '0');

    return (
        <section className="mt-4">
            <div className="bg-white rounded-sm shadow-sm overflow-hidden">
                <div className="px-3 md:px-5 py-3 md:py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-gray-100">
                    <div className="flex flex-wrap items-center gap-3 md:gap-8">
                        <span className="text-[#f85606] text-[14px] md:text-[15px] font-medium">On Sale Now</span>
                        <div className="flex items-center gap-2">
                            <span className="text-[12px] md:text-[13px] text-gray-600">Ending in</span>
                            <div className="flex gap-1 items-center">
                                <span className="bg-[#f85606] text-white w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded font-bold text-[12px] md:text-[14px]">
                                    {formatTime(timeLeft.h)}
                                </span>
                                <span className="text-[#f85606] font-bold text-[12px] md:text-[14px]">:</span>
                                <span className="bg-[#f85606] text-white w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded font-bold text-[12px] md:text-[14px]">
                                    {formatTime(timeLeft.m)}
                                </span>
                                <span className="text-[#f85606] font-bold text-[12px] md:text-[14px]">:</span>
                                <span className="bg-[#f85606] text-white w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded font-bold text-[12px] md:text-[14px]">
                                    {formatTime(timeLeft.s)}
                                </span>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate('/search')}
                        className="text-[#f85606] border font-bold border-[#f85606] px-4 md:px-6 py-1 md:py-1.5 text-[10px] md:text-[11px] hover:bg-orange-50 transition-colors uppercase tracking-wide w-full sm:w-auto text-center"
                    >
                        SHOP ALL PRODUCTS
                    </button>
                </div>

                <div className="p-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                    {products.slice(0, 6).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FlashSale;
