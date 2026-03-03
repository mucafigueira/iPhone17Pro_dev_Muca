

import { useState } from "react";

export default function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

                <img
                    src="/apple.png"
                    alt="iPhone Logo"
                    className="h-8 w-14"
                />
                {/* desktop links */}
                <div className="hidden md:flex space-x-8 ml-6 items-center">
                    <a href="#design" className="hover:text-gray-300">
                        Design
                    </a>
                    <a href="#camera" className="hover:text-gray-300">
                        Câmera
                    </a>
                    <a href="#performance" className="hover:text-gray-300">
                        Performance
                    </a>
                    <a href="#colors" className="hover:text-gray-300">
                        Cores
                    </a>
                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full">
                        Comprar
                    </button>
                </div>

                {/* hamburger button for mobile */}
                <button
                    className="md:hidden flex items-center justify-center p-2 focus:outline-none"
                    aria-label="menu"
                    onClick={() => setOpen((o) => !o)}
                >
                    {open ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* mobile menu */}
            <div
                className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${open ? "max-h-64" : "max-h-0"
                    }`}
            >
                <div className="flex flex-col items-center gap-4 py-4">
                    <a
                        href="#design"
                        className="hover:text-gray-300"
                        onClick={() => setOpen(false)}
                    >
                        Design
                    </a>
                    <a
                        href="#camera"
                        className="hover:text-gray-300"
                        onClick={() => setOpen(false)}
                    >
                        Câmera
                    </a>
                    <a
                        href="#performance"
                        className="hover:text-gray-300"
                        onClick={() => setOpen(false)}
                    >
                        Performance
                    </a>
                    <a
                        href="#colors"
                        className="hover:text-gray-300"
                        onClick={() => setOpen(false)}
                    >
                        Cores
                    </a>
                    <button
                        className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full"
                        onClick={() => setOpen(false)}
                    >
                        Comprar
                    </button>
                </div>
            </div>
        </nav>
    );
}
