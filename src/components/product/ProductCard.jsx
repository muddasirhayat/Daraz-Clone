import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { id, title, price, originalPrice, discount, rating, imageUrls, reviews } = product;

    return (
        <Link to={`/product/${id}`} className="bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow group flex flex-col overflow-hidden h-full border border-gray-100 hover:border-gray-300">
            <div className="relative overflow-hidden aspect-square flex-shrink-0">
                <img
                    src={imageUrls[0]}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80";
                    }}
                />
            </div>
            <div className="p-2 flex flex-col flex-grow">
                <h3 className="text-[12px] line-clamp-2 h-[34px] overflow-hidden text-gray-800 transition-colors leading-[1.3] mb-1 group-hover:text-daraz-orange">
                    {title}
                </h3>
                <div className="mt-1">
                    <div className="text-daraz-orange font-bold text-[18px]">
                        Rs. {price.toLocaleString()}
                    </div>
                    {discount > 0 ? (
                        <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="text-[12px] text-gray-400 line-through">Rs. {originalPrice.toLocaleString()}</span>
                            <span className="text-[12px] text-gray-800">-{discount}%</span>
                        </div>
                    ) : (
                        <div className="h-[18px]"></div>
                    )}
                    <div className="flex items-center gap-1 mt-1">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={10}
                                    className={i < Math.floor(rating) ? "text-[#faca51] fill-[#faca51]" : "text-gray-200 fill-gray-200"}
                                    strokeWidth={1}
                                />
                            ))}
                        </div>
                        <span className="text-[11px] text-gray-400">({reviews.length})</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
