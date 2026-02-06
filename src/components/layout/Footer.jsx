import React from 'react';

const Footer = () => {
    const customerCare = [
        "Help Center", "How to Buy", "Corporate & Bulk Purchasing",
        "Returns & Refunds", "Daraz Shop", "Contact Us",
        "Purchase Protection", "Daraz Pick up Points"
    ];

    const darazLinks = [
        "About Us", "Digital Payments", "Daraz Donates", "Daraz Blog",
        "Terms & Conditions", "Privacy Policy", "NTN Number : 4012118-6",
        "STRN Number : 1700401211818", "Online Shopping App",
        "Online Grocery Shopping", "Daraz Exclusive", "Daraz University",
        "Sell on Daraz", "Join Daraz Affiliate Program"
    ];

    const categories = {
        "Top Categories & Brands": [
            "MOBILE PHONES IN PAKISTAN", "Apple iPhones", "Tecno Phones", "Infinix Mobile Phones", "VIVO Mobile Phones",
            "Redmi Mobile Phones", "Realme Mobile Phones", "Oneplus Phones", "Samsung Mobile Phones",
            "Poco Mobiles", "Oneplus Phones", "Oppo Mobile Phones", "Xiaomi Mi Phones",
            "Vivo Mobile Phones", "Mobile Accessories", "Tablets", "Laptops", "HP Laptops", "Lenovo Laptops",
            "Dell Laptops", "Macbook", "Acer Laptops", "Asus Laptops", "Gaming Laptops"
        ],
        "WOMEN'S FASHION": [
            "Kurtas & Shalwar Kameez", "Unstitched Fabric", "Western Dresses", "Shawls & Wraps",
            "Pants, Palazzos & Capris", "Jeans & Jeggings", "Tights & Leggings", "Saree Blouse",
            "Women Undergarments", "Bras", "Panties", "Lingerie Sets", "Sleep & Lounge Wear"
        ],
        "MEN'S FASHION": [
            "T-Shirts", "Shirts", "Pants", "Jeans", "Shorts, Joggers & Sweats", "Kurtas & Shalwar Kameez",
            "Winter Clothing", "Inner Wear", "Shoes", "Sneakers", "Casual Shoes", "Formal Shoes",
            "Sandals & Slippers", "Sports Shoes", "Boots", "Watches", "Bags & Wallets"
        ],
        "HOME & LIFESTYLE": [
            "Bath", "Bedding", "Home Décor", "Furniture", "Kitchen & Dining", "Lighting",
            "Laundry & Cleaning", "Tools, DIY & Outdoor", "Stationery & Craft", "Media, Music & Books",
            "Pet Supplies"
        ],
        "ELECTRONIC DEVICES": [
            "Smartphones", "Tablets", "Laptops", "Desktops", "Smart Watches & Bands", "Cameras",
            "Security Cameras & Systems", "Gaming Consoles", "Headphones & Headsets", "Printers",
            "Computer Components", "Portable Speakers", "Monitors"
        ],
        "TV & HOME APPLIANCES": [
            "Televisions", "Air Conditioners", "Refrigerators", "Washing Machines", "Kitchen Appliances",
            "Cooling & Heating", "Irons & Steamers", "Vacuums & Floor Care", "Generator, UPS & Solar",
            "Projectors & Players"
        ],
        "SPORTS & OUTDOOR": [
            "Exercise & Fitness", "Supplements", "Shoes & Clothing", "Team Sports", "Racket Sports",
            "Outdoor Recreation", "Fitness Gadgets", "Sports Accessories"
        ],
        "GROCERIES & PETS": [
            "Fresh Produce", "Breakfast, Choco & Snacks", "Beverages", "Cooking & Baking Needs",
            "Household Supplies", "Cat Food", "Dog Food", "Bird Food", "Pet Accessories"
        ],
        "HEALTH & BEAUTY": [
            "Makeup", "Skin Care", "Hair Care", "Bath & Body", "Beauty Tools", "Men's Care",
            "Fragrances", "Sexual Wellness", "Medical Supplies", "Vitamins & Supplements"
        ],
        "BABIES & TOYS": [
            "Diapering & Potty", "Feeding", "Baby Gear", "Nursery", "Baby Personal Care",
            "Clothing & Accessories", "Baby & Toddler Toys", "Remote Control Toys", "Sports & Outdoor Play",
            "Puzzles & Board Games"
        ],
        "AUTOMOTIVE & MOTORBIKE": [
            "Automotive", "Motorcycle", "Loaders & Rickshaw", "Spare Parts", "Car Accessories",
            "Bike Accessories", "Car Care", "Motorcycle Riding Gear"
        ]
    };

    return (
        <footer className="bg-[#f5f5f5] border-t border-gray-200">
            {/* Top Section: Customer Care, Daraz, Payment, App Download */}
            <div className="container py-6 md:py-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {/* Customer Care */}
                    <div className="col-span-1">
                        <h3 className="text-[#0f136d] text-[13px] md:text-[14px] font-bold mb-3 md:mb-4">Customer Care</h3>
                        <ul className="space-y-1.5 md:space-y-2">
                            {customerCare.map((link, idx) => (
                                <li key={idx}>
                                    <a href="#" className="text-[#424242] text-[11px] md:text-[12px] hover:text-[#f57224] transition-colors block">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Daraz */}
                    <div className="col-span-1">
                        <h3 className="text-[#0f136d] text-[13px] md:text-[14px] font-bold mb-3 md:mb-4">Daraz</h3>
                        <ul className="space-y-1.5 md:space-y-2">
                            {darazLinks.map((link, idx) => (
                                <li key={idx}>
                                    {link.includes(':') ? (
                                        <span className="text-[#424242] text-[11px] md:text-[12px] block">{link}</span>
                                    ) : (
                                        <a href="#" className="text-[#424242] text-[11px] md:text-[12px] hover:text-[#f57224] transition-colors block">{link}</a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Payment Methods & Verified */}
                    <div className="col-span-2 lg:col-span-1">
                        <div className="mb-6 md:mb-8">
                            <h3 className="text-[#424242] text-[12px] md:text-[13px] font-bold mb-3 md:mb-4 uppercase">Payment Methods</h3>
                            <div className="flex flex-wrap gap-2">
                                {/* Payment icons */}
                                <div className="w-[40px] md:w-[45px] h-[24px] md:h-[28px] bg-white border border-gray-200 rounded flex items-center justify-center">
                                    <svg viewBox="0 0 48 48" className="h-3 md:h-4 w-auto">
                                        <path fill="#1434CB" d="M23.016 19.333c-.767-.384-1.3-.65-1.3-1.05 0-.35.401-.716 1.25-.716 1.05 0 1.633.2 1.633.2l.333-2.6S24.25 15 22.817 15C20.6 15 19 16.183 19 17.867c0 1.25 1.117 1.95 1.967 2.367.883.433 1.183.716 1.183 1.1 0 .6-.716.867-1.383.867-1.167 0-1.8-.2-1.8-.2l-.35 2.716s.767.35 2.133.35C23.067 25.067 24.683 24.267 24.683 22.467c0-1.067-.633-1.883-1.667-2.317z" />
                                    </svg>
                                </div>
                                <div className="w-[40px] md:w-[45px] h-[24px] md:h-[28px] bg-white border border-gray-200 rounded flex items-center justify-center">
                                    <svg viewBox="0 0 48 48" className="h-3 md:h-4 w-auto">
                                        <circle cx="16" cy="24" r="10" fill="#EB001B" />
                                        <circle cx="32" cy="24" r="10" fill="#F79E1B" fillOpacity="0.8" />
                                    </svg>
                                </div>
                                <div className="w-[40px] md:w-[45px] h-[24px] md:h-[28px] bg-white border border-gray-200 rounded flex items-center justify-center px-1">
                                    <span className="text-[9px] md:text-[10px] font-bold text-gray-700">COD</span>
                                </div>
                                <div className="w-[40px] md:w-[45px] h-[24px] md:h-[28px] bg-white border border-gray-200 rounded flex items-center justify-center px-1">
                                    <span className="text-[8px] md:text-[9px] font-bold text-[#20c156]">Easy</span>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <h3 className="text-[#424242] text-[12px] md:text-[13px] font-bold mb-3 md:mb-4 uppercase">Verified by</h3>
                            <div className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-white border border-gray-200 rounded p-1.5 md:p-2">
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="#0066B2" strokeWidth="3" />
                                    <path d="M30 50 L45 65 L70 35" fill="none" stroke="#0066B2" strokeWidth="4" strokeLinecap="round" />
                                    <text x="50" y="85" fontSize="12" textAnchor="middle" fill="#0066B2" fontWeight="bold">PCI DSS</text>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* App Download */}
                    <div className="col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-[36px] md:w-[40px] h-[36px] md:h-[40px] rounded-lg overflow-hidden bg-white shadow-sm">
                                <img
                                    src="https://img.alicdn.com/imgextra/i1/O1CN01Id62S91W6zSXhYpP5y5y5_!!6000000002740-2-tps-160-160.png"
                                    alt="Daraz"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <h4 className="text-[#f57224] text-[14px] md:text-[16px] font-bold leading-tight">Happy Shopping</h4>
                                <p className="text-[#0f136d] text-[11px] md:text-[12px] font-medium">Download App</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap md:flex-col gap-2">
                            <a href="#" className="block">
                                <img
                                    src="https://laz-img-cdn.alicdn.com/tfs/TB19tq6uYvpK1RjSZPiXXbmwXXa-135-40.png"
                                    alt="App Store"
                                    className="h-[28px] md:h-[35px] w-auto hover:opacity-80 transition-opacity"
                                />
                            </a>
                            <a href="#" className="block">
                                <img
                                    src="https://laz-img-cdn.alicdn.com/tfs/TB1_uG6uYvpK1RjSZPiXXbmwXXa-135-40.png"
                                    alt="Google Play"
                                    className="h-[28px] md:h-[35px] w-auto hover:opacity-80 transition-opacity"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Section: About Daraz & Categories - Hidden on very small screens */}
            <div className="bg-white border-y border-gray-200 py-6 md:py-10 hidden sm:block">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8 text-[10px] md:text-[11px] leading-relaxed">
                        {/* About Daraz - Takes 2 columns */}
                        <div className="lg:col-span-2">
                            <h3 className="text-[#0f136d] text-[12px] md:text-[13px] font-bold mb-2 md:mb-3">How Daraz Transformed Online Shopping in Pakistan</h3>
                            <p className="text-[#666] mb-2 md:mb-3">
                                Daraz first made waves as the largest online marketplace in South Asia. We have since grown to become the largest online shopping platform in Pakistan...
                            </p>
                            <h4 className="text-[#0f136d] text-[11px] md:text-[12px] font-bold mb-1.5 md:mb-2">Shop from Verified Vendors</h4>
                            <p className="text-[#666] mb-2 md:mb-3">
                                All our vendors are verified and trusted. We ensure that all products sold on Daraz are genuine...
                            </p>
                        </div>

                        {/* Categories - Each takes 1 column */}
                        {Object.entries(categories).slice(0, 4).map(([title, items]) => (
                            <div key={title} className="hidden md:block">
                                <h3 className="text-[#0f136d] text-[12px] md:text-[13px] font-bold mb-2 md:mb-3 uppercase">{title}</h3>
                                <ul className="space-y-1 md:space-y-1.5">
                                    {items.slice(0, 10).map((item, idx) => (
                                        <li key={idx}>
                                            <a href="#" className="text-[#666] hover:text-[#f57224] transition-colors">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Section: International & Social */}
            <div className="bg-white py-6">
                <div className="container">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                        {/* Left: International */}
                        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                            <div>
                                <h3 className="text-[#424242] text-[13px] md:text-[14px] font-bold mb-2 md:mb-3">Daraz International</h3>
                                <div className="flex flex-wrap gap-3 md:gap-4">
                                    {["Pakistan", "Bangladesh", "Sri Lanka", "Myanmar", "Nepal"].map((country) => (
                                        <a key={country} href="#" className="flex items-center gap-1.5 group">
                                            <span className="text-[11px] md:text-[12px] text-[#666] group-hover:text-[#f57224]">{country}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Social */}
                            <div>
                                <h3 className="text-[#424242] text-[13px] md:text-[14px] font-bold mb-2 md:mb-3">Follow Us</h3>
                                <div className="flex gap-3">
                                    <a href="#" className="hover:scale-110 transition-transform">
                                        <img src="https://img.icons8.com/color/48/facebook-new.png" className="w-6 h-6 md:w-7 md:h-7" alt="Facebook" />
                                    </a>
                                    <a href="#" className="hover:scale-110 transition-transform">
                                        <img src="https://img.icons8.com/color/48/instagram-new.png" className="w-6 h-6 md:w-7 md:h-7" alt="Instagram" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right: Copyright */}
                        <div className="w-full lg:w-auto text-left lg:text-right border-t lg:border-none pt-4 lg:pt-0">
                            <p className="text-[11px] md:text-[12px] text-[#666]">© Daraz 2026</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
