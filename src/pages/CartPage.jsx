import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

    if (cartCount === 0) {
        return (
            <div className="container py-12 md:py-20 text-center">
                <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm flex flex-col items-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                        <ShoppingBag size={40} md:size={48} className="text-gray-300" />
                    </div>
                    <h2 className="text-lg md:text-xl font-bold mb-2 text-gray-800">Your cart is empty</h2>
                    <p className="text-gray-500 text-sm md:text-base mb-8 max-w-sm mx-auto">Click 'CONTINUE SHOPPING' to find more items and add them to your cart.</p>
                    <Link to="/" className="w-full sm:w-auto bg-daraz-orange text-white px-10 py-3.5 font-bold rounded-sm hover:brightness-95 transition-all text-sm uppercase tracking-wider">
                        CONTINUE SHOPPING
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container py-4 md:py-8">
            <h1 className="text-xl font-bold mb-6 text-gray-800 hidden md:block">Shopping Cart ({cartCount})</h1>
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Cart Items */}
                <div className="flex-grow">
                    <div className="bg-white p-4 rounded-sm shadow-sm mb-4 hidden md:flex justify-between items-center font-bold text-xs uppercase text-gray-500 tracking-wider">
                        <span>Product</span>
                        <div className="flex gap-20">
                            <span className="w-24">Price</span>
                            <span className="w-32 text-center">Quantity</span>
                            <span className="w-24 text-right">Total</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        {cart.map(item => (
                            <div key={item.id} className="bg-white p-3 md:p-4 rounded-sm shadow-sm flex gap-3 md:gap-4 items-center">
                                <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 border border-gray-100 rounded-sm overflow-hidden bg-gray-50 flex items-center justify-center">
                                    <img src={item.imageUrls[0]} alt={item.title} className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex-grow">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                                        <div className="max-w-md">
                                            <Link to={`/product/${item.id}`} className="text-[13px] md:text-sm font-medium hover:text-daraz-orange transition-colors line-clamp-2 md:line-clamp-1 leading-snug">
                                                {item.title}
                                            </Link>
                                            <div className="text-[11px] text-gray-400 mt-0.5">{item.category}</div>

                                            <div className="flex items-center justify-between md:justify-start gap-4 mt-2">
                                                <div className="text-daraz-orange font-bold text-sm md:text-base">Rs. {item.price.toLocaleString()}</div>

                                                <div className="flex items-center gap-3">
                                                    <div className="flex border border-gray-200 rounded-sm overflow-hidden">
                                                        <button
                                                            className="px-2 py-1 md:py-1.5 bg-gray-50 hover:bg-gray-200 transition-colors"
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        >
                                                            <Minus size={14} />
                                                        </button>
                                                        <input
                                                            type="text"
                                                            className="w-8 md:w-10 text-center text-[12px] focus:outline-none bg-white font-medium"
                                                            value={item.quantity}
                                                            readOnly
                                                        />
                                                        <button
                                                            className="px-2 py-1 md:py-1.5 bg-gray-50 hover:bg-gray-200 transition-colors"
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        >
                                                            <Plus size={14} />
                                                        </button>
                                                    </div>

                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                                        title="Remove item"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="hidden md:block text-daraz-orange font-bold w-24 text-right">
                                            Rs. {(item.price * item.quantity).toLocaleString()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:w-80 flex-shrink-0">
                    <div className="bg-white p-4 md:p-5 rounded-sm shadow-sm sticky top-28 border border-gray-100">
                        <h3 className="font-bold text-sm mb-5 border-b pb-3 uppercase text-gray-800 tracking-wide">Order Summary</h3>

                        <div className="space-y-4 text-sm mb-6">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span className="font-medium">Rs. {cartTotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping Fee</span>
                                <span className="font-medium">Rs. 99</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping Fee Discount</span>
                                <span className="text-red-500 font-medium">-Rs. 99</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 mb-6">
                            <input
                                type="text"
                                placeholder="Voucher Code"
                                className="flex-grow border border-gray-200 px-3 py-2.5 text-xs focus:outline-daraz-orange rounded-sm"
                            />
                            <button className="bg-[#26abd4] text-white px-4 py-2.5 text-xs font-bold rounded-sm uppercase tracking-wider hover:brightness-95 transition-all">APPLY</button>
                        </div>

                        <div className="border-t pt-5 mb-6">
                            <div className="flex justify-between font-bold text-lg">
                                <span className="text-gray-800 text-base">Total</span>
                                <span className="text-daraz-orange">Rs. {cartTotal.toLocaleString()}</span>
                            </div>
                            <p className="text-[10px] text-gray-400 text-right mt-1 italic">VAT Included, where applicable</p>
                        </div>

                        <button className="w-full bg-daraz-orange text-white py-4 font-bold rounded-sm hover:brightness-95 transition-all shadow-md shadow-orange-100 uppercase text-xs tracking-widest">
                            PROCEED TO CHECKOUT ({cartCount})
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
