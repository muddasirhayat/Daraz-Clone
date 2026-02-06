import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { id, title, price, originalPrice, discount, rating, imageUrls, reviews } = product;

    return (
        <Link
            to={`/product/${id}`}
            className="bg-white rounded hover:shadow-lg transition-shadow group flex flex-col overflow-hidden h-full border border-transparent hover:border-gray-200"
        >
            {/* Product Image */}
            <div className="relative overflow-hidden aspect-square flex-shrink-0 bg-gray-50">
                <img
                    src={imageUrls[0]}
                    alt={title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80";
                    }}
                />
            </div>

            {/* Product Details */}
            <div className="p-2 flex flex-col flex-grow">
                {/* Title - Exactly 2 lines with ellipsis */}
                <h3 className="text-[12px] text-[#212121] leading-[1.4] mb-2 overflow-hidden"
                    style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        minHeight: '33px'
                    }}>
                    {title}
                </h3>

                {/* Price Section */}
                <div className="flex flex-col gap-1">
                    {/* Current Price */}
                    <div className="text-[#f85606] font-normal text-[16px]">
                        Rs. {price.toLocaleString()}
                    </div>

                    {/* Original Price & Discount */}
                    {discount > 0 && (
                        <div className="flex items-center gap-1.5">
                            <span className="text-[11px] text-[#9e9e9e] line-through">
                                Rs. {originalPrice.toLocaleString()}
                            </span>
                            <span className="text-[11px] text-[#9e9e9e]">
                                -{discount}%
                            </span>
                        </div>
                    )}
                </div>

                {/* Ratings & Reviews */}
                <div className="flex items-center gap-1 mt-2">
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={12}
                                className={i < Math.floor(rating) ? "text-[#faca51] fill-[#faca51]" : "text-gray-200 fill-gray-200"}
                                strokeWidth={0}
                            />
                        ))}
                    </div>
                    <span className="text-[11px] text-[#9e9e9e]">
                        ({reviews?.length || 0})
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
