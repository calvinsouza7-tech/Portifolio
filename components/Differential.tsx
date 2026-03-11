export function Differential() {
  const differentials = [
    {
      icon: '👥',
      title: 'Time Especializado',
      description: 'Profissionais experientes em design e desenvolvimento',
    },
    {
      icon: '⏱️',
      title: 'Entrega Rápida',
      description: 'Projetos entregues no prazo combinado',
    },
    {
      icon: '🎨',
      title: 'Criatividade',
      description: 'Soluções inovadoras e personalizadas para seu negócio',
    },
    {
      icon: '💰',
      title: 'Melhor Preço',
      description: 'Qualidade premium com preços competitivos',
    },
  ]

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-[SpaceGrotesk] text-5xl font-bold mb-6">
              O que nos torna <span className="gradient-text">diferente?</span>
            </h2>

            <p className="text-lg text-white text-opacity-70 mb-8">
              Nossa abordagem inovadora combina design criativo com desenvolvimento técnico de ponta. Entregamos não apenas sites bonitos, mas soluções que geram resultados.
            </p>

            {/* Differentials List */}
            <div className="space-y-6">
              {differentials.map((diff, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[rgba(0,212,170,0.1)] flex items-center justify-center text-xl flex-shrink-0 text-[#00D4AA]">
                    {diff.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{diff.title}</h4>
                    <p className="text-white text-opacity-50">{diff.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div
            className="relative w-full h-96 rounded-4xl overflow-hidden border-2 border-[rgba(0,212,170,0.3)]"
            style={{
              background:
                'linear-gradient(135deg, rgba(0, 212, 170, 0.2) 0%, rgba(108, 92, 231, 0.2) 100%), url("https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              className="absolute inset-0 border-2 border-[rgba(0,212,170,0.3)] rounded-4xl m-4"
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
