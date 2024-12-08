import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const ListItem = [
        { name: "Home", link: "/" },                 // Home should be the first item.
        { name: "About Us", link: "AboutSection" },   // Rename "About" to "About Us" for clarity.
        { name: "Our Skills", link: "Skills" },       // Rename "Skills" to something more descriptive like "Our Skills".
        // { name: "Our Work", link: "Work" },           // Group Services and Projects under "Our Work".
        { name: "Services", link: "Services" },
        { name: "Projects", link: "Project" },
        { name: "Contact", link: "Contectme" },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full bg-black shadow-xl transition-transform duration-300 z-50 ${isScrolled ? "translate-y-0" : "-translate-y-full"}`}
        >
            <div className="container flex justify-between items-center px-4 lg:px-8">
                <Link
                    to="/"
                    className="text-2xl font-bold text-yellow-400 p-3 lg:p-4 lg:ml-4"
                >
                    JUGENDRA
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex lg:items-center lg:space-x-8">
                    <ul className="flex gap-6 text-lg font-medium">
                        {ListItem.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.link}
                                    className="text-lg font-medium text-white hover:text-yellow-400 relative group"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`absolute -top-[49px] left-0 w-full h-screen bg-black z-50 transform transition-transform duration-500 ease-in-out mt-16 ${isOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                    id="mobile-menu"
                >
                    {/* Navigation Links */}
                    <ul className="flex flex-col items-start gap-4 text-base font-medium px-4  z-10">
                        <Link
                            to="/"
                            className="text-2xl font-bold text-yellow-400 "
                        >
                            JUGENDRA
                        </Link>

                        {ListItem.map((item) => (
                            <li key={item.name} className="w-full px-2 text-white">
                                <a
                                    href={item.link}
                                    className="w-full"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button onClick={toggleMenu} className="fixed top-4 right-4 lg:hidden z-50" aria-expanded={isOpen} aria-label="Toggle navigation">
                    {isOpen ? <FaTimes className="w-6 h-6 text-[#FFBD39]" /> : <FaBars className="w-6 h-6 text-[#FFBD39]" />}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
