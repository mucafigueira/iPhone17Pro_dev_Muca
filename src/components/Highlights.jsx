

export default function Highlights() {


    const cards = [

        { value: '12MP', title: "Ultra Wide", label: 'Campo de visão de 120º com modo noturno', color: 'text-orange-500' },
        { value: '48MP', title: "Principal", label: 'Sensor quad-pixel com foco automático', color: 'text-blue-600' },
        { value: '32MP', title: "Telefoto 5x", label: 'Zoom óptico de 5x com estabilização', color: 'text-accent' }

    ]

    return (
        <section className="bg-black py-12 sm:py-20 px-4 sm:px-6" id="design">

            <div className="max-w-5xl mx-auto">

                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Design revolucionário</h2>
                    <p className="text-base sm:text-lg text-gray-400">Cada detalhe foi pensado para criar a melhor experiência</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-12 sm:mb-16">

                    <div className="bg-gray-950 rounded-2xl p-4 sm:p-8">
                        <img className="w-full rounded-lg sm:rounded-2xl mb-4" src="/img/Titanio Premium.jpg" alt="iphoneTitanio" />
                        <h3 className="font-bold mb-2 text-xl sm:text-3xl">Titânio Premium</h3>
                        <p className="text-gray-300 text-sm sm:text-base">Estrutura em titânio de grau aeroespacial. O smartphone mais forte e leve.</p>
                    </div>

                    <div className="bg-gray-950 rounded-2xl p-4 sm:p-8">
                        <img className="w-full rounded-lg sm:rounded-2xl mb-4" src="/img/ios 19.webp" alt="iosiPhone" />
                        <h3 className="font-bold mb-2 text-xl sm:text-3xl">iOS 19</h3>
                        <p className="text-gray-300 text-sm sm:text-base">O sistema operacional mais avançado do mundo  com IA integrado</p>
                    </div>
                </div>

                <div className="bg-gray-950 p-6 sm:p-12 rounded-2xl mb-12 relative" id="performance">
                    <h3 className="text-2xl sm:text-4xl font-bold mb-4 text-gradient">A17 Pro</h3>
                    <p className="mb-6 text-gray-300 text-sm sm:text-base">A câmera mais poderoso em um smartphone</p>
                    <img className="w-full rounded-lg sm:rounded-t-2xl" src="/img/iphone-17-pro_destak.webp" alt="iPhone 17 Pro" />
                    <div className="max-w-5xl mx-auto h-2 line-gradient mb-4"></div>

                    <div className="absolute right-4 sm:right-6 bottom-4 sm:bottom-6 border-l-2 ml-12 border-gray-700 pl-2 sm:pl-4">
                        <h3 className="text-gray-300 text-xs sm:text-sm font-medium whitespace-nowrap">Desempenho total</h3>
                        <span className="text-xl sm:text-3xl text-gradient font-bold">100%</span>
                    </div>
                    <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                        <li><span className="text-accent">✓</span> CPU 25% mais eficiente</li>
                        <li><span className="text-accent">✓</span> Neural Engine com 16 núcleo</li>
                        <li><span className="text-accent">✓</span> Ray tracing acelerado por hardware</li>
                        <li><span className="text-accent">✓</span> Câmera de 48MP com estabilização óptica</li>
                    </ul>
                </div>

                <div className="max-w-5xl mx-auto" id="camera">
                    <div className="mb-8 sm:mb-12 mt-6">
                        <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold">Sistema de Câmera Pro avançado</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
                        {cards.map((card, index) => (
                            <div className="cursor-pointer bg-gray-950 rounded-xl p-4 sm:p-6 hover:bg-gray-900 transition-all duration-300 hover:scale-105 border-l-2 border-orange-500 text-center" key={index}>
                                <p className={`text-2xl sm:text-3xl font-bold ${card.color}`}>{card.value}</p>
                                <h4 className="text-base sm:text-xl font-bold mb-2">{card.title}</h4>
                                <p className="text-xs sm:text-sm text-gray-400">{card.label}</p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    )
}
