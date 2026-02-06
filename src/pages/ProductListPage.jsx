import React, { useState, useMemo, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import productsData from '../data/products.json';
import ProductCard from '../components/product/ProductCard';
import { ChevronDown, Filter, Star } from 'lucide-react';

const ProductListPage = () => {
    const { name } = useParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q') || '';

    // Internal states for filters
    const [sortBy, setSortBy] = useState('relevance');
    const [selectedCategory, setSelectedCategory] = useState(name || '');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 });
    const [ratingFilter, setRatingFilter] = useState(0);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Update selected category if URL param changes
    useEffect(() => {
        if (name) setSelectedCategory(name);
    }, [name]);

    const categories = Array.from(new Set(productsData.map(p => p.category)));

    const filteredProducts = useMemo(() => {
        return productsData.filter(p => {
            const matchesQuery = !query ||
                p.title.toLowerCase().includes(query.toLowerCase()) ||
                p.category.toLowerCase().includes(query.toLowerCase());

            const matchesCategory = !selectedCategory ||
                p.category.toLowerCase() === selectedCategory.toLowerCase();

            const matchesPrice = p.price >= priceRange.min && p.price <= priceRange.max;

            const matchesRating = !ratingFilter || Math.floor(p.rating) >= ratingFilter;

            return matchesQuery && matchesCategory && matchesPrice && matchesRating;
        }).sort((a, b) => {
            if (sortBy === 'priceLow') return a.price - b.price;
            if (sortBy === 'priceHigh') return b.price - a.price;
            if (sortBy === 'rating') return b.rating - a.rating;
            return 0;
        });
    }, [query, selectedCategory, priceRange, sortBy, ratingFilter]);

    const FilterContent = () => (
        <div className="bg-white p-4 rounded-sm">
            <div className="flex items-center justify-between mb-4 border-b pb-2">
                <div className="flex items-center gap-2">
                    <Filter size={18} className="text-daraz-orange" />
                    <h3 className="font-bold uppercase text-sm">Filters</h3>
                </div>
                <button onClick={() => setIsFilterOpen(false)} className="md:hidden text-gray-400">
                    ✕
                </button>
            </div>

            <div className="mb-6">
                <h4 className="text-xs font-bold text-gray-400 uppercase mb-3">Category</h4>
                <ul className="space-y-2">
                    <li>
                        <button
                            onClick={() => { setSelectedCategory(''); setIsFilterOpen(false); }}
                            className={`text-sm hover:text-daraz-orange ${!selectedCategory ? 'text-daraz-orange font-bold' : 'text-gray-600'}`}
                        >
                            All Categories
                        </button>
                    </li>
                    {categories.map(cat => (
                        <li key={cat}>
                            <button
                                onClick={() => { setSelectedCategory(cat); setIsFilterOpen(false); }}
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
                        <input
                            type="checkbox"
                            className="accent-daraz-orange"
                            checked={ratingFilter === star}
                            onChange={() => setRatingFilter(ratingFilter === star ? 0 : star)}
                        />
                        <div className="flex text-yellow-500">
                            {[...Array(star)].map((_, i) => <span key={i}>★</span>)}
                        </div>
                        <span className="text-xs text-gray-400 group-hover:text-daraz-orange">& Up</span>
                    </label>
                ))}
            </div>

            <button
                onClick={() => { setPriceRange({ min: 0, max: 100000 }); setRatingFilter(0); setSelectedCategory(''); setIsFilterOpen(false); }}
                className="w-full text-xs text-gray-500 hover:text-daraz-orange underline py-2"
            >
                Clear all filters
            </button>
        </div>
    );

    return (
        <div className="container py-4 md:py-6">
            <div className="flex flex-col md:row gap-6">
                {/* Sidebar Filters - Desktop */}
                <aside className="hidden md:block w-64 flex-shrink-0">
                    <div className="shadow-sm border border-gray-100 sticky top-24">
                        <FilterContent />
                    </div>
                </aside>

                {/* Mobile Filter Toggle */}
                <div className="md:hidden flex items-center justify-between bg-white p-3 rounded-sm shadow-sm border border-gray-100 mb-2">
                    <button
                        onClick={() => setIsFilterOpen(true)}
                        className="flex items-center gap-2 text-sm font-medium text-gray-700"
                    >
                        <Filter size={16} className="text-daraz-orange" />
                        Filters
                    </button>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">Sort:</span>
                        <select
                            className="text-xs font-medium focus:outline-none bg-transparent"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="relevance">Relevance</option>
                            <option value="priceLow">Price ↑</option>
                            <option value="priceHigh">Price ↓</option>
                        </select>
                    </div>
                </div>

                {/* Mobile Filter Overlay */}
                {isFilterOpen && (
                    <div className="fixed inset-0 z-[60] md:hidden">
                        <div className="absolute inset-0 bg-black/50" onClick={() => setIsFilterOpen(false)} />
                        <div className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-xl animate-in slide-in-from-left duration-200 overflow-y-auto">
                            <FilterContent />
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <main className="flex-grow">
                    <div className="bg-white p-3 rounded-sm shadow-sm hidden sm:flex justify-between items-center gap-4 mb-4 border border-gray-100">
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

                    <div className="md:mb-4 px-1 flex sm:hidden items-center text-[12px] text-gray-500">
                        <span>{filteredProducts.length} items found</span>
                        {query && <span className="ml-1">for "{query}"</span>}
                    </div>

                    {filteredProducts.length === 0 ? (
                        <div className="bg-white p-12 text-center rounded-sm border border-gray-100 mt-4">
                            <p className="text-gray-500 mb-4">No products found matching your selection.</p>
                            <button
                                onClick={() => { setSelectedCategory(''); setPriceRange({ min: 0, max: 100000 }); setRatingFilter(0); }}
                                className="btn-orange text-sm px-8"
                            >
                                Clear all filters
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
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
