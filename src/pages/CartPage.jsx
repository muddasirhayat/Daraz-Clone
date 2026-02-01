import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

    if (cartCount === 0) {
        return (
            <div className="container py-20 text-center">
                <div className="bg-white p-12 rounded-sm shadow-sm flex flex-col items-center">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                        <ShoppingBag size={48} className="text-gray-300" />
                    </div>
                    <h2 className="text-xl font-bold mb-2">There are no items in this cart</h2>
                    <p className="text-gray-500 mb-8">Click 'CONTINUE SHOPPING' to find more items and add them to your cart.</p>
                    <Link to="/" className="bg-daraz-orange text-white px-10 py-3 font-bold rounded-sm hover:brightness-95 transition-all">
                        CONTINUE SHOPPING
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container py-8">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Cart Items */}
                <div className="flex-grow">
                    <div className="bg-white p-4 rounded-sm shadow-sm mb-4 flex justify-between items-center font-bold text-sm uppercase">
                        <span>Product</span>
                        <div className="hidden md:flex gap-20">
                            <span className="w-24">Price</span>
                            <span className="w-32 text-center">Quantity</span>
                            <span className="w-24 text-right">Total</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {cart.map(item => (
                            <div key={item.id} className="bg-white p-4 rounded-sm shadow-sm flex gap-4 items-center">
                                <div className="w-20 h-20 flex-shrink-0 border border-gray-100">
                                    <img src={item.imageUrls[0]} alt={item.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-grow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div className="max-w-xs">
                                        <Link to={`/product/${item.id}`} className="text-sm font-medium hover:text-daraz-orange transition-colors line-clamp-2">
                                            {item.title}
                                        </Link>
                                        <div className="text-xs text-gray-400 mt-1">{item.category}</div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="mt-2 text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1 text-xs"
                                        >
                                            <Trash2 size={14} /> Remove
                                        </button>
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-4 md:gap-20 items-end md:items-center w-full md:w-auto">
                                        <div className="text-daraz-orange font-bold">Rs. {item.price.toLocaleString()}</div>

                                        <div className="flex border border-gray-200 rounded-sm">
                                            <button
                                                className="px-2 py-1 bg-gray-50 hover:bg-gray-200 transition-colors"
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <input
                                                type="text"
                                                className="w-10 text-center text-xs focus:outline-none"
                                                value={item.quantity}
                                                readOnly
                                            />
                                            <button
                                                className="px-2 py-1 bg-gray-50 hover:bg-gray-200 transition-colors"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>

                                        <div className="text-daraz-orange font-bold hidden md:block w-24 text-right">
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
                    <div className="bg-white p-4 rounded-sm shadow-sm sticky top-28">
                        <h3 className="font-bold text-lg mb-4 border-b pb-2 uppercase text-sm">Order Summary</h3>
                        <div className="space-y-3 text-sm mb-6">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal ({cartCount} items)</span>
                                <span>Rs. {cartTotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping Fee</span>
                                <span>Rs. 99</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping Fee Discount</span>
                                <span className="text-red-500">-Rs. 99</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 mb-6">
                            <input
                                type="text"
                                placeholder="Enter Voucher Code"
                                className="flex-grow border border-gray-200 p-2 text-sm focus:outline-daraz-orange"
                            />
                            <button className="bg-daraz-orange text-white px-4 py-2 text-sm font-bold rounded-sm">APPLY</button>
                        </div>

                        <div className="border-t pt-4 mb-6">
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span className="text-daraz-orange">Rs. {cartTotal.toLocaleString()}</span>
                            </div>
                            <p className="text-[10px] text-gray-400 text-right mt-1">VAT Included, where applicable</p>
                        </div>

                        <button className="w-full bg-daraz-orange text-white py-3 font-bold rounded-sm hover:brightness-95 transition-all shadow-md shadow-orange-200">
                            PROCEED TO CHECKOUT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
