import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import productsData from '../data/products.json';
import ProductCard from '../components/product/ProductCard';
import { ChevronDown, Filter } from 'lucide-react';

const ProductListPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q') || '';
    const categoryParam = searchParams.get('category') || '';

    const [sortBy, setSortBy] = useState('relevance');
    const [selectedCategory, setSelectedCategory] = useState(categoryParam);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 });

    const categories = ['Electronics', 'Fashion', 'Home & Lifestyle', 'Beauty', 'Sports'];

    const filteredProducts = useMemo(() => {
        return productsData.filter(p => {
            const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase()) ||
                p.category.toLowerCase().includes(query.toLowerCase());
            const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
            const matchesPrice = p.price >= priceRange.min && p.price <= priceRange.max;
            return matchesQuery && matchesCategory && matchesPrice;
        }).sort((a, b) => {
            if (sortBy === 'priceLow') return a.price - b.price;
            if (sortBy === 'priceHigh') return b.price - a.price;
            if (sortBy === 'rating') return b.rating - a.rating;
            return 0;
        });
    }, [query, selectedCategory, priceRange, sortBy]);

    return (
        <div className="container py-6">
            <div className="flex flex-col md:flex-row gap-6">
                {/* Sidebar Filters */}
                <aside className="hidden md:block w-64 flex-shrink-0">
                    <div className="bg-white p-4 rounded-sm shadow-sm border border-gray-100">
                        <div className="flex items-center gap-2 mb-4 border-b pb-2">
                            <Filter size={18} className="text-daraz-orange" />
                            <h3 className="font-bold uppercase text-sm">Filters</h3>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-xs font-bold text-gray-400 uppercase mb-3">Category</h4>
                            <ul className="space-y-2">
                                <li>
                                    <button
                                        onClick={() => setSelectedCategory('')}
                                        className={`text-sm hover:text-daraz-orange ${!selectedCategory ? 'text-daraz-orange font-bold' : 'text-gray-600'}`}
                                    >
                                        All Categories
                                    </button>
                                </li>
                                {categories.map(cat => (
                                    <li key={cat}>
                                        <button
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`text-sm hover:text-daraz-orange ${selectedCategory === cat ? 'text-daraz-orange font-bold' : 'text-gray-600'}`}
                                        >
                                            {cat}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-xs font-bold text-gray-400 uppercase mb-3">Price Range</h4>
                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    placeholder="Min"
                                    className="w-full border border-gray-200 rounded-sm p-1.5 text-xs text-center focus:outline-daraz-orange"
                                    onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) || 0 }))}
                                />
                                <span className="text-gray-400">-</span>
                                <input
                                    type="number"
                                    placeholder="Max"
                                    className="w-full border border-gray-200 rounded-sm p-1.5 text-xs text-center focus:outline-daraz-orange"
                                    onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) || 100000 }))}
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-xs font-bold text-gray-400 uppercase mb-3">Rating</h4>
                            {[5, 4, 3].map(star => (
                                <label key={star} className="flex items-center gap-2 cursor-pointer py-1 group">
                                    <input type="checkbox" className="accent-daraz-orange" />
                                    <div className="flex text-yellow-500">
                                        {[...Array(star)].map((_, i) => <span key={i}>★</span>)}
                                    </div>
                                    <span className="text-xs text-gray-400 group-hover:text-daraz-orange">& Up</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-grow">
                    <div className="bg-white p-3 rounded-sm shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4 mb-4 border border-gray-100">
                        <h1 className="text-sm">
                            <span className="font-bold">{filteredProducts.length}</span> items found for
                            {query && <span className="text-daraz-orange italic"> "{query}"</span>}
                            {!query && " All Products"}
                        </h1>
                        <div className="flex items-center gap-4 text-sm">
                            <span className="text-gray-500">Sort by:</span>
                            <div className="relative group">
                                <select
                                    className="appearance-none border border-gray-200 rounded-sm py-1.5 pl-3 pr-8 focus:outline-daraz-orange bg-white cursor-pointer"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option value="relevance">Relevance</option>
                                    <option value="priceLow">Price: Low to High</option>
                                    <option value="priceHigh">Price: High to Low</option>
                                    <option value="rating">Best Rating</option>
                                </select>
                                <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
                            </div>
                        </div>
                    </div>

                    {filteredProducts.length === 0 ? (
                        <div className="bg-white p-12 text-center rounded-sm">
                            <p className="text-gray-500 mb-4">No products found matching your selection.</p>
                            <button
                                onClick={() => { setSelectedCategory(''); setPriceRange({ min: 0, max: 100000 }); }}
                                className="btn-orange"
                            >
                                Clear all filters
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default ProductListPage;
