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

    return (
        <footer className="bg-[#f4f4f6] pt-10 border-t border-gray-200">
            <div className="container pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Customer Care */}
                    <div>
                        <h3 className="text-[#0f136d] text-[16px] font-semibold mb-5">Customer Care</h3>
                        <ul className="space-y-2">
                            {customerCare.map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-[#2a2a2a] text-[12px] hover:text-[#f57224] transition-colors whitespace-nowrap">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Daraz Links */}
                    <div>
                        <h3 className="text-[#0f136d] text-[16px] font-semibold mb-5">Daraz</h3>
                        <ul className="space-y-2">
                            {darazLinks.map((link) => (
                                <li key={link}>
                                    {link.includes(':') ? (
                                        <span className="text-[#2a2a2a] text-[12px] block py-0.5">{link}</span>
                                    ) : (
                                        <a href="#" className="text-[#2a2a2a] text-[12px] hover:text-[#f57224] transition-colors whitespace-nowrap">{link}</a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Download App Section */}
                    <div className="lg:col-span-2">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-[48px] h-[48px] rounded-xl overflow-hidden shadow-sm">
                                    <img
                                        src="https://img.alicdn.com/imgextra/i1/O1CN01Id62S91W6zSXhYpP5y5y5_!!6000000002740-2-tps-160-160.png"
                                        alt="Daraz App"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-[#f57224] text-[18px] font-bold leading-tight">Happy Shopping</h4>
                                    <p className="text-[#0f136d] text-[13px] font-medium">Download App</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 items-center">
                                <a href="#" className="hover:scale-[1.02] transition-transform w-[120px]">
                                    <img
                                        src="https://laz-img-cdn.alicdn.com/tfs/TB19tq6uYvpK1RjSZPiXXbmwXXa-135-40.png"
                                        alt="App Store"
                                        className="w-full h-auto"
                                    />
                                </a>
                                <a href="#" className="hover:scale-[1.02] transition-transform w-[120px]">
                                    <img
                                        src="https://laz-img-cdn.alicdn.com/tfs/TB1_uG6uYvpK1RjSZPiXXbmwXXa-135-40.png"
                                        alt="Google Play"
                                        className="w-full h-auto"
                                    />
                                </a>
                                <a href="#" className="hover:scale-[1.02] transition-transform w-[120px]">
                                    <img
                                        src="https://laz-img-cdn.alicdn.com/tfs/TB16pq6uYvpK1RjSZPiXXbmwXXa-135-40.png"
                                        alt="App Gallery"
                                        className="w-full h-auto"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Section: Payment Methods */}
            <div className="bg-white border-t border-gray-100 py-10">
                <div className="container">
                    <h3 className="text-[#424242] text-[15px] mb-6 uppercase tracking-wider font-bold">Payment Methods</h3>
                    <div className="flex flex-wrap gap-5 items-center">
                        {/* Visa */}
                        <div className="w-[60px] h-[38px] bg-white border border-gray-100 rounded shadow-sm flex items-center justify-center p-1.5 hover:border-daraz-orange transition-all cursor-pointer group">
                            <svg viewBox="0 0 48 48" className="h-full w-full grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100">
                                <path fill="#15195b" d="M30 32H20l-1-7h12z" />
                                <path fill="#15195b" d="M23.016 19.333c-.767-.384-1.3-.65-1.3-1.05 0-.35.401-.716 1.25-.716 1.05 0 1.633.2 1.633.2l.333-2.6S24.25 15 22.817 15C20.6 15 19 16.183 19 17.867c0 1.25 1.117 1.95 1.967 2.367.883.433 1.183.716 1.183 1.1 0 .6-.716.867-1.383.867-1.167 0-1.8-.2-1.8-.2l-.35 2.716s.767.35 2.133.35C23.067 25.067 24.683 24.267 24.683 22.467c0-1.067-.633-1.883-1.667-2.317zM16.967 25h3.333l2.083-10h-3.333zM34.7 15c-.767 0-1.417.45-1.7 1.117L28 25h3.5l.7-1.917h4.267l.4 1.917H40zM33.15 20.35l1.833-5 1.05 5zM11.75 15l-3.333 8.133L7.75 15H4.5L8.5 25h3.667l5.333-10z" />
                            </svg>
                        </div>
                        {/* Mastercard */}
                        <div className="w-[60px] h-[38px] bg-white border border-gray-100 rounded shadow-sm flex items-center justify-center p-1.5 hover:border-daraz-orange transition-all cursor-pointer group">
                            <svg viewBox="0 0 48 48" className="h-full w-full grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100">
                                <circle cx="18" cy="24" r="14" fill="#ff5f00" fillOpacity=".8" />
                                <circle cx="30" cy="24" r="14" fill="#eb001b" fillOpacity=".8" />
                            </svg>
                        </div>
                        {/* HBL */}
                        <div className="w-[60px] h-[38px] bg-white border border-gray-100 rounded shadow-sm flex items-center justify-center px-1 hover:border-daraz-orange transition-all cursor-pointer group overflow-hidden">
                            <span className="text-[#008269] font-black italic text-[14px] leading-tight group-hover:scale-110 transition-transform">HBL</span>
                        </div>
                        {/* EasyPaisa */}
                        <div className="w-[85px] h-[38px] bg-white border border-gray-100 rounded shadow-sm flex items-center justify-center px-2 hover:border-daraz-orange transition-all cursor-pointer group overflow-hidden">
                            <span className="text-[#20c156] font-bold text-[12px] group-hover:scale-105 transition-transform tracking-tight">EasyPaisa</span>
                        </div>
                        {/* JazzCash */}
                        <div className="w-[85px] h-[38px] bg-white border border-gray-100 rounded shadow-sm flex items-center justify-center px-2 hover:border-daraz-orange transition-all cursor-pointer group overflow-hidden">
                            <span className="text-[#000000] font-black text-[12px] group-hover:scale-105 transition-transform"><span className="text-[#fecd08]">Jazz</span>Cash</span>
                        </div>
                        {/* COD */}
                        <div className="w-[60px] h-[38px] bg-white border border-gray-100 rounded shadow-sm flex items-center justify-center p-1.5 hover:border-daraz-orange transition-all cursor-pointer group">
                            <div className="flex flex-col items-center justify-center leading-[0.8]">
                                <span className="text-[14px] font-black text-[#4a4a4a] group-hover:text-daraz-orange transition-colors">COD</span>
                                <span className="text-[8px] font-bold text-gray-400">Cash</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section: International & Social */}
            <div className="bg-white border-t border-gray-100 py-8">
                <div className="container flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-14">
                        {/* International */}
                        <div>
                            <h3 className="text-[#424242] text-[16px] font-medium mb-5">Daraz International</h3>
                            <div className="flex flex-wrap gap-5">
                                <div className="flex items-center gap-2 group cursor-pointer">
                                    <img src="https://img.icons8.com/color/48/pakistan-circular.png" className="w-8 h-8 group-hover:opacity-80 transition-opacity" alt="Pakistan" />
                                    <span className="text-[14px] text-[#757575] group-hover:text-daraz-orange">Pakistan</span>
                                </div>
                                <div className="flex items-center gap-2 group cursor-pointer">
                                    <img src="https://img.icons8.com/color/48/bangladesh-circular.png" className="w-8 h-8 group-hover:opacity-80 transition-opacity" alt="Bangladesh" />
                                    <span className="text-[14px] text-[#757575] group-hover:text-daraz-orange">Bangladesh</span>
                                </div>
                                <div className="flex items-center gap-2 group cursor-pointer">
                                    <img src="https://img.icons8.com/color/48/sri-lanka-circular.png" className="w-8 h-8 group-hover:opacity-80 transition-opacity" alt="Sri Lanka" />
                                    <span className="text-[14px] text-[#757575] group-hover:text-daraz-orange">Sri Lanka</span>
                                </div>
                                <div className="flex items-center gap-2 group cursor-pointer">
                                    <img src="https://img.icons8.com/color/48/myanmar-circular.png" className="w-8 h-8 group-hover:opacity-80 transition-opacity" alt="Myanmar" />
                                    <span className="text-[14px] text-[#757575] group-hover:text-daraz-orange">Myanmar</span>
                                </div>
                                <div className="flex items-center gap-2 group cursor-pointer">
                                    <img src="https://img.icons8.com/color/48/nepal-circular.png" className="w-8 h-8 group-hover:opacity-80 transition-opacity" alt="Nepal" />
                                    <span className="text-[14px] text-[#757575] group-hover:text-daraz-orange">Nepal</span>
                                </div>
                            </div>
                        </div>

                        {/* Social */}
                        <div>
                            <h3 className="text-[#424242] text-[16px] font-medium mb-5">Follow Us</h3>
                            <div className="flex gap-4">
                                <a href="#" className="hover:scale-110 transition-transform">
                                    <img src="https://img.icons8.com/color/48/facebook-new.png" className="w-9 h-9" alt="Facebook" />
                                </a>
                                <a href="#" className="hover:scale-110 transition-transform flex items-center justify-center w-9 h-9 bg-black rounded-full">
                                    <img src="https://img.icons8.com/ios-filled/50/ffffff/x.png" className="w-5 h-5" alt="X" />
                                </a>
                                <a href="#" className="hover:scale-110 transition-transform">
                                    <img src="https://img.icons8.com/color/48/instagram-new.png" className="w-9 h-9" alt="Instagram" />
                                </a>
                                <a href="#" className="hover:scale-110 transition-transform">
                                    <img src="https://img.icons8.com/color/48/youtube-play.png" className="w-9 h-9" alt="Youtube" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:text-right mt-4 lg:mt-10">
                        <p className="text-[14px] text-[#757575] font-medium">© Daraz 2026</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
