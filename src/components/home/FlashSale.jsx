import React, { useState, useEffect } from 'react';
import ProductCard from '../product/ProductCard';

const FlashSale = ({ products }) => {
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
        <section className="mt-6">
            <h2 className="text-[20px] font-medium mb-4 text-[#424242]">Flash Sale</h2>
            <div className="bg-white rounded-sm shadow-sm overflow-hidden border border-gray-100">
                <div className="px-4 py-3 flex justify-between items-center border-b border-gray-50">
                    <div className="flex items-center gap-10">
                        <span className="text-daraz-orange text-[14px] font-medium border-b-2 border-daraz-orange pb-3 -mb-3">On Sale Now</span>
                        <div className="flex items-center gap-3">
                            <span className="text-[14px] text-gray-800 font-medium whitespace-nowrap">Ending in</span>
                            <div className="flex gap-2 items-center">
                                <span className="bg-[#f57224] text-white w-7 h-8 flex items-center justify-center rounded-sm font-bold text-[15px]">
                                    {formatTime(timeLeft.h)}
                                </span>
                                <span className="text-[#f57224] font-bold">:</span>
                                <span className="bg-[#f57224] text-white w-7 h-8 flex items-center justify-center rounded-sm font-bold text-[15px]">
                                    {formatTime(timeLeft.m)}
                                </span>
                                <span className="text-[#f57224] font-bold">:</span>
                                <span className="bg-[#f57224] text-white w-7 h-8 flex items-center justify-center rounded-sm font-bold text-[15px]">
                                    {formatTime(timeLeft.s)}
                                </span>
                            </div>
                        </div>
                    </div>
                    <button className="text-daraz-orange border border-daraz-orange px-3 py-1 text-[14px] font-bold hover:bg-orange-50 transition-colors uppercase">
                        SHOP MORE
                    </button>
                </div>

                <div className="p-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                    {products.slice(0, 6).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FlashSale;
