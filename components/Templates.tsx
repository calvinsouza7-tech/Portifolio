export function Templates() {
  const templates = [
    {
      id: 1,
      name: 'Advogado',
      category: 'Serviços Profissionais',
      image: '⚖️',
      description: 'Site profissional para advocacia',
    },
    {
      id: 2,
      name: 'Dentista',
      category: 'Saúde',
      image: '🦷',
      description: 'Clínica odontológica moderna',
    },
    {
      id: 3,
      name: 'Eletricista',
      category: 'Serviços',
      image: '⚡',
      description: 'Serviços de eletricidade profissional',
    },
    {
      id: 4,
      name: 'Restaurante',
      category: 'Alimentação',
      image: '🍽️',
      description: 'Cardápio digital e reservas',
    },
    {
      id: 5,
      name: 'Solar',
      category: 'Energia',
      image: '☀️',
      description: 'Energia solar e sustentabilidade',
    },
    {
      id: 6,
      name: 'Treinador',
      category: 'Fitness',
      image: '💪',
      description: 'Personal trainer e academia',
    },
    {
      id: 7,
      name: 'Yoga',
      category: 'Bem-estar',
      image: '🧘',
      description: 'Aulas de yoga e meditação',
    },
    {
      id: 8,
      name: 'Consultor',
      category: 'Negócios',
      image: '📊',
      description: 'Consultoria empresarial',
    },
  ]

  return (
    <section id="templates" className="py-32 relative">
      <div className="container mx-auto px-5">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block bg-[rgba(108,92,231,0.1)] border border-[rgba(108,92,231,0.3)] text-[#6C5CE7] px-4 py-2 rounded-full text-sm font-medium mb-5">
            Templates Prontos
          </div>
          <h2 className="font-[SpaceGrotesk] text-5xl font-bold mb-3">
            Comece com Nossos Templates
          </h2>
          <p className="text-white text-opacity-60 text-lg">
            Escolha um template e customize para sua empresa
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.25 hover:border-[rgba(0,212,170,0.3)] group cursor-pointer"
            >
              {/* Template Image */}
              <div
                className="h-48 flex items-center justify-center text-7xl bg-[rgba(0,212,170,0.05)] transition-colors duration-300 group-hover:bg-[rgba(0,212,170,0.1)]"
              >
                {template.image}
              </div>

              {/* Template Info */}
              <div className="p-6">
                <div className="text-sm text-[#6C5CE7] font-medium mb-2 uppercase">
                  {template.category}
                </div>
                <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
                <p className="text-sm text-white text-opacity-50 mb-4">
                  {template.description}
                </p>

                {/* Button */}
                <a
                  href={`/templates/${template.id}`}
                  className="inline-flex items-center justify-center w-full py-2.5 rounded-lg bg-transparent border border-[rgba(0,212,170,0.3)] text-[#00D4AA] font-medium text-sm no-underline transition-all duration-300 hover:bg-[rgba(0,212,170,0.1)]"
                >
                  Ver mais
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
