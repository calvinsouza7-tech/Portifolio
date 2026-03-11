export function Services() {
  const services = [
    {
      icon: '🎨',
      title: 'Site Institucional',
      price: 'R$ 1.499',
      description: 'Site profissional para apresentar sua empresa',
      features: [
        'Design responsivo',
        'Até 5 páginas',
        'Formulário de contato',
        'SEO básico',
        'Suporte 30 dias',
      ],
      featured: false,
    },
    {
      icon: '🛒',
      title: 'E-commerce',
      price: 'R$ 4.999',
      description: 'Loja virtual completa para vender online',
      features: [
        'Catálogo de produtos',
        'Carrinho de compras',
        'Integração de pagamentos',
        'Controle de estoque',
        'Suporte 90 dias',
      ],
      featured: true,
    },
    {
      icon: '📱',
      title: 'App Web',
      price: 'R$ 7.999',
      description: 'Aplicação web personalizada e escalável',
      features: [
        'Funcionalidades customizadas',
        'Dashboard interativo',
        'API integrada',
        'Análise de dados',
        'Suporte 6 meses',
      ],
      featured: false,
    },
  ]

  return (
    <section id="servicos" className="py-32 relative">
      <div className="container mx-auto px-5">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block bg-[rgba(108,92,231,0.1)] border border-[rgba(108,92,231,0.3)] text-[#6C5CE7] px-4 py-2 rounded-full text-sm font-medium mb-5">
            Planos
          </div>
          <h2 className="font-[SpaceGrotesk] text-5xl font-bold mb-3">
            Escolha o Plano Perfeito
          </h2>
          <p className="text-white text-opacity-60 text-lg">
            Soluções personalizadas para todos os tipos de negócio
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-10 transition-all duration-500 hover:-translate-y-2.5 group overflow-hidden ${
                service.featured
                  ? 'bg-[rgba(0,212,170,0.1)] border border-[rgba(0,212,170,0.3)]'
                  : 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]'
              }`}
            >
              {/* Top border animation */}
              <div
                className="absolute top-0 left-0 right-0 h-0.75 bg-gradient-to-r from-[#00D4AA] to-[#6C5CE7]"
                style={{
                  transform: 'scaleX(0)',
                  transition: 'transform 0.4s',
                  transformOrigin: 'left',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scaleX(1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scaleX(0)'
                }}
              ></div>

              {/* Badge */}
              {service.featured && (
                <div
                  className="absolute top-5 right-5 px-3 py-1 rounded-2xl text-xs font-semibold text-white"
                  style={{
                    background: 'linear-gradient(135deg, #00D4AA 0%, #00B894 50%, #6C5CE7 100%)',
                  }}
                >
                  Mais Popular
                </div>
              )}

              {/* Icon */}
              <div className="w-16 h-16 rounded-3xl flex items-center justify-center text-3xl mb-6 bg-[rgba(0,212,170,0.1)]">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>

              {/* Price */}
              <div className="font-[SpaceGrotesk] text-4xl font-bold mb-1">
                {service.price}
              </div>
              <div className="text-sm text-white text-opacity-50 mb-1">/projeto</div>

              {/* Description */}
              <p className="text-white text-opacity-60 mb-6 pb-6 border-b border-[rgba(255,255,255,0.1)]">
                {service.description}
              </p>

              {/* Features */}
              <ul className="list-none space-y-3 mb-7">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-white text-opacity-80">
                    <i className="fas fa-check text-[#00D4AA]"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <a
                href="#"
                className="block text-center py-4 rounded-2xl font-semibold text-white no-underline transition-all duration-300 hover:scale-105"
                style={{
                  background: service.featured
                    ? 'linear-gradient(135deg, #00D4AA 0%, #00B894 50%, #6C5CE7 100%)'
                    : 'transparent',
                  border: service.featured ? 'none' : '2px solid rgba(0, 212, 170, 0.5)',
                  color: service.featured ? 'white' : '#00D4AA',
                }}
              >
                Contratar Agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
