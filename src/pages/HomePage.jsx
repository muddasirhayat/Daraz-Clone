import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSlider from '../components/home/HeroSlider';
import FlashSale from '../components/home/FlashSale';
import ProductCard from '../components/product/ProductCard';
import AppDownloadWidget from '../components/layout/AppDownloadWidget';
import productsData from '../data/products.json';
import campaignBanner from '../assets/Images/grand_ramadan_bazaar_banner_1769870208544.png.webp';

const HomePage = () => {
    const navigate = useNavigate();
    const flashSaleProducts = productsData.filter(p => p.discount > 40).slice(0, 6);
    const justForYouProducts = productsData.slice(0, 18);

    const handleCategoryClick = (categoryName) => {
        navigate(`/category/${categoryName.toLowerCase()}`);
    };

    const categoriesList = [
        { name: 'Fashion', icon: <img src="https://img.icons8.com/color/96/clothes.png" className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt="Fashion" /> },
        { name: 'Beauty', icon: <img src="https://img.icons8.com/color/96/lipstick.png" className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt="Beauty" /> },
        { name: 'Electronics', icon: <img src="https://img.icons8.com/color/96/smartphone.png" className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt="Electronics" /> },
        { name: 'Home', icon: <img src="https://img.icons8.com/color/96/sofa.png" className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt="Home" /> },
        { name: 'Appliances', icon: <img src="https://img.icons8.com/color/96/washing-machine.png" className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt="Appliances" /> },
        { name: 'Groceries', icon: <img src="https://img.icons8.com/color/96/shopping-basket.png" className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt="Groceries" /> },
        { name: 'Babies', icon: <img src="https://img.icons8.com/color/96/baby-bottle.png" className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt="Babies" /> },
        { name: 'Toys', icon: <img src="https://img.icons8.com/color/96/toy-car.png" className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt="Toys" /> },
        { name: 'Sports', icon: <img src="https://img.icons8.com/color/96/basketball.png" className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt="Sports" /> },
        { name: 'Motors', icon: <img src="https://img.icons8.com/color/96/car.png" className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt="Motors" /> },
        { name: 'Tools', icon: <img src="https://img.icons8.com/color/96/hammer.png" className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt="Tools" /> },
        { name: 'Luxury', icon: <img src="https://img.icons8.com/color/96/diamond.png" className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt="Luxury" /> },
        { name: 'Books', icon: <img src="https://img.icons8.com/color/96/book.png" className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt="Books" /> },
        { name: 'Deals', icon: <img src="https://img.icons8.com/color/96/discount.png" className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt="Deals" /> },
        { name: 'Mart', icon: <img src="https://img.icons8.com/color/96/small-business.png" className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt="Mart" /> },
        { name: 'Mall', icon: <img src="https://img.icons8.com/color/96/shopping-mall.png" className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt="Mall" /> }
    ];

    return (
        <div className="bg-[#eff0f5] min-h-screen">
            <div className="container py-2 md:py-3">
                {/* Hero Slider with App Download Widget Sidebar */}
                <div className="flex flex-col lg:flex-row gap-2">
                    <div className="flex-grow">
                        <HeroSlider />
                    </div>
                    {/* App Download Widget - visible on large screens */}
                    <div className="hidden xl:block w-[240px] flex-shrink-0">
                        <AppDownloadWidget />
                    </div>
                </div>

                {/* Campaign Banner - Make it responsive */}
                <div className="mt-2 rounded overflow-hidden cursor-pointer hover:opacity-95 transition-opacity">
                    <img
                        src={campaignBanner}
                        alt="Grand Ramadan Bazaar"
                        className="w-full h-auto object-cover min-h-[80px]"
                    />
                </div>

                {/* Flash Sale */}
                <FlashSale products={flashSaleProducts} />

                {/* Categories */}
                <div className="mt-4">
                    <h2 className="text-[14px] md:text-[16px] font-medium mb-2 md:mb-3 text-gray-800 px-1">Categories</h2>
                    <div className="bg-white rounded-sm shadow-sm p-3 md:p-4">
                        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4">
                            {categoriesList.slice(0, 16).map((cat, i) => (
                                <div
                                    key={i}
                                    onClick={() => handleCategoryClick(cat.name)}
                                    className="flex flex-col items-center justify-center cursor-pointer group"
                                >
                                    <div className="w-12 h-12 md:w-16 md:h-16 mb-2 flex items-center justify-center">
                                        {cat.icon}
                                    </div>
                                    <span className="text-[10px] md:text-[12px] text-gray-700 text-center group-hover:text-[#f85606] transition-colors line-clamp-1">{cat.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Just For You */}
                <div className="mt-4">
                    <h2 className="text-[14px] md:text-[16px] font-medium mb-2 md:mb-3 text-gray-800 px-1">Just For You</h2>
                    <div className="bg-white rounded-sm shadow-sm p-2 md:p-3">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
                            {justForYouProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>

                    {/* Load More Button */}
                    <div className="flex justify-center mt-6 mb-8 px-4">
                        <button className="w-full sm:w-auto border-2 border-[#f85606] text-[#f85606] px-16 py-3 md:py-2.5 font-bold hover:bg-[#f85606] hover:text-white transition-all uppercase text-[12px] tracking-widest bg-white">
                            Load More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
