import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NAV_ITEMS } from "../Constants/Constants";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full bg-black shadow-xl transition-transform duration-300 z-50 ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="container mx-auto flex justify-between items-center lg:px-8">
                <a
                    href="#home"
                    className="text-2xl font-bold text-yellow-400 p-3 lg:p-4 lg:ml-4"
                >
                    JUGENDRA
                </a>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-gray-400 focus:outline-none"
                    aria-expanded={isMobileMenuOpen}
                    onClick={handleMenuToggle}
                >
                    {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>

                {/* Navbar Links */}
                <div
                    className={`lg:flex lg:items-center lg:space-x-8 fixed lg:relative lg:top-0 top-0 left-0 w-full lg:w-auto lg:h-auto bg-gray-900 lg:bg-transparent lg:translate-y-0 transition-transform duration-300 z-40 ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
                        }`}
                >
                    {/* Overlay */}
                    {isMobileMenuOpen && (
                        <div
                            className="fixed inset-0 bg-black opacity-50 z-30"
                            onClick={closeMenu}
                        ></div>
                    )}

                    {/* Links */}
                    <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8 z-50 px-6 lg:px-0 py-6 lg:py-0">
                        {NAV_ITEMS.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                className="text-lg font-medium text-white hover:text-yellow-400 relative group"
                                onClick={closeMenu}
                            >
                                {item.name}
                                {/* Animated underline */}
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
