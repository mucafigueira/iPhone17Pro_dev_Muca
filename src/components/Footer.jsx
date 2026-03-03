

export default function Footer() {

  const sections = [
    {
      title: 'Comparar e  Saber Mais',
      links: ['iPhone 17 Pro', 'iPhone 17 Pro Max', 'Comprar modelos', 'Acessórios']
    },
    {
      title: 'Especificações',
      links: ['Características técnicas', 'Câmera', 'Bateria', 'Display']
    },
    {
      title: 'Suporte',
      links: ['Suporte ao iPhone', 'AppleCare+', 'iOS 17', 'Cantacto']
    },
    {
      title: 'Apple',
      links: ['Sobre a Apple', 'Newsroom', 'Privacidade', 'Carreiras']
    }
  ];

  const buttonLinks = ['Política de Privacidade', 'Termos de Uso', 'Venda']

  return (
    <footer className="bg-gradient-to-br from-gray-950 to-transparent border-t border-gray-800">

      <div className="max-w-5xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {section.links.map((link, linkIndex) => (

                  <li key={linkIndex}>
                    <a href="#" className="hover:text-white">{link}</a>
                  </li>

                ))}
              </ul>
            </div>

          ))}
        </div>
      </div>

      <div className="border-t border-gray-800 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-5xl mx-auto">
          <p className="text-gray-500 text-sm">Copyright &copy; 2026 Apple Inc. Todos os direitos reservados</p>

          <div className="flex gap-6 text-sm text-gray-4">
            {buttonLinks.map((isLink, index) => (
              <a href="#" key={index} className="text-gray-500 hover:text-white transition-all duration-300 text-md">{isLink}</a>
            ))}
          </div>


        </div>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-gray-500 mt-6 ">Website criado para fins de visibilidades dos produtos no mercado digital</p>
        </div>
      </div>



    </footer>

  )

}
