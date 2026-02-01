import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import FlashSale from '../components/home/FlashSale';
import ProductCard from '../components/product/ProductCard';
import productsData from '../data/products.json';
import campaignBanner from '../assets/Images/grand_ramadan_bazaar_banner_1769870208544.png';

const HomePage = () => {
    const flashSaleProducts = productsData.filter(p => p.discount > 40).slice(0, 6);
    const justForYouProducts = productsData.slice(0, 18);

    const categoriesList = [
        { name: 'Fashion', icon: <img src="https://img.icons8.com/color/96/dress.png" className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt="Fashion" /> },
        { name: 'Beauty', icon: <img src="https://img.icons8.com/color/96/lipstick.png" className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt="Beauty" /> },
        { name: 'Electronics', icon: <img src="https://img.icons8.com/color/96/smartphone.png" className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt="Electronics" /> },
        { name: 'Home', icon: <img src="https://img.icons8.com/color/96/sofa.png" className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt="Home" /> },
        { name: 'Appliances', icon: <img src="https://img.icons8.com/color/96/refrigerator.png" className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt="Appliances" /> },
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
        <div className="bg-[#f5f5f5] pb-10">
            <div className="container py-2">
                <HeroSlider />

                <div className="mt-4 rounded-sm overflow-hidden shadow-sm cursor-pointer hover:opacity-95 transition-opacity">
                    <img
                        src={campaignBanner}
                        alt="Grand Ramadan Bazaar"
                        className="w-full h-[80px] md:h-[120px] lg:h-[140px] object-cover block"
                    />
                </div>

                <div className="mt-6">
                    <FlashSale products={flashSaleProducts} />
                </div>

                <div className="mt-8">
                    <h2 className="text-[20px] font-medium mb-4 text-[#424242]">Categories</h2>
                    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm">
                        {categoriesList.slice(0, 16).map((cat, i) => (
                            <div key={i} className="flex flex-col items-center justify-center p-4 border-r border-b border-gray-50 hover:bg-gray-50 bg-white transition-all cursor-pointer group text-center h-[130px]">
                                <div className="w-16 h-16 mb-2 overflow-hidden">
                                    {cat.icon}
                                </div>
                                <span className="text-[14px] text-gray-700 group-hover:text-daraz-orange truncate w-full px-1">{cat.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8">
                    <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-3">
                        <h2 className="text-[20px] font-medium text-[#424242]">Just For You</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                        {justForYouProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div className="flex justify-center mt-12 mb-8">
                        <button className="border-2 border-[#1a9cb7] text-[#1a9cb7] px-20 py-3 font-medium hover:bg-[#1a9cb7] hover:text-white transition-all uppercase text-[15px]">
                            Load More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
