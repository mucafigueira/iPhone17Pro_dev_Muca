

export default function Hero() {
    return (
        <section className="relative h-screen sm:h-auto overflow-hidden bg-black pt-20 sm:pt-0">
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-screen z-0 flex items-center justify-center sm:block sm:pt-0 pt-4">
                <img
                    src="../../public/img/Hero.jpg"
                    alt="iPhone 17 Hero Image"
                    className="h-full w-auto sm:w-full sm:h-full object-cover object-center opacity-90 sm:px-0 px-4"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 z-0 pointer-events-none"></div>

            <a
                href="#features"
                className="relative sm:absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce cursor-pointer flex justify-center w-full sm:w-auto py-4 sm:py-0"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="h-6 w-6 text-white"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    />
                </svg>
            </a>
        </section>
    )
}
