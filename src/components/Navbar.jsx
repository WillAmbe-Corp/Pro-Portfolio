import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
    { components: "Home", Link: "/" },
    { components: "About", Link: "/about" },
    { components: "Projects", Link: "/projects" },
    { components: "Contact", Link: "/contact" }
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="p-4 md:p-5 relative bg-white">
            <div className="flex justify-between items-center">
                <Link to="/" className="font-bold text-lg">npa&copy;</Link>
                
                <button 
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

                <ul className={`md:flex gap-4 font-semibold ${isMenuOpen ? 'absolute top-full left-0 right-0 bg-white border-b shadow-lg py-4 z-50' : 'hidden'} md:static md:border-0 md:shadow-none md:py-0`}>
                    {navItems.map(({ components, Link: path }) => (
                        <li key={components} className="px-4 py-2 md:p-0">
                            <Link 
                                to={path}
                                className={`hover:text-blue-400 transition-colors ${
                                    location.pathname === path ? 'text-blue-600' : ''
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {components}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}