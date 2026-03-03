import { useState } from "react";

export default function Colors() {

    const colors = [

        { id: "blue", name: "Titânio Azul", imagem: '/img/iPhone blue.webp', colorClass: 'bg-blue-500' },
        { id: "silver", name: "Titânio Natural", imagem: '/img/iphoneSilver.webp', colorClass: 'bg-gray-300' },
        { id: "orange", name: "Titânio Laranja", imagem: '/img/iphoneOrange.webp', colorClass: 'bg-orange-500' },

    ];

    const models = [
        { name: "Pro Max", screen: "6.9 polegadas", storage: '256GB, 512GB ou 1TB', battery: 'Até 33 horas de vídeo', weight: '221g' },
        { name: "Pro", screen: "6.3 polegadas", storage: '128GB, 256GB ou 512', battery: 'Até 29 horas de vídeo', weight: '199g' },
    ];

    const [selectedColor, setSelectedColor] = useState("orange");

    return (
        <section id="colors" className="bg-black py-12 sm:py-20 px-4 sm:px-6 md:px-8">

            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Escolha a sua cor</h2>
                    <p className="text-gray-300 text-base sm:text-lg md:text-xl">Quatro acabamento em titânio lindo</p>
                </div>

                <div className="flex justify-center mb-6 sm:mb-8">
                    <div className="relative w-full max-w-3xl">
                        <div className="relative flex items-center justify-center min-h-[400px] sm:min-h-[550px] md:min-h-[700px]">
                            <img src={colors.find(color => color.id === selectedColor).imagem}
                                alt="iphone17"
                                className="max-w-full max-h-[350px] sm:max-h-[550px] md:max-h-[750px] mx-auto" />
                        </div>

                        <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-0 right-0 text-center">
                            <div className="px-6 sm:px-8 py-3 sm:py-4 rounded-full backdrop-blur-md bg-black/30 inline-block">
                                <h3 className="text-lg sm:text-2xl font-semibold">{colors.find(color => color.id === selectedColor).name}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
                    {colors.map(color => (
                        <button key={color.id} onClick={() => setSelectedColor(color.id)}
                            className="relative transition-all duration-300"
                        >
                            <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full cursor-pointer ${color.colorClass} ${selectedColor === color.id ? 'border-4 border-accent' : 'border-2 border-gray-600'
                                } transition-all duration-300 hover:scale-105`}></div>
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 max-w-4xl mx-auto">
                    {models.map((model, index) => (
                        <div key={index} className="bg-gray-950 rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-800">
                            <div className="flex items-center mb-3">
                                <div className="text-3xl sm:text-4xl mr-2 shadow-md p-1 rounded-full">📱</div>
                                <h3 className="text-xl sm:text-2xl font-bold">{model.name}</h3>
                            </div>
                            <p className="text-gray-400 mb-4 text-sm sm:text-base">{model.screen}</p>
                            <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">
                                <li><span className="text-accent">✓</span> {model.storage}</li>
                                <li><span className="text-accent">✓</span> {model.battery}</li>
                                <li><span className="text-accent">✓</span> {model.weight}</li>
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12 sm:mt-16 max-w-5xl mx-auto px-4">
                    <button className="bg-blue-600 hover:bg-blue-700 hover:scale-105 py-4 sm:py-6 px-6 sm:px-8 rounded-full transition-all duration-300 text-white font-semibold text-sm sm:text-base w-full sm:w-auto">Comprar agora a partir de AO 450.000.00</button>
                </div>
                <p className="text-gray-400 text-center text-xs sm:text-sm mt-6">Ou em até 12x de AO 540.000.00 sem juros</p>
            </div>
        </section>
    )
}
