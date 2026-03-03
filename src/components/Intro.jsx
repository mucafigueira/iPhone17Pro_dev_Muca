

export default function Intro() {

    const cards = [
        { value: '6.3"', label: 'Display Super Retine XDR', color: 'text-blue-600' },
        { value: 'A18 Pro', label: 'Dual Chip e  mais rápido', color: 'text-orange-500' },
        { value: '48MP', label: 'Sistema de Câmera', color: 'text-blue-600' },
        { value: '29h', label: 'Baterias 5000 mVh', color: 'text-orange-500' }
    ]
    return (
        <section className="bg-black pt-4 py-12 sm:py-20 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">iPhone 17 Pro</h1>
                <p className="text-lg sm:text-2xl md:text-4xl mb-4 text-gradient font-bold">Titânio. Tão leve. Tão Pro</p>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-10 max-w-3xl mx-auto">O design mais refinado que já criamos. Titânio de grau aeroespecial. Dual Chip A18 Pro. <br /> Sistema de Câmera Pro revolucionário</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16 px-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium cursor-pointer transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                    Compre agora
                </button>

                <button className="border-2 border-white rounded-full hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 cursor-pointer text-white hover:scale-105 text-base sm:text-lg font-medium w-full sm:w-auto">
                    Saiba mais
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto px-4">
                {cards.map((card, index) => (
                    <div className="cursor-pointer bg-gray-950 rounded-lg p-4 sm:p-6 hover:bg-gray-900 transition-all duration-300 hover:scale-105 border-l-2 border-blue-600" key={index}>
                        <p className={`text-2xl sm:text-3xl font-bold ${card.color}`}>{card.value}</p>
                        <p className="text-xs sm:text-sm text-gray-400 mt-2">{card.label}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
