import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';
import { Star, ShoppingCart, ShieldCheck, Truck, RefreshCw, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductDetailPage = () => {
    const { id } = useParams();
    const product = productsData.find(p => p.id === parseInt(id));
    const { addToCart } = useCart();

    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    if (!product) {
        return (
            <div className="container py-20 text-center">
                <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
                <Link to="/" className="text-daraz-orange hover:underline">Back to Homepage</Link>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
        alert('Product added to cart!');
    };

    return (
        <div className="container py-6">
            <div className="bg-white p-4 rounded-sm shadow-sm flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                    <div className="aspect-square border border-gray-100 mb-4 overflow-hidden rounded-sm">
                        <img
                            src={product.imageUrls[selectedImage]}
                            alt={product.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex gap-2">
                        {product.imageUrls.map((img, i) => (
                            <button
                                key={i}
                                className={`w-16 h-16 border-2 rounded-sm overflow-hidden ${selectedImage === i ? 'border-daraz-orange' : 'border-gray-200'}`}
                                onClick={() => setSelectedImage(i)}
                            >
                                <img src={img} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="lg:w-1/2">
                    <h1 className="text-xl font-medium text-gray-800 mb-2">{product.title}</h1>

                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1 text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                            ))}
                            <span className="text-xs text-blue-500 ml-1 hover:underline cursor-pointer">{product.reviews.length} Ratings</span>
                        </div>
                        <span className="text-gray-300">|</span>
                        <span className="text-xs text-gray-500">Brand: <span className="text-blue-500 hover:underline cursor-pointer">No Brand</span></span>
                    </div>

                    <div className="border-t border-b border-gray-100 py-4 mb-4">
                        <div className="text-daraz-orange text-3xl font-bold">Rs. {product.price.toLocaleString()}</div>
                        {product.discount > 0 && (
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-sm text-gray-400 line-through">Rs. {product.originalPrice.toLocaleString()}</span>
                                <span className="text-sm text-gray-800">-{product.discount}%</span>
                            </div>
                        )}
                    </div>

                    <div className="mb-6">
                        <div className="text-sm text-gray-500 mb-2">Quantity</div>
                        <div className="flex items-center gap-4">
                            <div className="flex border border-gray-200 rounded-sm">
                                <button
                                    className="px-3 py-1 bg-gray-50 hover:bg-gray-200 transition-colors border-r"
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                >
                                    <Minus size={16} />
                                </button>
                                <input
                                    type="text"
                                    className="w-12 text-center text-sm focus:outline-none"
                                    value={quantity}
                                    readOnly
                                />
                                <button
                                    className="px-3 py-1 bg-gray-50 hover:bg-gray-200 transition-colors border-l"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    <Plus size={16} />
                                </button>
                            </div>
                            <span className="text-xs text-gray-500">Only {product.stockLevel} items left</span>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button className="flex-grow bg-[#26abd4] text-white py-3 rounded-sm font-bold hover:brightness-95 transition-all">
                            Buy Now
                        </button>
                        <button
                            onClick={handleAddToCart}
                            className="flex-grow bg-daraz-orange text-white py-3 rounded-sm font-bold hover:brightness-95 transition-all flex items-center justify-center gap-2"
                        >
                            <ShoppingCart size={20} />
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="lg:w-1/4 bg-gray-50 p-4 rounded-sm border border-gray-100">
                    <div className="mb-6">
                        <h4 className="text-xs text-gray-500 uppercase font-bold mb-3 border-b pb-1">Delivery Options</h4>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <Truck size={20} className="text-gray-400 mt-1" />
                                <div>
                                    <div className="text-sm">Standard Delivery</div>
                                    <div className="text-xs text-gray-500">Get by 3-5 Feb</div>
                                </div>
                                <div className="ml-auto text-sm font-bold">Rs. 99</div>
                            </div>
                            <div className="flex gap-3">
                                <RefreshCw size={20} className="text-gray-400 mt-1" />
                                <div>
                                    <div className="text-sm">7 Days Returns</div>
                                    <div className="text-xs text-gray-500">Change of mind is not applicable</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xs text-gray-500 uppercase font-bold mb-3 border-b pb-1">Seller Guarantees</h4>
                        <div className="flex gap-3">
                            <ShieldCheck size={20} className="text-gray-400 mt-1" />
                            <div className="text-sm">100% Authentic Product</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-sm shadow-sm mt-6">
                <h3 className="text-lg font-medium mb-6">Ratings & Reviews of {product.title}</h3>
                <div className="flex flex-col md:flex-row gap-12 mb-10 border-b pb-10">
                    <div className="flex flex-col items-center">
                        <div className="text-4xl font-bold">{product.rating}</div>
                        <div className="flex text-yellow-400 my-2">
                            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />)}
                        </div>
                        <div className="text-sm text-gray-500">{product.reviews.length} Ratings</div>
                    </div>
                    <div className="flex-grow">
                        {[5, 4, 3, 2, 1].map(stars => (
                            <div key={stars} className="flex items-center gap-4 mb-1">
                                <div className="w-12 text-xs flex items-center">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={8} fill={i < stars ? "#facc15" : "none"} className={i < stars ? "text-yellow-400" : "text-gray-200"} />)}
                                </div>
                                <div className="flex-grow bg-gray-100 h-2.5 rounded-full overflow-hidden">
                                    <div
                                        className="bg-yellow-400 h-full"
                                        style={{ width: `${stars === 5 ? 70 : stars === 4 ? 20 : 5}%` }}
                                    ></div>
                                </div>
                                <div className="w-10 text-xs text-gray-400">{stars === 5 ? (product.reviews.length * 0.7).toFixed(0) : 1}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    {product.reviews.map(review => (
                        <div key={review.id} className="border-b border-gray-100 pb-6">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill={i < review.rating ? "currentColor" : "none"} />)}
                                </div>
                                <span className="text-xs text-gray-400">{new Date(review.date).toLocaleDateString()}</span>
                            </div>
                            <div className="text-sm font-medium mb-1">by {review.user}</div>
                            <p className="text-sm text-gray-700">{review.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
