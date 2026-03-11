export function Benefits() {
  const benefits = [
    {
      icon: '🎯',
      title: 'Design Responsivo',
      description: 'Sites que funcionam perfeitamente em todos os dispositivos',
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Carregamento rápido para melhor experiência do usuário',
    },
    {
      icon: '🔒',
      title: 'Segurança',
      description: 'Proteção máxima com certificados SSL e backups automáticos',
    },
    {
      icon: '📊',
      title: 'Análise',
      description: 'Dashboard completo para monitorar dados e conversões',
    },
  ]

  return (
    <section id="beneficios" className="py-32 bg-[rgba(0,0,0,0.3)]">
      <div className="container mx-auto px-5">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-[SpaceGrotesk] text-5xl font-bold mb-4">
            Por que escolher a WebDesign Pro?
          </h2>
          <p className="text-white text-opacity-60 text-lg">
            Oferecemos tudo que você precisa para ter sucesso online
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-1.25 hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(0,212,170,0.2)]"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-5 bg-gradient-to-r from-[#00D4AA] to-[#6C5CE7]">
                {benefit.icon}
              </div>
              <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
              <p className="text-sm text-white text-opacity-50">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
